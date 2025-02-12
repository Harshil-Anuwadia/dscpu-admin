"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"

type Project = {
  id: number
  name: string
  description: string
  status: "In Progress" | "Completed" | "On Hold"
  progress: number
  teamMembers: { name: string; avatar: string }[]
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "DSCPU Website Redesign",
      description: "Redesigning the main website for better user experience",
      status: "In Progress",
      progress: 75,
      teamMembers: [
        { name: "John Doe", avatar: "/avatars/01.png" },
        { name: "Jane Smith", avatar: "/avatars/02.png" },
      ],
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Creating a mobile app for DSCPU members",
      status: "On Hold",
      progress: 30,
      teamMembers: [
        { name: "Alice Johnson", avatar: "/avatars/03.png" },
        { name: "Bob Wilson", avatar: "/avatars/04.png" },
      ],
    },
    {
      id: 3,
      name: "AI Workshop Series",
      description: "Organizing a series of workshops on Artificial Intelligence",
      status: "Completed",
      progress: 100,
      teamMembers: [
        { name: "Emma Brown", avatar: "/avatars/05.png" },
        { name: "Michael Lee", avatar: "/avatars/06.png" },
      ],
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "In Progress" as Project["status"],
    progress: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        ...formData,
        teamMembers: [], // In a real app, you'd probably select team members here
      },
    ])
    setIsDialogOpen(false)
    setFormData({ name: "", description: "", status: "In Progress", progress: 0 })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Projects</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Project Name"
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
              <select
                className="w-full p-2 border rounded"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Project["status"] })}
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
              <Input
                type="number"
                placeholder="Progress (%)"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: Number(e.target.value) })}
                min="0"
                max="100"
                required
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Add Project
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "default"
                        : project.status === "In Progress"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.progress}% complete</span>
                </div>
                <Progress value={project.progress} className="w-full" />
                <div>
                  <h4 className="text-sm font-medium mb-2">Team Members</h4>
                  <div className="flex space-x-2">
                    {project.teamMembers.map((member, index) => (
                      <Avatar key={index}>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

