import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kumaratish7009@gmail.com",
      link: "mailto:kumaratish7009@gmail.com",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Academic Email",
      value: "b22ee015@iitj.ac.in",
      link: "mailto:b22ee015@iitj.ac.in",
      color: "secondary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9508813493",
      link: "tel:+919508813493",
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "IIT Jodhpur, Rajasthan, India",
      link: "#",
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/akb22ee015",
      color: "primary"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/atish-kumar-0bb004256/",
      color: "secondary"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:kumaratish7009@gmail.com",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or interesting projects. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="contact"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors duration-300 group"
                    >
                      <div className={`p-3 bg-${info.color}/10 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-5 h-5 text-${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors duration-300 group"
                    >
                      <div className={`p-3 bg-${social.color}/10 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className={`w-5 h-5 text-${social.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{social.name}</h4>
                        <p className="text-muted-foreground">Connect on {social.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Note */}
              <div className="bg-card-gradient backdrop-blur border border-border/50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Let's Collaborate!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently looking for <span className="text-accent font-semibold">software engineering opportunities</span> and exciting projects to work on. Whether you have a job opportunity, want to collaborate on a project, or just want to connect, I'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}