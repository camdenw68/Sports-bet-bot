import { getNbaTeams } from "@/lib/nba-api"
import { nbaTeams } from "@/lib/nba-data"

// Server-side API route to fetch NBA teams
export async function GET() {
  try {
    // Try to get real team data from ESPN API
    const teams = await getNbaTeams()
    return Response.json({ data: teams })
  } catch (error) {
    console.error("Error in teams API route:", error)

    // Return fallback data if anything goes wrong
    return Response.json({ data: nbaTeams })
  }
}

