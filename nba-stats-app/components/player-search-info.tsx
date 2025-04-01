import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function PlayerSearchInfo() {
  return (
    <Alert className="mb-4">
      <Info className="h-4 w-4" />
      <AlertTitle>NBA Player Search</AlertTitle>
      <AlertDescription>
        Search for any NBA player to see their current stats and historical performance against specific teams. Data is
        fetched from ESPN when available, with fallback to stored data when necessary.
      </AlertDescription>
    </Alert>
  )
}

