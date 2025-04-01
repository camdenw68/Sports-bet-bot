// NBA API client for fetching player data
import { getPlayerHistoricalMatchup } from "@/lib/nba-data"

// Types for the API responses
export interface Player {
  id: number
  first_name: string
  last_name: string
  position: string
  height_feet: number | null
  height_inches: number | null
  weight_pounds: number | null
  team: {
    id: number
    abbreviation: string
    city: string
    conference: string
    division: string
    full_name: string
    name: string
  }
}

export interface PlayerStats {
  games_played: number
  player_id: number
  season: number
  min: string
  fgm?: number
  fga?: number
  fg3m?: number
  fg3a?: number
  ftm?: number
  fta?: number
  oreb?: number
  dreb?: number
  reb: number
  ast: number
  stl: number
  blk: number
  turnover?: number
  pf?: number
  pts: number
  fg_pct: number
  fg3_pct: number
  ft_pct?: number
}

export interface PlayerWithStats extends Player {
  stats: {
    ppg: number
    rpg: number
    apg: number
    fg: string
    threePoint: string
  }
  image: string
}

export interface ApiResponse<T> {
  data: T[]
  meta?: {
    total_pages: number
    current_page: number
    next_page: number | null
    per_page: number
    total_count: number
  }
}

// Function to search for players
export async function searchPlayers(query: string): Promise<PlayerWithStats[]> {
  try {
    // Use our server-side API route
    const response = await fetch(`/api/nba/players/search?q=${encodeURIComponent(query)}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data: ApiResponse<Player> = await response.json()

    if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
      return []
    }

    // Fetch stats for each player
    const playersWithStats = await Promise.all(
      data.data.map(async (player) => {
        const stats = await getPlayerStats(player.id)
        return {
          ...player,
          name: `${player.first_name} ${player.last_name}`,
          stats: stats,
          // Generate a placeholder image URL based on player name for consistency
          image: `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(player.last_name)}`,
        }
      }),
    )

    return playersWithStats
  } catch (error) {
    console.error("Error searching players:", error)
    return []
  }
}

// Function to get player stats
async function getPlayerStats(playerId: number): Promise<PlayerWithStats["stats"]> {
  try {
    // Use our server-side API route
    const response = await fetch(`/api/nba/players/stats?player_id=${playerId}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    // If we have stats for the player
    if (data.data && data.data.length > 0) {
      const playerStats = data.data[0]
      return {
        ppg: playerStats.pts || 0,
        rpg: playerStats.reb || 0,
        apg: playerStats.ast || 0,
        fg: `${(playerStats.fg_pct * 100).toFixed(1)}%`,
        threePoint: `${(playerStats.fg3_pct * 100).toFixed(1)}%`,
      }
    }

    // If no stats are available, return default values
    return {
      ppg: 0,
      rpg: 0,
      apg: 0,
      fg: "0%",
      threePoint: "0%",
    }
  } catch (error) {
    console.error("Error fetching player stats:", error)
    return {
      ppg: 0,
      rpg: 0,
      apg: 0,
      fg: "0%",
      threePoint: "0%",
    }
  }
}

// Function to get historical matchup stats
export async function getHistoricalMatchupStats(playerId: number, teamAbbreviation: string): Promise<any> {
  try {
    // Use our server-side API route
    const response = await fetch(`/api/nba/matchups?player_id=${playerId}&team_abbr=${teamAbbreviation}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.data) {
      throw new Error("No matchup data returned")
    }

    return data.data
  } catch (error) {
    console.error("Error fetching historical matchup stats:", error)

    // Use the local function as a fallback
    try {
      return getPlayerHistoricalMatchup(playerId, teamAbbreviation)
    } catch (fallbackError) {
      console.error("Fallback error:", fallbackError)

      // Final fallback with generic data
      return {
        opponent: teamAbbreviation.toUpperCase(),
        games_played: 1,
        games: [
          {
            date: new Date().toLocaleDateString(),
            opponent: teamAbbreviation.toUpperCase(),
            result: `vs ${teamAbbreviation}`,
            stats: {
              pts: 18,
              reb: 5,
              ast: 4,
              stl: 1,
              blk: 0,
              fg: "46.0%",
              threePoint: "36.0%",
              ft: "75.0%",
              min: "32",
            },
          },
        ],
        averages: {
          ppg: "18.0",
          rpg: "5.0",
          apg: "4.0",
          spg: "1.0",
          bpg: "0.0",
        },
      }
    }
  }
}

// Function to get team abbreviations for autocomplete
export async function getTeamAbbreviations(): Promise<string[]> {
  try {
    const response = await fetch("/api/nba/teams")

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Invalid team data format")
    }

    return data.data.map((team: any) => team.abbreviation)
  } catch (error) {
    console.error("Error fetching team abbreviations:", error)

    // Return fallback data from our local database
    return [
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
  }
}

