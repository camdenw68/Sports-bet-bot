// lib/nba-api.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseKey)

// Get all players with stats
export const getAllPlayers = async () => {
  const { data, error } = await supabase
    .from('nba_players')
    .select(`
      id, full_name, team_id, position,
      stats: nba_player_stats (
        season, pts, ast, reb, opp_team_id
      )
    `)

  if (error) throw error
  return data
}

// Get teams
export const getAllTeams = async () => {
  const { data, error } = await supabase.from('nba_teams').select('*')
  if (error) throw error
  return data
}
