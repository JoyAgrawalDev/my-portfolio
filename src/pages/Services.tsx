import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Code,
  Palette,
  ShoppingCart,
  Search,
  Server,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Design & Development",
      description:
        "Custom websites built from scratch using modern technologies. Fully responsive, fast-loading, and optimized for all devices.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Fast Performance",
        "SEO-Friendly",
        "Cross-Browser Compatible",
      ],
      pricing: "Starting at ₹5,000",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Websites",
      description:
        "Complete e-commerce solutions with secure payment integration, inventory management, and order tracking systems.",
      features: [
        "Payment Gateway Integration",
        "Product Management",
        "Shopping Cart",
        "Order Management",
        "Customer Dashboard",
      ],
      pricing: "Starting at ₹10,000",
    },
    {
      icon: Palette,
      title: "Business / Portfolio Websites",
      description:
        "Professional websites for businesses and individuals. Showcase your brand, services, and portfolio with style.",
      features: [
        "Custom Design",
        "Content Management",
        "Contact Forms",
        "Image Galleries",
        "Blog Integration",
      ],
      pricing: "Starting at ₹10,000",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic. Complete SEO audit and optimization services.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Performance Optimization",
        "Analytics Setup",
      ],
      pricing: "Starting at ₹5,000",
    },
    {
      icon: Server,
      title: "Web Application Development",
      description:
        "Complex web applications with custom functionality. Built with scalable architecture and modern frameworks.",
      features: [
        "Custom Features",
        "Database Design",
        "API Integration",
        "User Authentication",
        "Admin Dashboard",
      ],
      pricing: "Contact for Quote",
    },
    {
      icon: Wrench,
      title: "Hosting & Maintenance",
      description:
        "Reliable hosting solutions and ongoing maintenance to keep your website running smoothly and securely.",
      features: [
        "Domain & Hosting Setup",
        "Regular Backups",
        "Security Updates",
        "Performance Monitoring",
        "Technical Support",
      ],
      pricing: "Contact for Quote",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Comprehensive web development services tailored to your business
              needs. From design to deployment, I've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-smooth flex flex-col animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="w-full">
                    <p className="text-2xl font-heading font-bold text-primary">
                      {service.pricing}
                    </p>
                  </div>
                  <Link to="/contact" className="w-full">
                    <Button className="w-full gradient-primary shadow-elegant">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              How I Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process to bring your project to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and target audience.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creating wireframes and mockups that align with your brand.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your website with clean, efficient, and scalable code.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Testing, deployment, and ongoing support for your success.",
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-smooth text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-5xl font-heading font-bold text-primary/20 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border overflow-hidden">
            <div className="gradient-primary p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Contact Me Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
