import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AdminPanel from "@/components/AdminPanel";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            BTEC SERVICE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="hover:border-primary transition-colors">
                  <Shield className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Admin Panel</DialogTitle>
                </DialogHeader>
                <AdminPanel />
              </DialogContent>
            </Dialog>
            <Button
              className="gradient-hero text-white font-semibold hover:opacity-90"
              onClick={() => scrollToSection("#contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in-up">
          <div className="container px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-foreground font-semibold hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full hover:border-primary transition-colors">
                  <Shield className="w-5 h-5 mr-2" />
                  Admin Panel
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Admin Panel</DialogTitle>
                </DialogHeader>
                <AdminPanel />
              </DialogContent>
            </Dialog>
            <Button
              className="w-full gradient-hero text-white font-semibold"
              onClick={() => scrollToSection("#contact")}
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;