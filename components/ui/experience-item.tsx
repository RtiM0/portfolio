import { Experience } from "@/constants/portfolio-data";

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function ExperienceItem({ experience, isLast = false }: ExperienceItemProps) {
  return (
    <div className={`grid md:grid-cols-4 gap-8 ${!isLast ? 'border-b border-gray-300 dark:border-gray-700 pb-8' : ''}`}>
      <div>
        <h3 className="text-2xl font-bold font-serif">{experience.title}</h3>
        <p className="text-xl font-light">{experience.company}</p>
        <p className="text-lg text-gray-600 dark:text-gray-400">{experience.period}</p>
      </div>
      <div className="md:col-span-3">
        <p className="text-lg mb-4 font-light">
          {experience.description}
        </p>
        <ul className="text-lg space-y-2 font-light">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>• {achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}