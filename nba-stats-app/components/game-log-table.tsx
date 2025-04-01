import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GameLog {
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

interface GameLogTableProps {
  games: GameLog[]
  averages: {
    ppg: string
    rpg: string
    apg: string
    spg: string
    bpg: string
  }
  opponent: string
  gamesPlayed: number
}

export default function GameLogTable({ games, averages, opponent, gamesPlayed }: GameLogTableProps) {
  return (
    <Tabs defaultValue="games" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="games">Individual Games</TabsTrigger>
        <TabsTrigger value="averages">Averages</TabsTrigger>
      </TabsList>

      <TabsContent value="games" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>
              Game Log vs {opponent} ({gamesPlayed} games)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Matchup</TableHead>
                    <TableHead>MIN</TableHead>
                    <TableHead>PTS</TableHead>
                    <TableHead>REB</TableHead>
                    <TableHead>AST</TableHead>
                    <TableHead>STL</TableHead>
                    <TableHead>BLK</TableHead>
                    <TableHead>FG</TableHead>
                    <TableHead>3PT</TableHead>
                    <TableHead>FT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {games.map((game, index) => (
                    <TableRow key={index}>
                      <TableCell>{game.date}</TableCell>
                      <TableCell>{game.result}</TableCell>
                      <TableCell>{game.stats.min}</TableCell>
                      <TableCell className="font-bold">{game.stats.pts}</TableCell>
                      <TableCell>{game.stats.reb}</TableCell>
                      <TableCell>{game.stats.ast}</TableCell>
                      <TableCell>{game.stats.stl}</TableCell>
                      <TableCell>{game.stats.blk}</TableCell>
                      <TableCell>{game.stats.fg}</TableCell>
                      <TableCell>{game.stats.threePoint}</TableCell>
                      <TableCell>{game.stats.ft}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="averages" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Average Stats vs {opponent}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-sm text-muted-foreground">PPG</div>
                <div className="text-xl font-bold">{averages.ppg}</div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-sm text-muted-foreground">RPG</div>
                <div className="text-xl font-bold">{averages.rpg}</div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-sm text-muted-foreground">APG</div>
                <div className="text-xl font-bold">{averages.apg}</div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-sm text-muted-foreground">SPG</div>
                <div className="text-xl font-bold">{averages.spg}</div>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-sm text-muted-foreground">BPG</div>
                <div className="text-xl font-bold">{averages.bpg}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

