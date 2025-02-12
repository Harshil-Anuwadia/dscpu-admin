"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

type Notification = {
  id: number
  message: string
  read: boolean
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Simulating fetching notifications from an API
    const fetchedNotifications: Notification[] = [
      { id: 1, message: "Welcome to DSCPU Admin Dashboard", read: false },
    ]
    setNotifications(fetchedNotifications)
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleReadNotification = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge variant="destructive" className="absolute -top-1 -right-1 px-1 min-w-[1.25rem]">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        {notifications.length === 0 ? (
          <DropdownMenuItem>No new notifications</DropdownMenuItem>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} onClick={() => handleReadNotification(notification.id)}>
              <div className={`flex items-center space-x-2 ${notification.read ? "opacity-50" : ""}`}>
                <div className="flex-1">{notification.message}</div>
                {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

