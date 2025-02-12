import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Settings, Users, Folder, Calendar, BarChart, Image, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Members", href: "/dashboard/members" },
  { icon: BarChart, label: "Statistics", href: "/dashboard/statistics" },
  { icon: Folder, label: "Projects", href: "/dashboard/projects" },
  { icon: Calendar, label: "Events", href: "/dashboard/events" },
  { icon: Image, label: "Gallery", href: "/dashboard/gallery" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("flex flex-col border-r bg-background transition-all duration-300", isOpen ? "w-64" : "w-16")}>
      <div className="flex items-center justify-between p-4">
        <h2 className={cn("text-lg font-semibold tracking-tight", !isOpen && "hidden")}>DSCPU Admin</h2>
        <Button variant="ghost" size="icon" onClick={onToggle}>
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent" : "transparent",
                  !isOpen && "justify-center",
                )}
              >
                <item.icon className={cn("mr-2 h-4 w-4", !isOpen && "mr-0")} />
                <span className={cn(!isOpen && "hidden")}>{item.label}</span>
              </span>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

