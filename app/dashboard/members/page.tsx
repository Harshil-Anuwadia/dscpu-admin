"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Mail, Github, Linkedin, Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Member = {
  id: number
  name: string
  role: string
  email: string
  github: string
  linkedin: string
  team: string
  image: string
  bio: string
}

const teams = ["Web Development", "App Development", "Machine Learning", "Competitive Programming", "Content","Creatives and Social"]

const initialMembers: Member[] = [
  {
    id: 1,
    name: "Harshil Anuwadia",
    role: "Frontend Core Member",
    email: "harshil@dscpu.in",
    github: "harshilanuwadia",
    linkedin: "harshilanuwadia",
    team: "Web Development",
    image: "https://www.dscpu.in/team/bG/16.png",
    bio: "Passionate frontend developer with expertise in React and Next.js",
  },
  {
    id: 2,
    name: "Riddhi Gandhi",
    role: "Creatives and Social Lead",
    email: "riddhi@dscpu.in",
    github: "riddhigandhi",
    linkedin: "riddhigandhi",
    team: "Creatives and Social",
    image: "https://www.dscpu.in/team/bG/1.png",
    bio: "Leading creative projects with a passion for social impact.",
  },
  {
    id: 3,
    name: "Priyanshu Singh",
    role: "Creatives and Social Core Member",
    email: "priyanshu@dscpu.in",
    github: "priyanshusingh",
    linkedin: "priyanshusingh",
    team: "Creatives and Social",
    image: "https://www.dscpu.in/team/bG/14.png",
    bio: "Creative enthusiast working on social media and branding.",
  },
  {
    id: 4,
    name: "Mayank Kumar",
    role: "Content Core Member",
    email: "mayank@dscpu.in",
    github: "mayankkumar",
    linkedin: "mayankkumar",
    team: "Content",
    image: "https://www.dscpu.in/team/mayank.png",
    bio: "Content writer and strategist with a knack for storytelling.",
  },
  {
    id: 5,
    name: "Sakshi Kapadi",
    role: "Content Core Member",
    email: "sakshi@dscpu.in",
    github: "sakshikapadi",
    linkedin: "sakshikapadi",
    team: "Content",
    image: "https://www.dscpu.in/team/bG/13.png",
    bio: "Content creator specializing in blogs, articles, and copywriting.",
  },
  {
    id: 6,
    name: "Malhar Gupte",
    role: "Web Development Lead",
    email: "malhar@dscpu.in",
    github: "malhargupte",
    linkedin: "malhargupte",
    team: "Web Development",
    image: "https://www.dscpu.in/team/bG/6.png",
    bio: "Full-stack developer with a love for web technologies.",
  },
  {
    id: 7,
    name: "Abdul Aziz Khatri",
    role: "Web Development Core Member",
    email: "abdul@dscpu.in",
    github: "abdulazizkhatri",
    linkedin: "abdulazizkhatri",
    team: "Web Development",
    image: "https://www.dscpu.in/team/bG/5.png",
    bio: "Backend developer focused on scalability and performance.",
  },
  {
    id: 8,
    name: "Mrinank Kavuri",
    role: "Web Development Core Member",
    email: "mrinank@dscpu.in",
    github: "mrinankkavuri",
    linkedin: "mrinankkavuri",
    team: "Web Development",
    image: "https://www.dscpu.in/team/bG/12.png",
    bio: "Frontend developer building modern UI/UX experiences.",
  },
  {
    id: 9,
    name: "Aryan Pandey",
    role: "Web Development Core Member",
    email: "aryan@dscpu.in",
    github: "aryanpandey",
    linkedin: "aryanpandey",
    team: "Web Development",
    image: "https://www.dscpu.in/team/aryan.png",
    bio: "Full-stack enthusiast working with React and Node.js.",
  },
  {
    id: 10,
    name: "Aadya Mishra",
    role: "Competitive Programming Lead",
    email: "aadya@dscpu.in",
    github: "aadyamishra",
    linkedin: "aadyamishra",
    team: "Competitive Programming",
    image: "https://www.dscpu.in/team/bG/10.png",
    bio: "Problem solver with expertise in DSA and algorithms.",
  },
  {
    id: 11,
    name: "Ayush Singh",
    role: "Competitive Programming Core Member",
    email: "ayush@dscpu.in",
    github: "ayushsingh",
    linkedin: "ayushsingh",
    team: "Competitive Programming",
    image: "https://www.dscpu.in/team/bG/11.png",
    bio: "Competitive programmer passionate about optimization.",
  },
  {
    id: 12,
    name: "Samarth Mishra",
    role: "App Development Lead",
    email: "samarth@dscpu.in",
    github: "samarthmishra",
    linkedin: "samarthmishra",
    team: "App Development",
    image: "https://www.dscpu.in/team/bG/7.png",
    bio: "Android and Flutter developer creating impactful mobile apps.",
  },
  {
    id: 13,
    name: "Pratinav Kothia",
    role: "Flutter App Development Core Member",
    email: "pratinav@dscpu.in",
    github: "pratinavkothia",
    linkedin: "pratinavkothia",
    team: "App Development",
    image: "https://www.dscpu.in/team/bG/4.png",
    bio: "Building cross-platform apps with Flutter and Dart.",
  },
  {
    id: 14,
    name: "Niraj Shrimali",
    role: "Android App Development Core Member",
    email: "niraj@dscpu.in",
    github: "nirajshrimali",
    linkedin: "nirajshrimali",
    team: "App Development",
    image: "https://www.dscpu.in/team/bG/3.png",
    bio: "Passionate Android developer focusing on UI/UX.",
  },
  {
    id: 15,
    name: "Utkarsh Khandelwal",
    role: "Machine Learning Lead",
    email: "utkarsh@dscpu.in",
    github: "utkarshkhandelwal",
    linkedin: "utkarshkhandelwal",
    team: "Machine Learning",
    image: "https://www.dscpu.in/team/utkarsh.png",
    bio: "Machine learning enthusiast working on AI solutions.",
  },
  {
    id: 16,
    name: "Sidharth Bariya",
    role: "Machine Learning Core Member",
    email: "sidharth@dscpu.in",
    github: "sidharthbariya",
    linkedin: "sidharthbariya",
    team: "Machine Learning",
    image: "https://www.dscpu.in/team/bG/2.png",
    bio: "AI developer exploring deep learning and NLP.",
  },
  {
    id: 17,
    name: "Abhinav Nalasani",
    role: "UI/UX Lead",
    email: "abhinav@dscpu.in",
    github: "abhinavnalasani",
    linkedin: "abhinavnalasani",
    team: "UI/UX",
    image: "https://www.dscpu.in/team/bG/8.png",
    bio: "UI/UX designer focused on user-centric experiences.",
  },
  {
    id: 18,
    name: "Kartik Bambhaniya",
    role: "UI/UX Core Member",
    email: "kartik@dscpu.in",
    github: "kartikbambhaniya",
    linkedin: "kartikbambhaniya",
    team: "UI/UX",
    image: "https://www.dscpu.in/team/bG/9.png",
    bio: "Designing intuitive and visually appealing interfaces.",
  }
];

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<Member | null>(null)
  const [activeTeam, setActiveTeam] = useState<string>("all")
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    github: "",
    linkedin: "",
    team: "",
    image: "",
    bio: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingMember) {
      setMembers(members.map((member) => (member.id === editingMember.id ? { ...member, ...formData } : member)))
    } else {
      setMembers([
        ...members,
        {
          id: members.length + 1,
          ...formData,
        },
      ])
    }
    setIsDialogOpen(false)
    resetForm()
  }

  const handleEdit = (member: Member) => {
    setEditingMember(member)
    setFormData({
      name: member.name,
      role: member.role,
      email: member.email,
      github: member.github,
      linkedin: member.linkedin,
      team: member.team,
      image: member.image,
      bio: member.bio,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to remove this member?")) {
      setMembers(members.filter((member) => member.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      email: "",
      github: "",
      linkedin: "",
      team: "",
      image: "",
      bio: "",
    })
    setEditingMember(null)
  }

  const filteredMembers = activeTeam === "all" ? members : members.filter((member) => member.team === activeTeam)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Team Members</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingMember ? "Edit Member" : "Add New Member"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    placeholder="Role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    placeholder="GitHub Username"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    placeholder="LinkedIn Username"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Select value={formData.team} onValueChange={(value) => setFormData({ ...formData, team: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Team" />
                    </SelectTrigger>
                    <SelectContent>
                      {teams.map((team) => (
                        <SelectItem key={team} value={team}>
                          {team}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Input
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <textarea
                    placeholder="Bio"
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">{editingMember ? "Save Changes" : "Add Member"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTeam}>
        <TabsList>
          <TabsTrigger value="all">All Teams</TabsTrigger>
          {teams.map((team) => (
            <TabsTrigger key={team} value={team}>
              {team}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTeam} className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardHeader className="relative h-48 p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Button variant="secondary" size="icon" onClick={() => handleEdit(member)} className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(member.id)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <p className="text-sm">{member.bio}</p>
                    <div className="pt-2">
                      <p className="text-sm font-medium text-muted-foreground">{member.team}</p>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://github.com/${member.github}`} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

