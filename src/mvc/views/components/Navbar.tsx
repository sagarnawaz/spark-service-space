import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("spark-theme");
    const nextTheme = saved === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("spark-theme", nextTheme);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "border-b border-border/60 bg-background/85 py-0 backdrop-blur-xl" : "bg-background/65 py-1 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight text-foreground">
          Nexus<span className="text-primary">Dev</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Let's Talk
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-6 py-2.5 text-center font-display text-sm font-semibold text-primary-foreground"
              >
                Let's Talk
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm text-muted-foreground"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
