import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-foreground text-white py-12">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BTEC SERVICE</h3>
              <p className="text-white/70 leading-relaxed">
                Complete Manpower & Electrical Service Solutions. Your trusted partner for quality services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white/70 hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/70 hover:text-primary transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>• Labor Supply</li>
                <li>• CCTV Installation</li>
                <li>• Fire Alarm Systems</li>
                <li>• Electrical Panel Manufacturing</li>
                <li>• Maintenance & Wiring</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© {new Date().getFullYear()} BTEC Service All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full w-14 h-14 gradient-hero text-white shadow-hover hover:scale-110 transition-transform z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
};

export default Footer;