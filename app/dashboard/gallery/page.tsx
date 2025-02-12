"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Check, X, ThumbsUp, MessageSquare, Send } from "lucide-react"
import Image from "next/image"

type Comment = {
  id: number
  author: string
  authorAvatar: string
  content: string
  timestamp: string
}

type GalleryItem = {
  id: number
  imageUrl: string
  caption: string
  author: string
  authorAvatar: string
  likes: number
  hasLiked: boolean
  comments: Comment[]
  status: "pending" | "approved" | "rejected"
}

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      caption: "AI is the future! 🚀 Amazing discussions at today's seminar.",
      author: "Aarav Mehta",
      authorAvatar: "/avatars/01.png",
      likes: 22,
      hasLiked: false,
      comments: [
        {
          id: 1,
          author: "Neha Verma",
          authorAvatar: "/avatars/02.png",
          content: "Bhai, AI sab kuch badal raha hai! Bahut maza aaya. 🤯",
          timestamp: "3 hours ago",
        },
        {
          id: 2,
          author: "Rohit Gupta",
          authorAvatar: "/avatars/15.png",
          content: "I disagree. AI has limitations, it’s not the ultimate solution. 😒",
          timestamp: "2 hours ago",
        },
      ],
      status: "approved",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      caption: "Late-night coding sessions = life 😴💻 #DebuggingNeverEnds",
      author: "Rajesh Sharma",
      authorAvatar: "/avatars/03.png",
      likes: 17,
      hasLiked: false,
      comments: [
        {
          id: 1,
          author: "Pooja Yadav",
          authorAvatar: "/avatars/04.png",
          content: "Without chai, it's impossible! ☕😂",
          timestamp: "5 hours ago",
        },
        {
          id: 2,
          author: "Vikram Shah",
          authorAvatar: "/avatars/16.png",
          content: "Yeah, but I think sleep is more important than coffee. 🙄",
          timestamp: "4 hours ago",
        },
      ],
      status: "approved",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3RzfGVufDB8fDB8fHww", // Replace this with a valid image URL if needed
      caption: "Robots bana rahe hain jo insaan ki tarah soch sakte hain! 🤯",
      author: "Siddharth Rao",
      authorAvatar: "https://www.example.com/avatars/siddharth-rao.png", // Placeholder avatar URL
      likes: 30,
      hasLiked: true,
      comments: [
        {
          id: 1,
          author: "Ananya Patel",
          authorAvatar: "/avatars/06.png",
          content: "This is the next big thing in AI! Excited for what's next. 🔥",
          timestamp: "1 day ago",
        },
        {
          id: 2,
          author: "Shubham Kumar",
          authorAvatar: "/avatars/17.png",
          content: "AI ki wajah se jobs bahut zyada khatam ho sakti hain. It’s scary. 😔",
          timestamp: "22 hours ago",
        },
      ],
      status: "approved",
    },    
    
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      caption: "Cybersecurity bina safe internet impossible hai! 🛡️",
      author: "Kunal Joshi",
      authorAvatar: "/avatars/07.png",
      likes: 12,
      hasLiked: false,
      comments: [
        {
          id: 1,
          author: "Meera Kapoor",
          authorAvatar: "/avatars/08.png",
          content: "Absolutely! One small mistake, and it's all over. 😨",
          timestamp: "2 days ago",
        },
        {
          id: 2,
          author: "Ravi Deshmukh",
          authorAvatar: "/avatars/18.png",
          content: "Cybersecurity is overrated. We should focus on innovation more than security. 🤷‍♂️",
          timestamp: "1 day ago",
        },
      ],
      status: "pending",
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      caption: "Startups are booming! 🚀 India is full of innovation.",
      author: "Tanvi Agarwal",
      authorAvatar: "/avatars/09.png",
      likes: 45,
      hasLiked: true,
      comments: [
        {
          id: 1,
          author: "Rahul Bhatt",
          authorAvatar: "/avatars/10.png",
          content: "Entrepreneur banna itna asaan nahi hai bhai! Respect. 🙌",
          timestamp: "30 minutes ago",
        },
        {
          id: 2,
          author: "Neeraj Yadav",
          authorAvatar: "/avatars/19.png",
          content: "But most startups fail in the first year. 😕",
          timestamp: "15 minutes ago",
        },
      ],
      status: "approved",
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      caption: "Deep Learning ke naye tareeke explore kar rahe hain! 📊🤖",
      author: "Aditya Nair",
      authorAvatar: "/avatars/11.png",
      likes: 18,
      hasLiked: false,
      comments: [
        {
          id: 1,
          author: "Shruti Malhotra",
          authorAvatar: "/avatars/12.png",
          content: "ML aur AI dono ab full speed pe hain! 🔥",
          timestamp: "6 hours ago",
        },
        {
          id: 2,
          author: "Karan Mehta",
          authorAvatar: "/avatars/20.png",
          content: "Not sure, Deep Learning isn’t as efficient as they say. 🤔",
          timestamp: "4 hours ago",
        },
      ],
      status: "pending",
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
      caption: "48-hour hackathon madness! Coffee, code, and creativity! ☕💡",
      author: "Ishaan Singh",
      authorAvatar: "/avatars/13.png",
      likes: 28,
      hasLiked: true,
      comments: [
        {
          id: 1,
          author: "Nidhi Saxena",
          authorAvatar: "/avatars/14.png",
          content: "Hackathons are the best! Yeh toh alag level ka maza hai! 🏆🔥",
          timestamp: "2 days ago",
        },
        {
          id: 2,
          author: "Siddhi Gupta",
          authorAvatar: "/avatars/21.png",
          content: "Honestly, I don’t get the hype. Sleep is more important. 😴",
          timestamp: "1 day ago",
        },
      ],
      status: "approved",
    },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newPost, setNewPost] = useState({ caption: "", imageUrl: "" })
  const [activeTab, setActiveTab] = useState("all")
  const [newComments, setNewComments] = useState<{ [key: number]: string }>({})

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem: GalleryItem = {
      id: galleryItems.length + 1,
      imageUrl: newPost.imageUrl,
      caption: newPost.caption,
      author: "Admin",
      authorAvatar: "/avatars/admin.png",
      likes: 0,
      hasLiked: false,
      comments: [],
      status: "approved",
    }
    setGalleryItems([newItem, ...galleryItems])
    setIsDialogOpen(false)
    setNewPost({ caption: "", imageUrl: "" })
  }

  const handleStatusChange = (id: number, newStatus: "approved" | "rejected") => {
    setGalleryItems(galleryItems.map((item) => (item.id === id ? { ...item, status: newStatus } : item)))
  }

  const handleLike = (id: number) => {
    setGalleryItems(
      galleryItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            likes: item.hasLiked ? item.likes - 1 : item.likes + 1,
            hasLiked: !item.hasLiked,
          }
        }
        return item
      }),
    )
  }

  const handleComment = (id: number) => {
    const comment = newComments[id]
    if (!comment?.trim()) return

    setGalleryItems(
      galleryItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            comments: [
              ...item.comments,
              {
                id: item.comments.length + 1,
                author: "Admin",
                authorAvatar: "/avatars/admin.png",
                content: comment,
                timestamp: "Just now",
              },
            ],
          }
        }
        return item
      }),
    )
    setNewComments({ ...newComments, [id]: "" })
  }

  const filteredItems = galleryItems.filter((item) => activeTab === "all" || item.status === activeTab)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Gallery</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Post
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Post</DialogTitle>
            </DialogHeader>
            <form onSubmit={handlePostSubmit} className="space-y-4">
              <Input
                placeholder="Image URL"
                value={newPost.imageUrl}
                onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
                required
              />
              <Input
                placeholder="Caption"
                value={newPost.caption}
                onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })}
                required
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Post
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        {["all", "pending", "approved", "rejected"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={item.authorAvatar} alt={item.author} />
                        <AvatarFallback>{item.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-sm font-medium">{item.author}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.status}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.caption}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm">{item.caption}</p>
                    <div className="mt-4 space-y-2">
                      {item.comments.map((comment) => (
                        <div key={comment.id} className="flex items-start space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={comment.authorAvatar} alt={comment.author} />
                            <AvatarFallback>{comment.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm">
                              <span className="font-medium">{comment.author}</span> {comment.content}
                            </p>
                            <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <div className="flex justify-between w-full">
                      <div className="flex space-x-4 text-sm text-muted-foreground">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center space-x-1"
                          onClick={() => handleLike(item.id)}
                        >
                          <ThumbsUp className={`h-4 w-4 ${item.hasLiked ? "fill-current text-blue-500" : ""}`} />
                          <span>{item.likes}</span>
                        </Button>
                        <span className="flex items-center">
                          <MessageSquare className="mr-1 h-4 w-4" />
                          {item.comments.length}
                        </span>
                      </div>
                      {item.status === "pending" && (
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleStatusChange(item.id, "approved")}>
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleStatusChange(item.id, "rejected")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="flex w-full space-x-2">
                      <Input
                        placeholder="Add a comment..."
                        value={newComments[item.id] || ""}
                        onChange={(e) => setNewComments({ ...newComments, [item.id]: e.target.value })}
                        onKeyPress={(e) => e.key === "Enter" && handleComment(item.id)}
                      />
                      <Button size="icon" onClick={() => handleComment(item.id)}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

