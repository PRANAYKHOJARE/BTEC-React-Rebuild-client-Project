import { Shield, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO certified services with guaranteed quality standards",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled ITI holders and trained professionals",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support and field service",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description: "Years of experience serving major clients across India",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About BTEC Service
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BTEC Service is a leading provider of comprehensive manpower solutions and electrical services. 
            With years of industry experience, we deliver excellence in CCTV installations, fire alarm systems, 
            electrical panel manufacturing, and complete maintenance services for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;