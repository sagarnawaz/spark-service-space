import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-card/60 px-6 py-14 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold text-foreground">
            Nexus<span className="text-primary">Dev</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Product engineering for web, mobile, dashboards, and AI-powered systems.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { href: "#services", label: "Capabilities" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#about", label: "Values" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary">Connect</p>
          <a
            href="mailto:hello@nexusdev.com"
            className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail size={15} />
            hello@nexusdev.com
          </a>
          <div className="mt-4 flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, rotate: i % 2 === 0 ? 3 : -3 }}
                className="rounded-full border border-border bg-background p-2.5 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border/60 pt-5 text-sm text-muted-foreground">
        © {new Date().getFullYear()} NexusDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
