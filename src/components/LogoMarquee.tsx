import { useState } from "react";
import { motion } from "framer-motion";
import { useVisitorProfile } from "@/hooks/use-visitor-profile";

const logoData = [
  { name: "Dubai Bank", story: "Reduced payment settlement latency by 38% with resilient transaction routing." },
  { name: "Scicom", story: "Unified loyalty and wallet experiences across mobile, kiosk, and web touchpoints." },
  { name: "Gamer Exchange", story: "Scaled real-time reward transactions for high-volume event campaigns." },
  { name: "Odoo", story: "Integrated operational workflows with custom dashboards and finance automation." },
  { name: "ItMax", story: "Improved cross-platform app performance through an API-first architecture." },
  { name: "SafexPay", story: "Enabled secure border payment flows with real-time reconciliation visibility." },
  { name: "Taksim", story: "Designed a branded digital ecosystem focused on merchant growth and retention." },
  { name: "Datalytic AI", story: "Shipped production-grade analytics modules with explainable AI insights." },
  { name: "Gov. of Ajman", story: "Delivered citizen-facing services with audit-ready workflows and uptime SLAs." },
  { name: "Aion", story: "Modernized a legacy platform into composable services and reusable UI systems." },
];

const LogoMarquee = () => {
  const { profile, recordInterest } = useVisitorProfile();
  const [active, setActive] = useState(logoData[0]);
  const testimonials = {
    fintech: "Revenue operations became 40% faster after wallet and reconciliation automation.",
    mobile: "App retention grew once we unified UX patterns across journeys.",
    dashboard: "Decision speed improved with live reporting and alert-driven workflows.",
    default: "Teams ship with more confidence when architecture and UX evolve together.",
  };
  const topRow = logoData.slice(0, 5);
  const bottomRow = logoData.slice(5);
  const testimonial =
    profile.topInterest?.toLowerCase().includes("mobile")
      ? testimonials.mobile
      : profile.topInterest?.toLowerCase().includes("dashboard")
        ? testimonials.dashboard
        : profile.region === "Americas" || profile.region === "EMEA"
          ? testimonials.fintech
          : testimonials.default;

  return (
    <section className="overflow-hidden border-y border-border/40 bg-card/30 py-12">
      <p className="mb-8 text-center font-display text-sm text-muted-foreground">
        The company we keep inspires us to push boundaries and reimagine what's possible.
      </p>

      <div className="relative space-y-4">
        <div className="flex animate-marquee whitespace-nowrap [animation-duration:34s]">
          {[...topRow, ...topRow].map((item, i) => (
            <button
              key={`${item.name}-${i}`}
              type="button"
              onClick={() => {
                setActive(item);
                recordInterest(item.name);
              }}
              className="mx-5 flex h-11 min-w-[140px] items-center justify-center rounded-full border border-border/60 bg-background/60 px-5 font-display text-sm font-semibold text-muted-foreground/75 transition-all hover:scale-105 hover:border-primary/40 hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex animate-marquee-reverse whitespace-nowrap [animation-duration:46s]">
          {[...bottomRow, ...bottomRow].map((item, i) => (
            <button
              key={`${item.name}-${i}`}
              type="button"
              onClick={() => {
                setActive(item);
                recordInterest(item.name);
              }}
              className="mx-5 flex h-11 min-w-[140px] items-center justify-center rounded-full border border-border/60 bg-background/60 px-5 font-display text-sm font-semibold text-muted-foreground/75 transition-all hover:scale-105 hover:border-primary/40 hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active.name}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mt-8 max-w-3xl rounded-2xl border border-primary/25 bg-background/65 px-6 py-5 text-center backdrop-blur-sm"
      >
        <p className="font-display text-sm font-semibold tracking-wide text-primary">{active.name}</p>
        <p className="mt-2 text-sm text-muted-foreground">{active.story}</p>
      </motion.div>
      <div className="mx-auto mt-4 max-w-3xl text-center text-xs uppercase tracking-[0.18em] text-primary/80">
        Dynamic testimonial: {testimonial}
      </div>
    </section>
  );
};

export default LogoMarquee;
