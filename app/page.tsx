import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-white py-8 max-sm:h-[55vh] max-sm:flex max-sm:items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between max-sm:h-full max-sm:justify-center">
            <div className="max-sm:text-center max-sm:mb-8">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-serif max-sm:text-6xl max-sm:leading-tight">MUSTAFA</h1>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-serif -mt-4 max-sm:text-6xl max-sm:mt-0">SHAKIR</h1>
              <p className="text-2xl md:text-3xl font-light mt-4 tracking-wide max-sm:text-lg max-sm:mt-2">SOFTWARE ENGINEER</p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-0 max-sm:justify-center">
              <ThemeToggle/>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent max-sm:px-3"
                asChild
              >
                <Link href="#" target="_blank">
                  <Github className="w-5 h-5 lg:mr-2" />
                  <span className="hidden sm:block md:hidden lg:block">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent max-sm:px-3"
                asChild
              >
                <Link href="https://linkedin.com/in/otatopotato" target="_blank">
                  <Linkedin className="w-5 h-5 lg:mr-2" />
                  <span className="hidden sm:block md:hidden lg:block">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent max-sm:px-3"
                asChild
              >
                <Link href="mailto:hello@shakirmustafa.com">
                  <Mail className="w-5 h-5 lg:mr-2" />
                  <span className="hidden sm:block md:hidden lg:block">Contact</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-8">
                CRAFTING DIGITAL
                <br />
                EXPERIENCES WITH
                <br />
                <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2">CODE</span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                Backend-focused Software Engineer with experience in building scalable and performant applications. Passionate about solving complex problems with elegant solutions.
              </p>
            </div>
            <div className="bg-black dark:bg-white text-white dark:text-black p-8">
              <h3 className="text-3xl font-bold font-serif mb-6">CURRENTLY</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-xl">Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-xl">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">ABOUT</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
                I'm a software engineer with a strong background in backend development, skilled in creating robust and scalable systems. My experience spans across various domains including e-commerce, fintech, and social media platforms.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                I enjoy tackling complex challenges, from optimizing system performance to designing and implementing new product features from the ground up. I'm always eager to learn and apply new technologies to build efficient and impactful solutions.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6">
              <h3 className="text-2xl font-bold font-serif mb-4">EXPERTISE</h3>
              <ul className="space-y-2 text-lg">
                <li>• Backend Development</li>
                <li>• System Design & Architecture</li>
                <li>• Full-Stack Development</li>
                <li>• Cloud & DevOps</li>
                <li>• Database Management</li>
                <li>• API Design</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">SKILLS</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
                LANGUAGES
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Java
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Python
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Kotlin
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Golang
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
                BACKEND
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Spring Boot
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  NestJS
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Django
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Kafka
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Celery
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
                FRONTEND
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  ReactJS
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Android
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Flutter
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
                DATABASE & TOOLS
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Elasticsearch
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Docker
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  AWS
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Terraform
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">FEATURED WORK</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-4 border-black dark:border-white bg-white dark:bg-black">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold font-serif">E-COMMERCE PLATFORM</h3>
                  <ExternalLink className="w-6 h-6" />
                </div>
                <p className="text-lg mb-6 font-light">
                  A full-stack e-commerce solution built with Next.js and Stripe integration. Features include real-time
                  inventory management, advanced search, and mobile-responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Next.js</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">TypeScript</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Stripe</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">PostgreSQL</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-2 border-black dark:border-white bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-black dark:border-white bg-white dark:bg-black">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold font-serif">TASK MANAGEMENT APP</h3>
                  <ExternalLink className="w-6 h-6" />
                </div>
                <p className="text-lg mb-6 font-light">
                  A collaborative project management tool with real-time updates, drag-and-drop functionality, and team
                  collaboration features. Built for productivity and ease of use.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">React</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Node.js</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Socket.io</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">MongoDB</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-2 border-black dark:border-white bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-black dark:border-white bg-white dark:bg-black">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold font-serif">DATA VISUALIZATION DASHBOARD</h3>
                  <ExternalLink className="w-6 h-6" />
                </div>
                <p className="text-lg mb-6 font-light">
                  An interactive dashboard for analyzing business metrics with real-time data processing, custom charts,
                  and export functionality. Handles large datasets efficiently.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Vue.js</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">D3.js</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Python</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">FastAPI</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-2 border-black dark:border-white bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-black dark:border-white bg-white dark:bg-black">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold font-serif">OPEN SOURCE LIBRARY</h3>
                  <ExternalLink className="w-6 h-6" />
                </div>
                <p className="text-lg mb-6 font-light">
                  A lightweight React component library for building accessible forms with validation. Used by 500+
                  developers with comprehensive documentation and TypeScript support.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">React</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">TypeScript</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Storybook</Badge>
                  <Badge className="bg-black dark:bg-white text-white dark:text-black">Jest</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-2 border-black dark:border-white bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    NPM Package
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">EXPERIENCE</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-4 gap-8 border-b border-gray-300 dark:border-gray-700 pb-8">
              <div>
                <h3 className="text-2xl font-bold font-serif">SDE 2 - BACKEND</h3>
                <p className="text-xl font-light">Jar</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">07/2023 - Present</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-light">
                  Leading full-stack development of an e-commerce channel, and improving web performance and infrastructure.
                </p>
                <ul className="text-lg space-y-2 font-light">
                  <li>• Led development of an e-commerce platform, scaling to handle thousands of daily orders.</li>
                  <li>• Migrated SMS processing to ScyllaDB, reducing infrastructure costs by 60%.</li>
                  <li>• Developed a health insurance vertical with A/B testing capabilities for a 20 million user base.</li>
                  <li>• Built a P2P investment product with robust KYC and queueing systems.</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 border-b border-gray-300 dark:border-gray-700 pb-8">
              <div>
                <h3 className="text-2xl font-bold font-serif">CO-FOUNDER, SOFTWARE ENGINEER</h3>
                <p className="text-xl font-light">prettyRECON</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">11/2020 - Present</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-light">
                  Co-founded and built an online reconnaissance tool for pen-testers and bug bounty hunters, achieving profitability with over 100 recurring subscribers.
                </p>
                <ul className="text-lg space-y-2 font-light">
                  <li>• Built the entire backend from scratch, creating a profitable product.</li>
                  <li>• Designed a system to schedule and process resource-intensive tasks for hundreds of active users.</li>
                  <li>• Managed data storage and indexing using Postgres and Elasticsearch.</li>
                  <li>• Implemented verification systems and managed stack deployment.</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold font-serif">SOFTWARE ENGINEER</h3>
                <p className="text-xl font-light">Quriverse</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">09/2022 - 06/2023</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-light">
                  Developed core features for a social media platform, including a content ranking system and real-time event delivery.
                </p>
                <ul className="text-lg space-y-2 font-light">
                  <li>• Developed a 3-component scoring system to rank user posts.</li>
                  <li>• Built a real-time system with Redis Pub/Sub for event delivery to thousands of clients.</li>
                  <li>• Created a scalable serverless solution for media processing and delivery.</li>
                  <li>• Wrote Infrastructure as Code (IaaC) for CI/CD using Terraform and CloudFormation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">LET'S WORK TOGETHER</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light">
                I'm always interested in hearing about new opportunities, challenging projects, and innovative ideas.
                Let's create something amazing together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8" />
                  <span className="text-2xl">contact@shakirmustafa.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8" />
                  <span className="text-2xl">Bengaluru, Karnataka</span>
                </div>
              </div>
            </div>
            <div className="bg-black dark:bg-white text-white dark:text-black p-8">
              <h3 className="text-3xl font-bold font-serif mb-6">GET IN TOUCH</h3>
              <p className="text-xl mb-8 font-light">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you.
              </p>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="mailto:hello@shakirmustafa.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="https://linkedin.com/in/otatopotato" target="_blank">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/RtiM0" target="_blank">
                    <Github className="w-5 h-5 mr-2" />
                    View GitHub Profile
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black dark:border-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-bold font-serif">MUSTAFA SHAKIR</p>
              <p className="text-lg font-light">Software Engineer • Bengaluru, Karnataka</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-lg font-light">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
