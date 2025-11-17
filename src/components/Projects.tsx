import { useState, useEffect } from "react";
import { X } from "lucide-react";

import railwayImg from "@/assets/Pune Railway Station .jpg";
import joyvillaImg from "@/assets/joyvilla.jpg";
import wellingtonImg from "@/assets/wellington-college.jpg";
// import cabImg from "@/assets/cab service .jpg";

// Firebase
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string; // Unified name for UI
}

// 📌 Static demo projects
const initialProjects: Project[] = [
  {
    id: 1,
    title: "Pune Railway Station",
    description: "Fire detection system across metro terminal",
    image: railwayImg,
  },
  {
    id: 2,
    title: "Joyvilla Fire System",
    description:
      "Complete fire alarm system installation ensuring guest safety",
    image: joyvillaImg,
  },
  {
    id: 3,
    title: "Kasba Metro Station",
    description: "Fire detection system across metro terminal",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
  },
  {
    id: 4,
    title: "Wellington International College",
    description: "Campus-wide fire safety infrastructure deployment",
    image: wellingtonImg,
  },
  // {
  //   id: 5,
  //   title: "Cab Service Control Panel Setup",
  //   description:
  //     "Professional installation and wiring of surveillance systems for a cab service facility.",
  //   image: cabImg,
  // },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 🔥 Fetch Firestore Projects (dynamic admin data)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snap = await getDocs(collection(db, "projects"));

        const firebaseProjects: Project[] = snap.docs.map((docSnap) => {
          const data = docSnap.data() as any;

          return {
            id: docSnap.id,
            title: data.title,
            description: data.description,
            image: data.imageUrl, // FIXED (Firebase uses imageUrl)
          };
        });

        // merge static + fetched
        setProjects([...initialProjects, ...firebaseProjects]);
      } catch (err) {
        console.error("Error loading Firestore:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Major Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              We take pride in successfully delivering quality services across
              various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/90">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-2xl"
            />

            <div className="mt-6 text-white text-center">
              <h3 className="text-3xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-lg text-white/80">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
