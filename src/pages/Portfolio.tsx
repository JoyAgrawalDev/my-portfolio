import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      image: project1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product management, shopping cart, secure checkout, and payment integration using Stripe.",
      category: "ecommerce",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      image: project2,
      title: "Corporate Business Website",
      description:
        "Professional business website with CMS integration, contact forms, and SEO optimization for maximum visibility.",
      category: "business",
      tech: ["Next.js", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      image: project3,
      title: "Creative Portfolio",
      description:
        "Modern portfolio website with smooth animations, project showcase, and contact functionality for a creative professional.",
      category: "portfolio",
      tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      image: project4,
      title: "Restaurant & Online Ordering",
      description:
        "Restaurant website with menu management, online ordering system, and real-time order tracking integration.",
      category: "ecommerce",
      tech: ["Next.js", "Firebase", "Stripe", "Tailwind CSS", "React Query"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      image: project1,
      title: "SaaS Dashboard",
      description:
        "Complex dashboard application with data visualization, user management, and subscription handling for a SaaS product.",
      category: "webapp",
      tech: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      image: project2,
      title: "Real Estate Platform",
      description:
        "Property listing website with advanced search filters, virtual tours, and contact management system.",
      category: "business",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      image: project3,
      title: "Fitness App",
      description:
        "Workout tracking application with exercise database, progress monitoring, and personalized workout plans.",
      category: "webapp",
      tech: ["React Native", "Node.js", "MongoDB", "Express", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 8,
      image: project4,
      title: "Education Platform",
      description:
        "Online learning platform with course management, video streaming, quizzes, and student progress tracking.",
      category: "webapp",
      tech: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "Mux"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "business", name: "Business" },
    { id: "portfolio", name: "Portfolio" },
    { id: "webapp", name: "Web Apps" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A showcase of my recent work and client projects. Each project
              represents a unique challenge and creative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={
                  filter === category.id
                    ? "gradient-primary shadow-elegant"
                    : ""
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden border-border hover:shadow-elegant transition-smooth group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-6 gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="gradient-primary shadow-elegant"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Site
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
