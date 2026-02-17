import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Dashboard"];

const projects = [
  {
    title: "Border Payments System",
    category: "Web",
    description: "Digitising exit fee payments across borders for seamless travel and real-time reconciliation.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Student Lifestyle Platform",
    category: "Mobile",
    description: "A superapp uniting payments, discounts and services to shape the future of campus life.",
    tech: ["React Native", "Firebase", "Stripe"],
  },
  {
    title: "Tourism Superapp",
    category: "Mobile",
    description: "A government-led platform seamlessly connecting travel, payments and experiences.",
    tech: ["Flutter", "AWS", "GraphQL"],
  },
  {
    title: "FinTrack Analytics",
    category: "Dashboard",
    description: "Real-time financial analytics dashboard with AI-powered insights and portfolio management.",
    tech: ["React", "D3.js", "Python"],
  },
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Enterprise e-commerce with inventory management, payment processing, and analytics.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Fleet Operations Hub",
    category: "Dashboard",
    description: "Fleet management dashboard with GPS tracking, route optimization, and reporting.",
    tech: ["Vue.js", "Redis", "Go"],
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
          className="mb-16"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Case Studies
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Your Future <span className="text-gradient">In Action</span>
          </h2>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2.5 font-display text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group card-glass overflow-hidden transition-all hover:border-primary/30"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <ArrowUpRight size={36} className="text-primary/30 transition-all group-hover:scale-110 group-hover:text-primary/60" />
                </div>
                <div className="p-6">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
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
