import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/constants/portfolio-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border-4 border-black dark:border-white bg-white dark:bg-black">
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-bold font-serif">{project.title}</h3>
          <ExternalLink className="w-6 h-6" />
        </div>
        <p className="text-lg mb-6 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <Badge key={index} className="bg-black dark:bg-white text-white dark:text-black">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          {project.links.code && (
            <Button variant="outline" className="border-2 border-black dark:border-white bg-transparent">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {project.links.demo && (
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {project.links.npm && (
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
              <ExternalLink className="w-4 h-4 mr-2" />
              NPM Package
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}