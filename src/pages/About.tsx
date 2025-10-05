import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile.png";

const About = () => {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 75 },
    { name: "SpringBoot", level: 87 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 87 },
    
  ];

  const experience = [
    {
      year: "2022 - Present",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      description:
        "Building custom websites and web applications for clients worldwide. Specializing in React.js, Next.js, and modern web technologies.",
    },
    {
      year: "2024 - 2025",
      title: "Software Developer",
      company: "Vir Softech Pvt. Ltd .",
      description:
        "Developed responsive web applications using React and TypeScript and SpringBoot. Collaborated with design and backend teams to deliver high-quality products.",
    },
    {
      year: "2025 - 2025",
      title: "Software Developer",
      company: "Accenture",
      description:
        "Developed responsive web applications using React and TypeScript and SpringBoot. Collaborated with design and backend teams to deliver high-quality products.",
    },
  ];

  const education = [
    {
      year: "2021 - 2025",
      degree: "Bachelor of Technology",
      institution: "G.L Bajaj Group Of Institutions",
      description: "Computer Science & Engineering",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                I'm Joy Agrawal, a passionate freelance web developer with a focus
                on creating beautiful, functional, and user-friendly websites. With
                expertise in modern web technologies like React.js, Next.js, and
                Tailwind CSS, I help businesses establish their online presence.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                My mission is to transform ideas into reality through clean code,
                innovative design, and a commitment to excellence. I believe every
                project is an opportunity to create something remarkable.
              </p>
              <a href="/Resume Joy Agrawal.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary shadow-elegant">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              </a>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={profileImage}
                  alt="Joy Agrawal"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web development technologies and frameworks
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Experience
                </h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="border-border hover:shadow-elegant transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-heading font-semibold">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="border-border hover:shadow-elegant transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-heading font-semibold">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
