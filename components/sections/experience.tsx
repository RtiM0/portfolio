import { ExperienceItem } from "@/components/ui/experience-item";
import { experiences } from "@/constants/portfolio-data";

export function Experience() {
  return (
    <section className="py-16 border-b-2 border-black dark:border-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">EXPERIENCE</h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={index} 
              experience={experience} 
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}