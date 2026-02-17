import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useVisitorProfile } from "@/hooks/use-visitor-profile";

const categories = ["All", "Web", "Mobile", "Dashboard"];

const projects = [
  {
    title: "Border Payments System",
    category: "Web",
    industry: "Fintech",
    budget: 90,
    description: "Digitising exit fee payments across borders for seamless travel and real-time reconciliation.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Student Lifestyle Platform",
    category: "Mobile",
    industry: "Education",
    budget: 65,
    description: "A superapp uniting payments, discounts and services to shape the future of campus life.",
    tech: ["React Native", "Firebase", "Stripe"],
  },
  {
    title: "Tourism Superapp",
    category: "Mobile",
    industry: "Tourism",
    budget: 80,
    description: "A government-led platform seamlessly connecting travel, payments and experiences.",
    tech: ["Flutter", "AWS", "GraphQL"],
  },
  {
    title: "FinTrack Analytics",
    category: "Dashboard",
    industry: "Fintech",
    budget: 75,
    description: "Real-time financial analytics dashboard with AI-powered insights and portfolio management.",
    tech: ["React", "D3.js", "Python"],
  },
  {
    title: "E-Commerce Platform",
    category: "Web",
    industry: "Retail",
    budget: 55,
    description: "Enterprise e-commerce with inventory management, payment processing, and analytics.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Fleet Operations Hub",
    category: "Dashboard",
    industry: "Logistics",
    budget: 60,
    description: "Fleet management dashboard with GPS tracking, route optimization, and reporting.",
    tech: ["Vue.js", "Redis", "Go"],
  },
];

const Portfolio = () => {
  const { profile, recordInterest } = useVisitorProfile();
  const [active, setActive] = useState("All");
  const [preview, setPreview] = useState<(typeof projects)[number] | null>(null);
  const [maxBudget, setMaxBudget] = useState(100);
  const [techTerm, setTechTerm] = useState("");
  const filtered = useMemo(() => projects.filter((p) => {
    const categoryMatch = active === "All" || p.category === active;
    const budgetMatch = p.budget <= maxBudget;
    const techMatch = !techTerm || p.tech.some((item) => item.toLowerCase().includes(techTerm.toLowerCase()));
    return categoryMatch && budgetMatch && techMatch;
  }), [active, maxBudget, techTerm]);

  useEffect(() => {
    if (profile.topInterest?.toLowerCase().includes("mobile")) setActive("Mobile");
    else if (profile.topInterest?.toLowerCase().includes("dashboard")) setActive("Dashboard");
    else if (profile.region === "Americas" || profile.region === "EMEA") setActive("Web");
  }, [profile.region, profile.topInterest]);

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
              onClick={() => {
                setActive(cat);
                recordInterest(cat);
              }}
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

        <div className="mb-10 grid gap-4 rounded-2xl border border-border/60 bg-background/55 p-5 md:grid-cols-2">
          <label className="text-sm text-muted-foreground">
            Max budget scale: <span className="font-semibold text-foreground">{maxBudget}</span>
            <input
              type="range"
              min={30}
              max={100}
              value={maxBudget}
              onChange={(event) => setMaxBudget(Number(event.target.value))}
              className="mt-2 w-full accent-primary"
            />
          </label>
          <label className="text-sm text-muted-foreground">
            Filter by technology
            <input
              value={techTerm}
              onChange={(event) => setTechTerm(event.target.value)}
              placeholder="React, Flutter, AWS..."
              className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </label>
        </div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8, rotateX: -4, rotateY: index % 2 === 0 ? 4 : -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group card-glass overflow-hidden transition-all hover:border-primary/30 hover:shadow-[0_16px_50px_hsl(160_100%_45%_/_0.16)]"
              >
                <button
                  type="button"
                  onClick={() => {
                    setPreview(project);
                    recordInterest(project.category);
                    recordInterest(project.industry);
                  }}
                  className="relative flex h-44 w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5"
                >
                  <div className="portfolio-media pointer-events-none absolute inset-0 opacity-40" />
                  <ArrowUpRight size={36} className="text-primary/30 transition-all group-hover:scale-110 group-hover:text-primary/60" />
                </button>
                <div className="p-6">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold">{project.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-primary/75">{project.industry}</p>
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

        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="absolute right-4 top-4 z-10 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X size={16} />
                </button>
                <div className="portfolio-media h-64 w-full" />
                <div className="p-6">
                  <p className="font-display text-xs uppercase tracking-[0.18em] text-primary">{preview.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{preview.title}</h3>
                  <p className="mt-3 text-muted-foreground">{preview.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;
