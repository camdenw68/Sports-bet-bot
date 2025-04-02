"use client"
import { useEffect, useState } from 'react'
import { getAllPlayers } from '@/lib/nba-api'

export default function PlayerSearchInfo() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getAllPlayers()
        setPlayers(data)
      } catch (err) {
        console.error('Failed to fetch players:', err)
      }
    }

    fetchPlayers()
  }, [])

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.full_name}</h2>
          {/* You can also map through player.stats here */}
        </div>
      ))}
    </div>
  )
}
