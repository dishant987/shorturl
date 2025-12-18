"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/db/apiAuth"
import useFetch from "@/hooks/use-fetch"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LinkIcon, LogOut, Moon, Sun } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { BarLoader } from "react-spinners"
import { Button } from "./ui/button"
import { UrlState } from "@/context"
import { useTheme } from "@/context/theme-context"

const Header = () => {
  const { loading, fn: fnLogout } = useFetch(logout)
  const navigate = useNavigate()
  const { user, fetchUser } = UrlState()
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-2 group md:space-x-3">
              <img src="/logo.png" className="h-24 w-24" alt="Trimrr Logo" />

            </Link>

            <div className="hidden md:flex items-center gap-6">
              {!user ? (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <Link to="/auth">
                    <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                      Features
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                      Pricing
                    </Button>
                  </Link>

                  <Button
                    onClick={() => navigate("/auth")}
                    className="bg-primary hover:bg-primary/90  shadow-lg shadow-primary/25"
                  >
                    Get Started
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
                      <Avatar>
                        <AvatarImage
                          src={user?.user_metadata?.profile_pic || "/placeholder.svg"}

                        />
                        <AvatarFallback className="bg-primary text-white flex items-center justify-center w-full h-full">
                          {user?.user_metadata?.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-xl border-border/50">
                      <DropdownMenuLabel className="text-foreground">{user?.user_metadata?.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-border/50" />
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="flex cursor-pointer">
                          <LinkIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>My Links</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          fnLogout().then(() => {
                            fetchUser()
                            navigate("/auth")
                          })
                        }}
                        className="text-destructive focus:text-destructive cursor-pointer"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>

            <div className="md:hidden">
              {!user ? (
                <Button
                  onClick={() => navigate("/auth")}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  Get Started
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Avatar>
                      <AvatarImage
                        src={user?.user_metadata?.profile_pic || "/placeholder.svg"}
                        className="w-full h-full object-cover"
                      />
                      <AvatarFallback className="bg-primary text-white flex items-center justify-center w-full h-full text-sm">
                        {user?.user_metadata?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-xl border-border/50">
                    <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-border/50" />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="flex cursor-pointer">
                        <LinkIcon className="mr-2 h-4 w-4 text-primary" />
                        My Links
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        fnLogout().then(() => {
                          fetchUser()
                          navigate("/auth")
                        })
                      }}
                      className="text-destructive focus:text-destructive cursor-pointer"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </nav>
      {loading && <BarLoader className="w-full" width="100%" color="hsl(217, 91%, 60%)" />}
    </>
  )
}

export default Header
