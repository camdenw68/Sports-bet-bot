// lib/api.ts
import { supabase } from './nba-api'


export async function searchPlayers(query: string): Promise<Player[]> {
  const { data, error } = await supabase
    .from('nba_players')
    .select('*')
    .ilike('full_name', `%${query}%`)

  if (error) {
    console.error("Supabase search error:", error)
    return []
  }

  return data
}


export const getTeams = async () => {
  const { data: teams, error: teamError } = await supabase.from('nba_teams').select('*')
  if (teamError) throw teamError
  return teams
}


export const getTeamAbbreviations = async () => {
  return [
    "ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET",
    "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN",
    "NOP", "NYK", "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS",
    "TOR", "UTA", "WAS"
  ]
}

// Add this temporary placeholder until you implement the real logic
export const getHistoricalMatchupStats = async (playerId: number, teamAbbreviation: string) => {
  return {
    opponent: teamAbbreviation,
    games_played: 0,
    averages: {
      pts: 0,
      ast: 0,
      reb: 0
    },
    games: []
  }
}
