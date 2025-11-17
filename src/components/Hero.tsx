import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-secondary/90" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            BTEC SERVICE 
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90">
            Complete Manpower & Electrical Service Solutions
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Professional Solutions for Every Need | Manpower | Electrical Panels | CCTV | Fire Alarms | Society Maintenance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full font-semibold hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Service
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full font-semibold bg-white/10 text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;