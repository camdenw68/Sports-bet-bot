import { searchNbaPlayers } from "@/lib/nba-api"
import { searchPlayersByName } from "@/lib/nba-data"

// Server-side API route to search for players
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return Response.json({ data: [] })
  }

  try {
    // Try to get real data from ESPN API
    const players = await searchNbaPlayers(query)

    // Format the response to match the expected API format
    return Response.json({
      data: players.map((player) => ({
        id: player.id,
        first_name: player.first_name,
        last_name: player.last_name,
        position: player.position,
        height_feet: null,
        height_inches: null,
        weight_pounds: null,
        team: player.team,
      })),
    })
  } catch (error) {
    console.error("Error in player search API route:", error)

    // Fallback to our local database if the API fails
    try {
      const fallbackPlayers = searchPlayersByName(query)

      return Response.json({
        data: fallbackPlayers.map((player) => ({
          id: player.id,
          first_name: player.first_name,
          last_name: player.last_name,
          position: player.position,
          height_feet: player.height_feet,
          height_inches: player.height_inches,
          weight_pounds: player.weight_pounds,
          team: player.team,
        })),
      })
    } catch (fallbackError) {
      console.error("Fallback error:", fallbackError)
      return Response.json({ data: [] }, { status: 200 })
    }
  }
}

