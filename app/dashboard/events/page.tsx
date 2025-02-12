"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, MapPin, Plus, Users } from "lucide-react"
import { format } from "date-fns"

type Event = {
  id: number
  name: string
  description: string
  date: Date
  location: string
  attendees: number
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      name: "Web Development Workshop",
      description: "Learn the basics of web development with HTML, CSS, and JavaScript",
      date: new Date(2023, 5, 15),
      location: "Online",
      attendees: 50,
    },
    {
      id: 2,
      name: "AI Hackathon",
      description: "Build innovative AI solutions in 24 hours",
      date: new Date(2023, 6, 1),
      location: "University Auditorium",
      attendees: 100,
    },
    {
      id: 3,
      name: "Tech Talk: Future of Cloud Computing",
      description: "Explore the latest trends in cloud computing",
      date: new Date(2023, 7, 10),
      location: "Conference Hall B",
      attendees: 75,
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: new Date(),
    location: "",
    attendees: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEvents([
      ...events,
      {
        id: events.length + 1,
        ...formData,
      },
    ])
    setIsDialogOpen(false)
    setFormData({ name: "", description: "", date: new Date(), location: "", attendees: 0 })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Events</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Event Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={(date) => date && setFormData({ ...formData, date })}
                className="rounded-md border"
              />
              <Input
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
              <Input
                type="number"
                placeholder="Expected Attendees"
                value={formData.attendees}
                onChange={(e) => setFormData({ ...formData, attendees: Number(e.target.value) })}
                min="0"
                required
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Add Event
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">{format(event.date, "MMMM d, yyyy")}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">{event.attendees} expected attendees</span>
                </div>
                <Badge variant="secondary">Upcoming</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

