import { Heart, Code, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Footer Content */}
          {/* <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-hero-gradient bg-clip-text text-transparent">
              Atish Kumar
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Software Development Engineer passionate about creating impactful solutions and building the future through code.
            </p>
          </div> */}

          {/* Made with Love */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-primary" />
            <span>React, TypeScript & Tailwind CSS</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Experience
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Atish Kumar. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0">
              <Coffee className="w-4 h-4" />
              <span>Fueled by curiosity and caffeine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}