"use client"
import { SocialButton } from "@/components/ui/social-button";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { personalInfo, contactInfo } from "@/constants/portfolio-data";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b-4 border-black dark:border-white py-8 max-sm:h-[55vh] max-sm:flex max-sm:items-center">
      <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-full bg-transparent border-none cursor-pointer p-0 m-0 text-left"
      >
        <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-sm:h-full max-sm:justify-center">
          <div className="max-sm:text-center max-sm:mb-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-serif max-sm:text-6xl max-sm:leading-tight">
              {personalInfo.name.first}
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-serif -mt-4 max-sm:text-6xl max-sm:mt-0">
              {personalInfo.name.last}
            </h1>
            <p className="text-2xl md:text-3xl font-light mt-4 tracking-wide max-sm:text-lg max-sm:mt-2 uppercase">
              {personalInfo.title}
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:mt-0 max-sm:justify-center">
            <SocialButton 
              href="#" 
              icon={Github} 
              label="GitHub" 
              external 
            />
            <SocialButton 
              href={contactInfo.linkedin} 
              icon={Linkedin} 
              label="LinkedIn" 
              external 
            />
            <SocialButton 
              href={`mailto:${contactInfo.email}`} 
              icon={Mail} 
              label="Contact" 
            />
          </div>
          <div className="absolute top-4 right-4">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </div>
        </div>
        </div>
      </button>
    </header>
  );
}