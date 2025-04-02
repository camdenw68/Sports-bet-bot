"use client"

import { useState, useEffect } from "react"
import { useChat } from "ai/react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import PlayerCard from "@/components/player-card"
import { searchPlayers, getHistoricalMatchupStats, getTeamAbbreviations, type PlayerWithStats } from "@/lib/api"
import PlayerSearchInfo from "@/components/player-search-info"
import GameLogTable from "@/components/game-log-table"
import { getTeams } from "@/lib/api"




export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    onResponse: (response) => {
      // Process the response if needed
    },
  })

  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<PlayerWithStats[]>([])
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerWithStats | null>(null)
  const [historicalStats, setHistoricalStats] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [teamQuery, setTeamQuery] = useState("")
  const [teamSuggestions, setTeamSuggestions] = useState<string[]>([])
  const [isLoadingHistorical, setIsLoadingHistorical] = useState(false)
  const [allTeams, setAllTeams] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [teams, setTeams] = useState<any[]>([])


  // Fetch team abbreviations on component mount
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // Use a direct fallback approach to avoid API issues
        const fallbackTeams = [
          "ATL",
          "BOS",
          "BKN",
          "CHA",
          "CHI",
          "CLE",
          "DAL",
          "DEN",
          "DET",
          "GSW",
          "HOU",
          "IND",
          "LAC",
          "LAL",
          "MEM",
          "MIA",
          "MIL",
          "MIN",
          "NOP",
          "NYK",
          "OKC",
          "ORL",
          "PHI",
          "PHX",
          "POR",
          "SAC",
          "SAS",
          "TOR",
          "UTA",
          "WAS",
        ]

        try {
          const teams = await getTeamAbbreviations()
          if (teams && teams.length > 0) {
            setAllTeams(teams)
            setError(null)
          } else {
            // If the API returns empty data
            setAllTeams(fallbackTeams)
            setError("Using fallback team data.")
          }
        } catch (err) {
          console.error("Error fetching teams:", err)
          // If there's an error, use fallback
          setAllTeams(fallbackTeams)
          setError("Unable to load team data. Using fallback data.")
        }
      } catch (err) {
        console.error("Unexpected error:", err)
        // Final fallback in case of any unexpected errors
        setAllTeams([
          "ATL",
          "BOS",
          "BKN",
          "CHA",
          "CHI",
          "CLE",
          "DAL",
          "DEN",
          "DET",
          "GSW",
          "HOU",
          "IND",
          "LAC",
          "LAL",
          "MEM",
          "MIA",
          "MIL",
          "MIN",
          "NOP",
          "NYK",
          "OKC",
          "ORL",
          "PHI",
          "PHX",
          "POR",
          "SAC",
          "SAS",
          "TOR",
          "UTA",
          "WAS",
        ])
        setError("Unable to load team data. Using fallback data.")
      }
    }

    fetchTeams()
  }, [])

  // Filter team suggestions based on input
  useEffect(() => {
    if (teamQuery.length > 0) {
      const filteredTeams = allTeams.filter((team) => team.toLowerCase().includes(teamQuery.toLowerCase()))
      setTeamSuggestions(filteredTeams)
    } else {
      setTeamSuggestions([])
    }
  }, [teamQuery, allTeams])

  const handleSearch = async () => {
    if (searchQuery.trim().length === 0) return
  
    setIsSearching(true)
    setError(null)
  
    try {
      const players = await searchPlayers(searchQuery)
      const fetchedTeams = await getTeams()
      setTeams(fetchedTeams)
  
      // Manually attach team info to players
      const enrichedPlayers = players.map((player) => {
        const team = fetchedTeams.find((t) => t.id === player.team_id)
        return { ...player, team }
      })
  
      setSearchResults(enrichedPlayers)
  
      if (enrichedPlayers.length === 0) {
        setError(`No players found matching "${searchQuery}"`)
      }
    } catch (err) {
      console.error("Error searching players:", err)
      setError("Failed to search players. Please try again.")
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }
  
  

  const handlePlayerSelect = (player: PlayerWithStats) => {
    setSelectedPlayer(player)
    setHistoricalStats(null)
    setTeamQuery("")
    setError(null)
  }

  const handleHistoricalSearch = async (team: string) => {
    if (!selectedPlayer) return

    setIsLoadingHistorical(true)
    setError(null)

    try {
      const stats = await getHistoricalMatchupStats(selectedPlayer.id, team)
      setHistoricalStats(stats)
      if (!stats) {
        setError(`No matchup data found for ${selectedPlayer.first_name} ${selectedPlayer.last_name} against ${team}`)
      }
    } catch (err) {
      console.error("Error fetching historical stats:", err)
      setError("Failed to fetch matchup data. Please try again.")
      setHistoricalStats(null)
    } finally {
      setIsLoadingHistorical(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">NBA Stats & Betting Assistant</h1>
      </header>

      <div className="flex flex-col md:flex-row flex-1 p-4 gap-4">
        <Card className="flex-1 md:max-w-md">
          <CardContent className="p-4 flex flex-col h-[calc(100vh-8rem)]">
            <div className="text-xl font-semibold mb-4">Chat with the Assistant</div>

            <ScrollArea className="flex-1 pr-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && <div className="text-muted-foreground">Assistant is typing...</div>}
            </ScrollArea>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about players, stats, or matchups..."
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading}>
                  Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="flex-1 flex flex-col gap-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Card>
            <CardContent className="p-4">
              <div className="text-xl font-semibold mb-4">NBA Player Search</div>
              <PlayerSearchInfo />
              <div className="flex gap-2 mb-4">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for any NBA player..."
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch()
                    }
                  }}
                />
                <Button onClick={handleSearch} disabled={isSearching}>
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>

              {isSearching ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="p-3">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-8 w-full" />
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.length > 0 ? (
                    searchResults.map((player) => (
                      <PlayerCard
                        key={player.id}
                        player={player}
                        onClick={() => handlePlayerSelect(player)}
                        isSelected={selectedPlayer?.id === player.id}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center text-muted-foreground py-8">
                      {searchQuery ? "No players found. Try a different search." : "Search for NBA players by name."}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {selectedPlayer && (
            <Card>
              <CardContent className="p-4">
                <div className="text-xl font-semibold mb-4">
                  {selectedPlayer.first_name} {selectedPlayer.last_name} - Historical Matchups
                </div>
                <div className="relative mb-4">
                  <Input
                    placeholder="Enter team abbreviation (e.g., LAL, BOS, GSW)"
                    value={teamQuery}
                    onChange={(e) => setTeamQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && teamQuery) {
                        handleHistoricalSearch(teamQuery)
                        setTeamSuggestions([])
                      }
                    }}
                  />
                  {teamSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
                      {teamSuggestions.map((team) => (
                        <div
                          key={team}
                          className="px-4 py-2 hover:bg-muted cursor-pointer"
                          onClick={() => {
                            setTeamQuery(team)
                            handleHistoricalSearch(team)
                            setTeamSuggestions([])
                          }}
                        >
                          {team}
                        </div>
                      ))}
                    </div>
                  )}
                  <Button
                    className="mt-2"
                    onClick={() => handleHistoricalSearch(teamQuery)}
                    disabled={isLoadingHistorical || !teamQuery}
                  >
                    {isLoadingHistorical ? "Loading..." : "Get Stats"}
                  </Button>
                </div>

                {isLoadingHistorical ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <Skeleton key={i} className="h-20 w-full" />
                    ))}
                  </div>
                ) : historicalStats ? (
                  <GameLogTable
                    games={historicalStats.games || []}
                    averages={historicalStats.averages}
                    opponent={historicalStats.opponent}
                    gamesPlayed={historicalStats.games_played}
                  />
                ) : null}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

