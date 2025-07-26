'use client';
import { SocialButton } from "@/components/ui/social-button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/constants/portfolio-data";

export function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-12 text-center">LET'S WORK TOGETHER</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light">
              I'm always interested in hearing about new opportunities, challenging projects, and innovative ideas.
              Let's create something amazing together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8" />
                <span className="text-2xl">contact@shakirmustafa.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8" />
                <span className="text-2xl">{contactInfo.location}</span>
              </div>
            </div>
          </div>
          <div className="bg-black dark:bg-white text-white dark:text-black p-8">
            <h3 className="text-3xl font-bold font-serif mb-6">GET IN TOUCH</h3>
            <p className="text-xl mb-8 font-light">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
              from you.
            </p>
            <div className="flex flex-col gap-4">
              <SocialButton 
                href={`mailto:${contactInfo.email}`}
                icon={Mail}
                label="Send Email"
                variant="dark"
              />
              <SocialButton 
                href={contactInfo.linkedin}
                icon={Linkedin}
                label="Connect on LinkedIn"
                variant="dark"
                external
              />
              <SocialButton 
                href={contactInfo.github}
                icon={Github}
                label="View GitHub Profile"
                variant="dark"
                external
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}