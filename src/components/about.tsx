import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">A Passionate Developer</h3>
            <p className="text-muted-foreground mb-6">
              I’m a full-stack software developer at Amazon with a strong interest in creating innovative, end-to-end solutions. 
              My work spans both frontend and backend systems, giving me the tools to deliver seamless and scalable applications.
            </p>
            <p className="text-muted-foreground mb-6">
              Beyond coding, I find inspiration in the outdoors, often exploring parks like Yosemite, Channel Islands, and 
              Zion. This sense of exploration carries into my professional life, where I’m fascinated by how AI can reshape 
              the way we build software and enhance the tools available to developers.
            </p>
            <p className="text-muted-foreground">
              I’m equally excited about new innovations in the tech space and thrive on staying at the forefront of 
              emerging technologies, always looking for opportunities to grow, learn, and contribute to meaningful 
              advancements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                      <p className="text-muted-foreground">
                        I develop clean, scalable, and reliable software that balances technical excellence with real-world usability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Problem Solver</h4>
                      <p className="text-muted-foreground">
                        I take on complex challenges with curiosity and persistence, uncovering solutions that are both practical and innovative.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Fast Learner</h4>
                      <p className="text-muted-foreground">
                      I quickly pick up new technologies and frameworks, continuously expanding my toolkit to stay ahead in a fast-moving industry.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mobile Profile Image */}
      <div className="mt-16 md:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 relative">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg shadow-lg">
              <img
                src="/images/JacobPicture.jpeg"
                alt="Jacob Telgenhoff"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-border mt-20"></div>
    </section>
  )
}
