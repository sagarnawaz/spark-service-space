import { motion } from "framer-motion";

const CompanyProfile = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl rounded-3xl border border-border/70 bg-card/40 p-8 md:p-12">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-bold md:text-4xl">
          Company Profile
        </motion.h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold">Executive Summary</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              NexusDev is a technology engineering company delivering scalable web platforms, mobile applications, AI-driven systems, and digital growth solutions.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              We combine technical expertise with performance-driven strategy to build long-term digital infrastructure.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold">Vision</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              To become a trusted global technology partner enabling businesses to scale through intelligent digital systems.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold">Mission</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              To deliver secure, scalable, and high-performance digital solutions that create measurable business impact.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold">Core Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>1. Web Development</li>
              <li>2. Mobile Application Development</li>
              <li>3. AI Solutions</li>
              <li>4. QA and Testing</li>
              <li>5. SEO and Digital Growth</li>
              <li>6. Short Video Advertising</li>
            </ul>

            <h3 className="mt-6 font-display text-xl font-semibold">Technology Stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Frontend: React, Next.js</li>
              <li>Backend: Node.js, Express</li>
              <li>Database: MongoDB, PostgreSQL</li>
              <li>Cloud: AWS / Vercel</li>
              <li>AI: OpenAI integrations, custom ML workflows</li>
            </ul>

            <h3 className="mt-6 font-display text-xl font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@nexusdev.com</li>
              <li>Website: nexusdev.example</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Pakistan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
