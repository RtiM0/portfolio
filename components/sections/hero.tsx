import { Calendar, MapPin } from "lucide-react";
import { personalInfo, contactInfo } from "@/constants/portfolio-data";

export function Hero() {
  return (
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
              {personalInfo.description}
            </p>
          </div>
          <div className="bg-black dark:bg-white text-white dark:text-black p-8">
            <h3 className="text-3xl font-bold font-serif mb-6">CURRENTLY</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <span className="text-xl">{contactInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <span className="text-xl">{personalInfo.currentStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}