import { Badge } from "@/components/ui/badge";
import { SkillCategory as SkillCategoryType } from "@/constants/portfolio-data";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold font-serif mb-6 border-b-2 border-black dark:border-white pb-2">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <Badge 
            key={index}
            variant="outline" 
            className="text-lg py-2 px-4 border-2 border-black dark:border-white"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}