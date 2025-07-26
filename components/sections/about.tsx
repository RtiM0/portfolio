import { aboutText } from "@/constants/portfolio-data";

export function About() {
  return (
    <section className="py-16 border-b-2 border-black dark:border-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">ABOUT</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
              {aboutText.intro}
            </p>
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              {aboutText.details}
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-6">
            <h3 className="text-2xl font-bold font-serif mb-4">EXPERTISE</h3>
            <ul className="space-y-2 text-lg">
              {aboutText.expertise.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}