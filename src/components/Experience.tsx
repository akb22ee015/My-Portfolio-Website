import { Calendar, MapPin, Users, GitBranch, BarChart, Trophy } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Summer Research Intern",
      company: "IIT Jodhpur",
      location: "Jodhpur, India",
      duration: "May 2025 - Sep 2025",
      mentor: "Dr. Binod Kumar",
      description: "Developed optimization modules for chiplet-based architectures, enhancing placement and routing efficiency.",
      achievements: [
        "Enhanced placement and routing efficiency by reducing latency and wirelength",
        "Collaborated in a 3-member team using Agile workflows and version control",
        "Benchmarked algorithms on real-world datasets",
        "Contributed to conference-level publications"
      ],
      icon: BarChart,
      color: "primary"
    }
  ];

  const responsibilities = [
    {
      title: "Assistant Head - Ignus (Cultural Fest)",
      organization: "IIT Jodhpur",
      description: "Led cultural fest organization and coordination",
      icon: Trophy,
      color: "secondary"
    },
    {
      title: "Assistant Head - Varchas (Sports Fest)",
      organization: "IIT Jodhpur", 
      description: "Managed sports fest operations and logistics",
      icon: Trophy,
      color: "accent"
    },
    {
      title: "Core Member - Dramatics Society",
      organization: "IIT Jodhpur",
      description: "Contributed to stage performances and script development",
      icon: Users,
      color: "primary"
    },
    {
      title: "Inter IIT Cultural Meet 6.0 Participant",
      organization: "IIT Jodhpur",
      description: "Represented institute at national cultural competition",
      icon: Trophy,
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and leadership roles that shaped my technical and interpersonal skills
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-8 hover:shadow-glow-primary/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column - Icon & Timeline */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                      <div className={`p-3 bg-${exp.color}/10 rounded-xl`}>
                        <exp.icon className={`w-8 h-8 text-${exp.color}`} />
                      </div>
                      <div className="hidden lg:block w-px h-16 bg-border/50 mx-auto"></div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">Mentor: {exp.mentor}</p>
                        </div>
                        <div className="flex flex-col lg:items-end gap-1 mt-2 lg:mt-0">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Extracurricular */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-secondary">Leadership & Extracurricular</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibilities.map((resp, index) => (
                <div key={index} className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${resp.color}/10 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <resp.icon className={`w-6 h-6 text-${resp.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{resp.title}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{resp.organization}</p>
                      <p className="text-sm text-muted-foreground">{resp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}