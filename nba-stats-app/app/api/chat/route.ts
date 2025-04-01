import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Create a system message to help the AI understand its role
  const systemMessage = {
    role: "system",
    content: `You are an NBA stats and betting assistant that helps users find information about basketball players and their stats.
    
    You can provide information about any NBA player. The user has access to a search functionality where they can look up specific player stats and historical matchups against teams.
    
    When users ask about a specific player, provide their key information and suggest looking at their historical performance against specific teams using the search feature.
    
    If users ask about betting odds or recommendations, provide general information but remind them to use the search functionality to look up specific player stats and historical matchups for more informed decisions.
    
    Always be helpful, concise, and informative. Encourage users to use the player search and historical matchup features available in the interface.`,
  }

  // Add the system message to the beginning of the messages array
  const augmentedMessages = [systemMessage, ...messages]

  const result = streamText({
    model: openai("gpt-4o"),
    messages: augmentedMessages,
  })

  return result.toDataStreamResponse()
}

