import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate software engineer with a strong foundation in Computer Science and Electrical Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a final year Electrical Engineering student at <span className="text-primary font-semibold">IIT Jodhpur</span> with a passion for software development and problem-solving. My journey in tech has been driven by curiosity and a desire to build impactful solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With experience in full-stack development, machine learning, and system design, I enjoy tackling complex challenges and turning ideas into reality. I've solved over <span className="text-accent font-semibold">300+ DSA problems</span> and worked on diverse projects ranging from e-commerce platforms to ML prediction models.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond academics, I'm actively involved in cultural and sports activities at IIT Jodhpur, having served in leadership roles for major college festivals and representing the institute at national levels.
              </p>
            </div>

            {/* Right Column - Education & Achievements */}
            <div className="space-y-6">
              {/* Education */}
              <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Indian Institute of Technology Jodhpur</h4>
                    <p className="text-sm text-muted-foreground">B.Tech in Electrical Engineering</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Nov 2022 - May 2026
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        CGPA: 7.50/10
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Gurukul Vidyapeeth, Hajipur</h4>
                    <p className="text-sm text-muted-foreground">Higher Secondary Education</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        May 2014 - Apr 2022
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        HSC: 96.2% · SSC: 96.6%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Key Achievements</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Secured All India Rank in top <strong className="text-primary">1.5%</strong> among 160,000+ candidates in JEE Advanced 2022</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Qualified JEE Mains 2022 out of 10,00,000+ candidates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Solved <strong className="text-accent">300+</strong> Data Structures and Algorithms problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leadership roles in major college festivals (Ignus & Varchas)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}