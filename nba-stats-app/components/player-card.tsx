"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { PlayerWithStats } from "@/lib/api"

interface PlayerCardProps {
  player: PlayerWithStats
  onClick: () => void
  isSelected?: boolean
}

export default function PlayerCard({ player, onClick, isSelected = false }: PlayerCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md ${isSelected ? "ring-2 ring-primary" : ""}`}
      onClick={onClick}
    >
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
            <Image
              src={player.image || "/placeholder.svg"}
              alt={`${player.first_name} ${player.last_name}`}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-bold">
              {player.first_name} {player.last_name}
            </h3>
            <div className="text-sm text-muted-foreground">{player.team.full_name}</div>
            <Badge variant="outline" className="mt-1">
              {player.position || "N/A"}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="text-center">
            <div className="text-xs text-muted-foreground">PPG</div>
            <div className="font-bold">{player.stats.ppg.toFixed(1)}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground">RPG</div>
            <div className="font-bold">{player.stats.rpg.toFixed(1)}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground">APG</div>
            <div className="font-bold">{player.stats.apg.toFixed(1)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

