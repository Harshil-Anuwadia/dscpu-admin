"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type LeaderboardEntry = {
  id: number
  name: string
  points: number
}

export function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([
    { id: 1, name: "John Doe", points: 100 },
    { id: 2, name: "Jane Smith", points: 90 },
    { id: 3, name: "Bob Johnson", points: 80 },
  ])

  const [newName, setNewName] = useState("")
  const [newPoints, setNewPoints] = useState("")

  const addEntry = () => {
    if (newName && newPoints) {
      setEntries([
        ...entries,
        {
          id: entries.length + 1,
          name: newName,
          points: Number.parseInt(newPoints),
        },
      ])
      setNewName("")
      setNewPoints("")
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
      <div className="flex space-x-2">
        <Input placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <Input type="number" placeholder="Points" value={newPoints} onChange={(e) => setNewPoints(e.target.value)} />
        <Button onClick={addEntry}>Add Entry</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries
            .sort((a, b) => b.points - a.points)
            .map((entry, index) => (
              <TableRow key={entry.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.points}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

