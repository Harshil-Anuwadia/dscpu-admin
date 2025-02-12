import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { TeamMembers } from "@/components/dashboard/team-members"
import { StatsCard } from "@/components/dashboard/stats-card"
import { UsersIcon, Package2Icon, CalendarIcon, ActivityIcon } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Members"
          value="1,234"
          description="+20.1% from last month"
          icon={<UsersIcon className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Active Projects"
          value="23"
          description="+5 since last week"
          icon={<Package2Icon className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Upcoming Events"
          value="12"
          description="3 this month"
          icon={<CalendarIcon className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Active Members"
          value="573"
          description="+201 since last month"
          icon={<ActivityIcon className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivities />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <TeamMembers />
        </CardContent>
      </Card>
    </div>
  )
}

