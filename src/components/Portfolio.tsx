import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Dashboard"];

const projects = [
  {
    title: "FinTrack Pro",
    category: "Dashboard",
    description: "Real-time financial analytics dashboard with AI-powered insights and portfolio tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "D3.js"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "MediCare App",
    category: "Mobile",
    description: "Healthcare appointment booking and telemedicine platform serving 50K+ users.",
    tech: ["React Native", "Firebase", "Stripe"],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "ShopFlow",
    category: "Web",
    description: "E-commerce platform with inventory management, payment processing, and analytics.",
    tech: ["Next.js", "MongoDB", "AWS", "Tailwind"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "EduLearn LMS",
    category: "Web",
    description: "Learning management system with video streaming, quizzes, and progress tracking.",
    tech: ["React", "Express", "PostgreSQL"],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "FleetOps",
    category: "Dashboard",
    description: "Fleet management dashboard with GPS tracking, route optimization, and reporting.",
    tech: ["Vue.js", "Python", "Redis"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "FitPulse",
    category: "Mobile",
    description: "Fitness tracking app with workout plans, nutrition logging, and social features.",
    tech: ["Flutter", "Firebase", "TensorFlow"],
    color: "from-primary/15 to-primary/5",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-card/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Work</span>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-gradient-card transition-all hover:border-primary/30"
              >
                <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <ExternalLink size={32} className="text-primary/40 transition-all group-hover:scale-110 group-hover:text-primary" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
