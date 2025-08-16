"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showResume, setShowResume] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Tech Stack", href: "tech-stack" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Jake <span className="text-destructive hover:text-destructive/80">Telgenhoff</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => setShowResume(true)}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-all duration-200 text-left cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => setShowResume(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                Resume
              </Button>
            </nav>
          </div>
        </div>
      )}

      {/* Resume Popup */}
      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Jacob Telgenhoff - Resume</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <iframe
              src="/files/resume.pdf"
              className="w-full h-[80vh] border-0 rounded-lg"
              title="Jacob Telgenhoff Resume"
            />
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
