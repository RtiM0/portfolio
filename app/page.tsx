import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-serif">MUSTAFA</h1>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-serif -mt-4">SHAKIR</h1>
              <p className="text-2xl md:text-3xl font-light mt-4 tracking-wide">SOFTWARE ENGINEER</p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <ThemeToggle />
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
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
              <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-8">
                CRAFTING DIGITAL
                <br />
                EXPERIENCES WITH
                <br />
                <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2">CODE</span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                Full-stack developer with 5+ years of experience building scalable web applications. Passionate about
                clean code, user experience, and solving complex problems with elegant solutions.
              </p>
            </div>
            <div className="bg-black dark:bg-white text-white dark:text-black p-8">
              <h3 className="text-3xl font-bold font-serif mb-6">CURRENTLY</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-xl">San Francisco, CA</span>
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
                I'm a software engineer who believes that great code is like great journalism – it tells a clear story,
                gets to the point quickly, and serves its audience well. With a background in both frontend and backend
                development, I specialize in creating robust, scalable applications that users actually want to use.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                When I'm not coding, you'll find me reading about emerging technologies, contributing to open-source
                projects, or exploring the latest coffee shops in the city. I believe the best solutions come from
                understanding both the technical requirements and the human needs behind every project.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 p-6">
              <h3 className="text-2xl font-bold font-serif mb-4">EXPERTISE</h3>
              <ul className="space-y-2 text-lg">
                <li>• Full-Stack Development</li>
                <li>• React & Next.js</li>
                <li>• Node.js & Python</li>
                <li>• Database Design</li>
                <li>• API Architecture</li>
                <li>• Cloud Deployment</li>
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
                FRONTEND
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  React
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Vue.js
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
                BACKEND
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Python
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Express
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  FastAPI
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  GraphQL
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
                DATABASE
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Redis
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Supabase
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
                TOOLS
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Docker
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  AWS
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Vercel
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4 border-2 border-black dark:border-white">
                  Git
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
                <h3 className="text-2xl font-bold font-serif">SENIOR SOFTWARE ENGINEER</h3>
                <p className="text-xl font-light">TechCorp Inc.</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">2022 - Present</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-light">
                  Lead development of microservices architecture serving 1M+ users. Mentored junior developers and
                  established coding standards that improved team productivity by 40%.
                </p>
                <ul className="text-lg space-y-2 font-light">
                  <li>• Architected and implemented scalable backend services using Node.js and PostgreSQL</li>
                  <li>• Reduced application load time by 60% through performance optimization</li>
                  <li>• Led migration from monolithic to microservices architecture</li>
                  <li>• Implemented CI/CD pipelines reducing deployment time from hours to minutes</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 border-b border-gray-300 dark:border-gray-700 pb-8">
              <div>
                <h3 className="text-2xl font-bold font-serif">FULL STACK DEVELOPER</h3>
                <p className="text-xl font-light">StartupXYZ</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">2020 - 2022</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-light">
                  Built the entire frontend and backend infrastructure for a B2B SaaS platform from scratch. Worked
                  directly with founders to translate business requirements into technical solutions.
                </p>
                <ul className="text-lg space-y-2 font-light">
                  <li>• Developed responsive web application using React and Next.js</li>
                  <li>• Built RESTful APIs and GraphQL endpoints for mobile and web clients</li>
                  <li>• Implemented real-time features using WebSocket connections</li>
                  <li>• Designed and optimized database schemas for high-performance queries</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold font-serif">SOFTWARE DEVELOPER</h3>
                <p className="text-xl font-light">Digital Agency Co.</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">2019 - 2020</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg mb-4 font-light">
                  Developed custom web applications for clients across various industries. Collaborated with designers
                  and project managers to deliver pixel-perfect implementations.
                </p>
                <ul className="text-lg space-y-2 font-light">
                  <li>• Created responsive websites and web applications for 20+ clients</li>
                  <li>• Integrated third-party APIs and payment processing systems</li>
                  <li>• Optimized websites for SEO and performance achieving 95+ Lighthouse scores</li>
                  <li>• Maintained and updated legacy codebases while implementing new features</li>
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
                  <span className="text-2xl">mustafa.shakir@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8" />
                  <span className="text-2xl">San Francisco, CA</span>
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
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white bg-transparent"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white bg-transparent"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub Profile
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
              <p className="text-lg font-light">Software Engineer • San Francisco, CA</p>
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
