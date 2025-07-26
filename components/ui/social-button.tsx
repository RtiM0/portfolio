import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  variant?: "light" | "dark";
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function SocialButton({ 
  href, 
  icon: Icon, 
  label, 
  variant = "light",
  external = false,
  onClick 
}: SocialButtonProps) {
  const baseClasses = "border-2 bg-transparent max-sm:px-3";
  const variantClasses = variant === "light" 
    ? "border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
    : "border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white";

  return (
    <Button
      variant="outline"
      size="lg"
      className={`${baseClasses} ${variantClasses}`}
      asChild
    >
      <Link 
        href={href} 
        target={external ? "_blank" : undefined}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
        }}
      >
        <Icon className="w-5 h-5 lg:mr-2" />
        <span className="hidden sm:block md:hidden lg:block">{label}</span>
      </Link>
    </Button>
  );
}