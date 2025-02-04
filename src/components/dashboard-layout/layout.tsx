import { AppSidebar } from "@/components/dashboard-layout/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ScrollArea } from "../ui/scroll-area"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Chats</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Waqar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="w-full h-[calc(100vh-64px)]  flex flex-col">
          <div className="flex-1 overflow-hidden">
            <div className="w-full h-14 bg-black/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 h-full ml-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium text-lg">Waqar</p>
                  <p className="text-green-400 text-sm">online</p>
                </div>
              </div>
            </div>
            <ScrollArea className="h-[calc(100%-3.5rem)] w-full p-4">{children}</ScrollArea>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

