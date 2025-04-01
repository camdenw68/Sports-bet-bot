// NBA API client for fetching real NBA data
// Uses a combination of NBA Stats API and ESPN data

import { nbaTeams } from "./nba-data"

// NBA Stats API endpoints
const NBA_API_BASE = "https://stats.nba.com/stats"
const ESPN_API_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba"

// Types for API responses
export interface NbaApiPlayer {
  id: number
  full_name: string
  first_name: string
  last_name: string
  position: string
  team: {
    id: number
    abbreviation: string
    full_name: string
  }
  stats?: {
    ppg: number
    rpg: number
    apg: number
    spg: number
    bpg: number
    fg_pct: number
    fg3_pct: number
    ft_pct: number
  }
}

export interface GameLog {
  date: string
  opponent: string
  result: string
  stats: {
    pts: number
    reb: number
    ast: number
    stl: number
    blk: number
    fg: string
    threePoint: string
    ft: string
    min: string
  }
}

// Function to search for players using ESPN API
export async function searchNbaPlayers(query: string): Promise<NbaApiPlayer[]> {
  try {
    // ESPN API for player search
    const response = await fetch(`${ESPN_API_BASE}/athletes?limit=50&active=true&query=${encodeURIComponent(query)}`, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`ESPN API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("Invalid ESPN API response format")
    }

    // Transform ESPN data to our format
    return data.items.map((player: any) => {
      // Extract team info
      const team = player.team
        ? {
            id: player.team.id || 0,
            abbreviation: player.team.abbreviation || "",
            full_name: player.team.displayName || "",
          }
        : {
            id: 0,
            abbreviation: "",
            full_name: "",
          }

      // Map position codes to full positions
      const positionMap: Record<string, string> = {
        PG: "Point Guard",
        SG: "Shooting Guard",
        SF: "Small Forward",
        PF: "Power Forward",
        C: "Center",
        G: "Guard",
        F: "Forward",
        "G-F": "Guard-Forward",
        "F-C": "Forward-Center",
        "F-G": "Forward-Guard",
        "C-F": "Center-Forward",
      }

      // Get position
      const position = player.position ? player.position.abbreviation || player.position.name || "" : ""

      return {
        id: player.id || 0,
        full_name: player.displayName || "",
        first_name: player.firstName || "",
        last_name: player.lastName || "",
        position: position,
        team: team,
      }
    })
  } catch (error) {
    console.error("Error searching NBA players:", error)
    throw error
  }
}

// Function to get player stats from ESPN
export async function getPlayerStats(playerId: number): Promise<any> {
  try {
    // ESPN API for player stats
    const response = await fetch(`${ESPN_API_BASE}/athletes/${playerId}/stats`, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`ESPN API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.splits || !data.splits.categories) {
      throw new Error("Invalid ESPN API stats response format")
    }

    // Extract season averages
    let ppg = 0,
      rpg = 0,
      apg = 0,
      spg = 0,
      bpg = 0,
      fg_pct = 0,
      fg3_pct = 0,
      ft_pct = 0

    // Find the categories we need
    data.splits.categories.forEach((category: any) => {
      if (category.name === "averages") {
        category.stats.forEach((stat: any) => {
          switch (stat.name) {
            case "pts":
              ppg = Number.parseFloat(stat.value)
              break
            case "reb":
              rpg = Number.parseFloat(stat.value)
              break
            case "ast":
              apg = Number.parseFloat(stat.value)
              break
            case "stl":
              spg = Number.parseFloat(stat.value)
              break
            case "blk":
              bpg = Number.parseFloat(stat.value)
              break
            case "fg%":
              fg_pct = Number.parseFloat(stat.value) / 100
              break
            case "3pt%":
              fg3_pct = Number.parseFloat(stat.value) / 100
              break
            case "ft%":
              ft_pct = Number.parseFloat(stat.value) / 100
              break
          }
        })
      }
    })

    return {
      ppg,
      rpg,
      apg,
      spg,
      bpg,
      fg_pct,
      fg3_pct,
      ft_pct,
    }
  } catch (error) {
    console.error("Error fetching player stats:", error)
    throw error
  }
}

// Function to get team schedule and results from ESPN
export async function getTeamSchedule(teamId: number): Promise<any[]> {
  try {
    const response = await fetch(`${ESPN_API_BASE}/teams/${teamId}/schedule`, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`ESPN API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.events || !Array.isArray(data.events)) {
      throw new Error("Invalid ESPN API schedule response format")
    }

    return data.events
  } catch (error) {
    console.error("Error fetching team schedule:", error)
    throw error
  }
}

// Function to get player game logs (for matchup data)
export async function getPlayerGameLogs(playerId: number, teamAbbr: string): Promise<any> {
  try {
    // ESPN API for player game logs
    const response = await fetch(`${ESPN_API_BASE}/athletes/${playerId}/gamelog`, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`ESPN API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.events || !Array.isArray(data.events)) {
      throw new Error("Invalid ESPN API game log response format")
    }

    // Filter games against the specified team
    const teamGames = data.events.filter((game: any) => {
      const opponent = game.opponent?.abbreviation || ""
      return opponent.toUpperCase() === teamAbbr.toUpperCase()
    })

    if (teamGames.length === 0) {
      throw new Error(`No games found against ${teamAbbr}`)
    }

    // Find the team's full name
    const team = nbaTeams.find((t) => t.abbreviation.toUpperCase() === teamAbbr.toUpperCase())
    const teamName = team ? team.full_name : teamAbbr.toUpperCase()

    // Process each individual game
    const games: GameLog[] = teamGames.map((game: any) => {
      // Default values
      let pts = 0,
        reb = 0,
        ast = 0,
        stl = 0,
        blk = 0
      let fgm = 0,
        fga = 0,
        fg3m = 0,
        fg3a = 0,
        ftm = 0,
        fta = 0
      let minutes = "0"

      // Extract stats
      if (game.stats) {
        game.stats.forEach((stat: any) => {
          switch (stat.name) {
            case "pts":
              pts = Number.parseFloat(stat.value)
              break
            case "reb":
              reb = Number.parseFloat(stat.value)
              break
            case "ast":
              ast = Number.parseFloat(stat.value)
              break
            case "stl":
              stl = Number.parseFloat(stat.value)
              break
            case "blk":
              blk = Number.parseFloat(stat.value)
              break
            case "fgm":
              fgm = Number.parseFloat(stat.value)
              break
            case "fga":
              fga = Number.parseFloat(stat.value)
              break
            case "tpm":
              fg3m = Number.parseFloat(stat.value)
              break
            case "tpa":
              fg3a = Number.parseFloat(stat.value)
              break
            case "ftm":
              ftm = Number.parseFloat(stat.value)
              break
            case "fta":
              fta = Number.parseFloat(stat.value)
              break
            case "min":
              minutes = stat.value
              break
          }
        })
      }

      // Calculate percentages
      const fg = fga > 0 ? `${((fgm / fga) * 100).toFixed(1)}%` : "0.0%"
      const threePoint = fg3a > 0 ? `${((fg3m / fg3a) * 100).toFixed(1)}%` : "0.0%"
      const ft = fta > 0 ? `${((ftm / fta) * 100).toFixed(1)}%` : "0.0%"

      // Format date
      const gameDate = game.date ? new Date(game.date) : new Date()
      const formattedDate = gameDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })

      // Game result
      const result =
        game.homeAway === "home" ? `vs ${game.opponent?.abbreviation || ""}` : `@ ${game.opponent?.abbreviation || ""}`

      return {
        date: formattedDate,
        opponent: teamName,
        result: result,
        stats: {
          pts,
          reb,
          ast,
          stl,
          blk,
          fg,
          threePoint,
          ft,
          min: minutes,
        },
      }
    })

    // Calculate averages for summary
    const totalGames = games.length
    const avgPts = games.reduce((sum, game) => sum + game.stats.pts, 0) / totalGames
    const avgReb = games.reduce((sum, game) => sum + game.stats.reb, 0) / totalGames
    const avgAst = games.reduce((sum, game) => sum + game.stats.ast, 0) / totalGames
    const avgStl = games.reduce((sum, game) => sum + game.stats.stl, 0) / totalGames
    const avgBlk = games.reduce((sum, game) => sum + game.stats.blk, 0) / totalGames

    return {
      opponent: teamName,
      games_played: totalGames,
      games: games,
      averages: {
        ppg: avgPts.toFixed(1),
        rpg: avgReb.toFixed(1),
        apg: avgAst.toFixed(1),
        spg: avgStl.toFixed(1),
        bpg: avgBlk.toFixed(1),
      },
    }
  } catch (error) {
    console.error("Error fetching player game logs:", error)
    throw error
  }
}

// Function to get NBA teams from ESPN
export async function getNbaTeams(): Promise<any[]> {
  try {
    const response = await fetch(`${ESPN_API_BASE}/teams`, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`ESPN API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.sports?.[0]?.leagues?.[0]?.teams) {
      throw new Error("Invalid ESPN API teams response format")
    }

    return data.sports[0].leagues[0].teams.map((team: any) => ({
      id: team.team.id,
      abbreviation: team.team.abbreviation,
      full_name: team.team.displayName,
      name: team.team.name,
      city: team.team.location,
      conference: team.team.conferenceAbbrev,
      division: team.team.divisionName,
    }))
  } catch (error) {
    console.error("Error fetching NBA teams:", error)
    throw error
  }
}

