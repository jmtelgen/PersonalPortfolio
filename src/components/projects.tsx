"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink?: string
  githubLink?: string
  fullDescription?: string
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Bridge Card Game Platform",
      description:
        "A card game platform built on AWS with a React frontend and a python lambda backend. The platform uses websockets to communicate between the frontend and backend, and uses AWS DynamoDB to store game state.",
      image: "/images/BridgeImage.png",
      tags: ["Python", "React", "AWS", "Websockets", "DynamoDB", "Lambda", "API Gateway"],
      features: [
        "Real-time gameplay",
        "Game state management",
        "User authentication",
        "User management",
        "Game analytics",
        "AI bidding and play",
        "Bidding suggestions generated from knowledge base"
      ],
      demoLink: "https://www.next-level-bridge.com/",
      githubLink: "https://github.com/jmtelgen/BridgeApp",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A personal portfolio website built with React and Tailwind CSS and hosted on Cloudfront.",
      image: "/images/Website.png",
      tags: ["React", "Tailwind CSS", "Cloudfront", "Vercel"],
      features: [
        "Hosted on AWS Cloudfront",
        "Responsive design",
      ],
      demoLink: "https://jaketelgenhoff.com/",
      githubLink: "https://github.com/jmtelgen/PersonalPortfolio",
    },
    {
      id: 3,
      title: "Double Dummy Bridge Solver Wrapper",
      description: "A wrapper for the Double Dummy Bridge Solver C++ library that allows for wasm compilation for integration into a web application.",
      image: "/images/DDBLibraryImage.png",
      tags: ["C++", "Python", "Qt", "Linux"],
      features: [
        "WebAssembly compilation",
        "Wraps DDB functions to export",
        "Usage instructions"
      ],
      githubLink: "https://github.com/jmtelgen/ddsWrapper",
    },
    {
      id: 4,
      title: "Amazon Internal RAG Knowledge Base and MCP",
      description: "An internal knowledge base for Amazon employees to use to answer questions about my team's products. Built with AWS Step functions for knowledge ingestion and AWS Bedrock for LLM inference. Hooked up to an MCP to allow for agentic workflows.",
      image: "/images/RAGImage.png",
      tags: ["Java", "Python", "AWS", "Step Functions", "Bedrock", "MCP", "Lambda", "Langchain"],
      features: [
        "AWS Step functions for knowledge ingestion",
        "AWS Bedrock for LLM inference",
        "MCP to allow for agentic workflows",
        "Langchain for code and text chunking",
        "API Gateway for Bedrock integration in MCP",
        "DynamoDB for data source metadata storage",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background border-t border-border/50">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-32 h-32 mx-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            {project.githubLink && <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.githubLink, "_blank")
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            }
                            {project.demoLink && <Button
                                size="sm"
                                className="cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.demoLink, "_blank")
                                }}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </Button>
                            }
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
