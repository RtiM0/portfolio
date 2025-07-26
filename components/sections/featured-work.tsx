import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/constants/portfolio-data";

export function FeaturedWork() {
  return (
    <section className="py-16 border-b-2 border-black dark:border-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">FEATURED WORK</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}