"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

const ChatComp = ({ params }: { params: Promise<{ id: string }> }) => {
  type Message = {
    id: number
    content: string
    sender: "user" | "other"
    timestamp: string
  }

  const messages: Message[] = [
    {
      id: 1,
      content: "Hey, how are you?",
      sender: "other",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      content: "I'm good, thanks! How about you?",
      sender: "user",
      timestamp: "10:02 AM",
    },
    {
      id: 3,
      content: "I'm doing great! Any plans for the weekend?",
      sender: "other",
      timestamp: "10:05 AM",
    },
    {
      id: 4,
      content: "Not yet, maybe we could hang out?",
      sender: "user",
      timestamp: "10:07 AM",
    },
    {
      id: 5,
      content: "Sounds good! Let's plan something.",
      sender: "other",
      timestamp: "10:10 AM",
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === "user" ? "bg-blue-500 text-white" : "bg-white/80 text-gray-800"
              }`}
            >
              <p>{message.content}</p>
              <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white/10 backdrop-blur-sm mt-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Type a message..."
            className="flex-1 bg-white/20 border-none text-white placeholder-gray-300"
          />
          <Button size="icon" className="bg-blue-500 hover:bg-blue-600">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatComp

