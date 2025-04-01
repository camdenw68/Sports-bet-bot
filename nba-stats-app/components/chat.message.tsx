import type { Message } from "ai"
import { Card, CardContent } from "@/components/ui/card"

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <Card className={`max-w-[80%] ${isUser ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
        <CardContent className="p-3">
          <div className="text-sm font-medium mb-1">{isUser ? "You" : "Assistant"}</div>
          <div>{message.content}</div>
        </CardContent>
      </Card>
    </div>
  )
}

