import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/JoyAgrawalDev", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/joyagrawal/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:joy.agrawal.dev@gmail.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                JA
              </span>
            </Link>
            <p className="text-muted-foreground">
              Design. Develop. Deliver.
            </p>
            <p className="text-sm text-muted-foreground">
              Building beautiful, fast, and scalable websites for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Joy Agrawal. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-primary fill-primary" /> By Joy Agrawal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
