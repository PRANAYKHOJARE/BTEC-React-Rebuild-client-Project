import { useEffect, useState, useRef } from "react";

const stats = [
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 150, suffix: "+", label: "Projects Completed" },
  { target: 50, suffix: "+", label: "Happy Clients" },
  { target: 100, suffix: "%", label: "Client Satisfaction" },
];

const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            const increment = stat.target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.target;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, 40);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-lg md:text-xl font-medium text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;