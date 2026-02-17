import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="font-display text-xl font-bold">
          Nexus<span className="text-primary">Dev</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NexusDev. All rights reserved.
        </p>
        <div className="flex gap-3">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
