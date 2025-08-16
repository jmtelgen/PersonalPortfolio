import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import TechStack from '@/components/tech-stack'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
