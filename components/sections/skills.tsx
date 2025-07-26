import { SkillCategory } from "@/components/ui/skill-category";
import { skillCategories } from "@/constants/portfolio-data";

export function Skills() {
  return (
    <section className="py-16 border-b-2 border-black dark:border-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">SKILLS</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}