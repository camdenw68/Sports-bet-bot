// components/player-card.tsx
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PlayerCardProps {
  player: any
  onClick: () => void
  isSelected: boolean
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onClick, isSelected }) => {
  return (
    <Card
      onClick={onClick}
      className={`p-4 cursor-pointer border-2 ${
        isSelected ? "border-blue-500" : "border-transparent"
      } hover:border-blue-400 transition-all`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">
          {player.first_name} {player.last_name}
        </h3>
        <Badge variant="outline">{player.position || "N/A"}</Badge>
      </div>
      <div className="text-sm text-muted-foreground mb-2">
        {player.team?.full_name || "Unknown Team"}
      </div>

      {/* Placeholder stats section */}
      <div className="grid grid-cols-3 gap-2 text-center mt-2">
        <div>
          <div className="text-xs text-muted-foreground">PPG</div>
          <div className="font-bold">N/A</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">RPG</div>
          <div className="font-bold">N/A</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">APG</div>
          <div className="font-bold">N/A</div>
        </div>
      </div>
    </Card>
  )
}

export default PlayerCard
