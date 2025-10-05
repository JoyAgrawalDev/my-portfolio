import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  ShoppingCart,
  Search,
  Server,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Custom websites built with modern technologies like React, Next.js, and Node.js.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, user-friendly interfaces that provide exceptional user experiences.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Full-featured online stores with secure payment integration and inventory management.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search rankings and drive organic traffic to your website.",
    },
  ];

  const projects = [
    {
      id: 1,
      image: project1,
      title: "E-Commerce Platform",
      description: "Modern online store with payment integration",
      tech: ["React", "Node.js", "Stripe"],
    },
    {
      id: 2,
      image: project2,
      title: "Corporate Website",
      description: "Professional business website with CMS",
      tech: ["Next.js", "Tailwind", "Sanity"],
    },
    {
      id: 3,
      image: project3,
      title: "Portfolio Website",
      description: "Creative portfolio with smooth animations",
      tech: ["React", "Framer Motion", "TypeScript"],
    },
    {
      id: 4,
      image: project4,
      title: "Restaurant Website",
      description: "Online ordering system with real-time updates",
      tech: ["Next.js", "Firebase", "Stripe"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Joy delivered an exceptional website that exceeded our expectations. Highly professional and responsive!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, ShopEasy",
      content:
        "The e-commerce platform Joy built has significantly increased our online sales. Great work!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Marketing Director",
      content:
        "Working with Joy was a pleasure. The website is beautiful and our SEO rankings have improved dramatically.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-6">
              <span className="inline-block text-lg font-medium text-primary mb-4">
                👋 Hi, I'm Joy Agrawal
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              A freelance{" "}
              <span className="bg-gradient-primary bg-clip-text ">
                Web Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specializing in creating beautiful, fast, and scalable websites.
              Let's bring your business online with a modern website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary shadow-elegant text-lg px-8">
                  Hire Me Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development services to help your business thrive online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and client projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-2">
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

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="gradient-primary shadow-elegant">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build your dream website today. Get in touch and let's discuss
            how I can help bring your vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
