import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Ravi Kumar",
    email: "ravi@example.com",
    avatar: "public/facebook_harshilanuwadiaofficial-14-08-2023-0001.jpg",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    avatar: "/avatars/02.png",
    role: "Backend Developer",
    status: "In a meeting",
  },
  {
    name: "Amit Verma",
    email: "amit@example.com",
    avatar: "/avatars/03.png",
    role: "UI/UX Designer",
    status: "Offline",
  },
  {
    name: "Sanya Kapoor",
    email: "sanya@example.com",
    avatar: "/avatars/04.png",
    role: "Project Manager",
    status: "Active",
  },
];

export function TeamMembers() {
  return (
    <div className="space-y-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{member.name}</p>
            <p className="text-sm text-muted-foreground">{member.email}</p>
          </div>
          <div className="ml-auto font-medium">
            <Badge variant={member.status === "Active" ? "default" : "secondary"}>{member.status}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

