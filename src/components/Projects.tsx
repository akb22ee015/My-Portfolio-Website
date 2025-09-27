import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  ShoppingCart,
  MapPin,
  Heart,
  Cpu,
} from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Snazzy Shop Website",
      description:
        "Full-stack e-commerce application with secure authentication, product catalog management, and shopping cart functionality.",
      duration: "June – Aug 2025",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      features: [
        "Secure user authentication and authorization",
        "RESTful APIs with MongoDB integration",
        "Responsive React.js frontend",
        "Scalable and persistent data handling",
      ],
      icon: ShoppingCart,
      color: "primary",
      category: "Full Stack",
      github: "https://github.com/akb22ee015/Snazzy-Shop-Website",
      demo: "https://snazzyshop.vercel.app/",
    },
    {
      title: "Travel Tracker",
      description:
        "Web-based travel diary enabling users to log destinations, trip details, and notes in a structured format.",
      duration: "Jan - Feb 2025",
      technologies: ["Node.js", "Express.js", "EJS", "PostgreSQL"],
      features: [
        "PostgreSQL schemas for itinerary management",
        "Optimized server-side logic with Express.js",
        "Dynamic views with EJS templates",
        "Interactive and user-friendly interface",
      ],
      icon: MapPin,
      color: "secondary",
      category: "Web App",
      github: "https://github.com/akb22ee015/Travel-Tracker",
      demo: "https://travel-tracker-demo.vercel.app/",
    },
    {
      title: "Heart Stroke Predictor",
      description:
        "End-to-end ML pipeline for stroke risk prediction, covering preprocessing, model training, and evaluation.",
      duration: "Mar - May 2024",
      technologies: ["Python", "Scikit-learn", "Google Colab"],
      features: [
        "Multiple ML algorithms comparison (ANN, Random Forest, KNN, Decision Tree, Naive Bayes)",
        "Performance benchmarking and evaluation",
        "Feature importance analysis",
        "Medical risk factor identification",
      ],
      icon: Heart,
      color: "accent",
      category: "Machine Learning",
      github: "https://github.com/akb22ee015/PRML-Project",
      demo: "https://colab.research.google.com/drive/xxxxxx",
    },
    {
      title: "MIPS Compiler and Simulator",
      description:
        "Compiler and simulator supporting R, I, and J-type MIPS instructions with label resolution and error handling.",
      duration: "Oct - Nov 2024",
      technologies: ["Python", "MIPS Assembly"],
      features: [
        "Assembly instruction parser to binary machine code",
        "Support for R, I, and J-type instructions",
        "Step-by-step instruction simulation",
        "Educational tool for computer architecture",
      ],
      icon: Cpu,
      color: "primary",
      category: "System Programming",
      github: "https://github.com/akb22ee015/MIPS_Compiler",
      demo: "",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        icon: "text-primary",
        bg: "bg-primary/10",
        border: "hover:border-primary/30",
        glow: "hover:shadow-glow-primary/10",
      },
      secondary: {
        icon: "text-secondary",
        bg: "bg-secondary/10",
        border: "hover:border-secondary/30",
        glow: "hover:shadow-glow-secondary/10",
      },
      accent: {
        icon: "text-accent",
        bg: "bg-accent/10",
        border: "hover:border-accent/30",
        glow: "hover:shadow-lg",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating full-stack
              development, machine learning, and system programming skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <div
                  key={index}
                  className={`bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-8 transition-all duration-500 group ${colors.border} ${colors.glow}`}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 ${colors.bg} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <project.icon className={`w-8 h-8 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${colors.bg} ${colors.icon} font-medium`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div
                            className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2 flex-shrink-0`}
                          ></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border/30">
                    {/* GitHub Code Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>

                    {/* Live Demo Button */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="ghost" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub for additional
              projects and contributions.
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
            >
              <a
                href="https://github.com/akb22ee015"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
