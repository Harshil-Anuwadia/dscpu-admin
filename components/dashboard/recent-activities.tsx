import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    name: "Ravi Kumar",
    email: "ravi@example.com",
    avatar: "/avatars/01.png",
    action: "created a new project",
    time: "2 hours ago",
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    avatar: "/avatars/02.png",
    action: "commented on a task",
    time: "4 hours ago",
  },
  {
    name: "Amit Verma",
    email: "amit@example.com",
    avatar: "/avatars/03.png",
    action: "completed a milestone",
    time: "1 day ago",
  },
  {
    name: "Sanya Kapoor",
    email: "sanya@example.com",
    avatar: "/avatars/04.png",
    action: "joined the team",
    time: "2 days ago",
  },
];


export function RecentActivities() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt={activity.name} />
            <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}

