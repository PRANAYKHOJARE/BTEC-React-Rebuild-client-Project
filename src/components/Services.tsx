import manpowerImg from "@/assets/service-manpower.jpg";
import cctvImg from "@/assets/service-cctv.jpg";
import fireImg from "@/assets/service-fire.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";

const services = [
  {
    title: "Labor Supply",
    description: "Skilled and unskilled manpower for industries and societies. Our trained professionals ensure quality work delivery.",
    image: manpowerImg,
  },
  {
    title: "CCTV Installation",
    description: "Installation of dome, bullet, IP, and wireless security cameras. Complete surveillance solutions for your safety.",
    image: cctvImg,
  },
  {
    title: "Fire Alarm Systems",
    description: "End-to-end fire safety and detection system installation. Compliance with all safety standards and regulations.",
    image: fireImg,
  },
  {
    title: "Electrical Panel Mfg.",
    description: "Custom-made control and distribution panels. DOL, Soft Starters, APFC, and process control solutions.",
    image: electricalImg,
  },
  {
    title: "Maintenance & Wiring",
    description: "Electrical maintenance and structured wiring for buildings. On-site support and preventive maintenance services.",
    image: maintenanceImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              We Manufacture
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-smooth">
              <h3 className="font-bold text-lg text-foreground mb-2">All Types of Electrical Distribution Panels</h3>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-smooth">
              <h3 className="font-bold text-lg text-foreground mb-2">Motor Starters – DOL, Soft Starters, Auto Changeover</h3>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-smooth">
              <h3 className="font-bold text-lg text-foreground mb-2">Control Panels – APFC, Process Control, Auto Changeover</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;