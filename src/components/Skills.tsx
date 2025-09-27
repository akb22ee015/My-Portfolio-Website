import { Code, Database, Brain, Wrench, BookOpen, Globe } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      color: "secondary",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 65 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "accent",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      color: "primary",
      skills: [
        { name: "Scikit-learn", level: 80 },
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Globe,
      color: "secondary",
      skills: [
        { name: "AWS", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "CI/CD", level: 65 }
      ]
    },
    {
      title: "Coursework",
      icon: BookOpen,
      color: "accent",
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Computer Architecture", level: 80 },
        { name: "Digital Design", level: 75 }
      ]
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'from' | 'to') => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        from: 'from-primary',
        to: 'to-primary-glow'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        from: 'from-secondary',
        to: 'to-secondary-glow'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        from: 'from-accent',
        to: 'to-accent'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || '';
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical skills and knowledge accumulated through academic projects, internships, and self-learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${getColorClass(category.color, 'bg')} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${getColorClass(category.color, 'text')}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getColorClass(category.color, 'from')} ${getColorClass(category.color, 'to')} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">DSA Problems</div>
            </div>
            <div className="text-center bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}