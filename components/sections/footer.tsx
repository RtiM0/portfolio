import { personalInfo, contactInfo } from "@/constants/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t-4 border-black dark:border-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold font-serif">
              {personalInfo.name.first} {personalInfo.name.last}
            </p>
            <p className="text-lg font-light">
              {personalInfo.title} • {contactInfo.location}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg font-light">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}