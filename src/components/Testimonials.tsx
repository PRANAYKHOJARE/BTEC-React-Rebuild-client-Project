import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Pune Railway Station",
    project: "CCTV Installation",
    feedback:
      "The BTEC team delivered exceptional service and ensured smooth setup and operations. Highly reliable.",
  },
  {
    name: "Yewada Jail",
    project: "CCTV Project",
    feedback:
      "Professional and secure installation completed ahead of schedule. Excellent support team.",
  },
  {
    name: "Joyvilla Hotel",
    project: "Fire Alarm Setup",
    feedback:
      "Impressed with the fire safety integration. Quick, responsive, and detail-oriented.",
  },
  {
    name: "Kasba Metro Station",
    project: "Fire Alarm Installation",
    feedback:
      "Top-tier execution by BTEC. The system is efficient and compliant with safety standards.",
  },
  {
    name: "Wellington College International",
    project: "Fire Work Installation",
    feedback:
      "Professional setup for campus-wide safety. Very satisfied with BTEC's services.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading organizations across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth border-l-4 border-primary animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-4">
                <Quote className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {testimonial.project}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
