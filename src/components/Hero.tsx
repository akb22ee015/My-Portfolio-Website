import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Sparkles,
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary">
                <img
                  src={profileAvatar}
                  alt="Atish Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                <Code2 className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Atish Kumar
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Software Development Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Final Year Electrical Engineering Student at{" "}
              <span className="text-primary font-semibold">IIT Jodhpur</span>
              <br />
              Passionate about building scalable web applications and solving
              complex problems
            </p>
          </div>

          {/* Stats
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
            </div>
            <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">7.50</div>
              <div className="text-sm text-muted-foreground">CGPA at IIT Jodhpur</div>
            </div>
            <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">Top 1.5%</div>
              <div className="text-sm text-muted-foreground">JEE Advanced Rank</div>
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" className="group">
              <a href="#projects" className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            <a href="/resume/Atish_Kumar_Resume.pdf" download>
              <Button
                variant="ghost"
                size="lg"
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:kumaratish7009@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
