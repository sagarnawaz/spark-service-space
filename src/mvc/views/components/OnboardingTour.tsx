import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOUR_KEY = "spark-tour-complete";

const OnboardingTour = () => {
  const steps = useMemo(
    () => [
      { id: "home", title: "Start Here", desc: "This hero adapts messaging based on your device and behavior." },
      { id: "services", title: "Explore Capabilities", desc: "Click service cards to flip and reveal deeper value." },
      { id: "portfolio", title: "Review Case Studies", desc: "Use filters and previews to find relevant outcomes quickly." },
      { id: "contact", title: "Launch Your Project", desc: "Reach out once you have the right direction and scope." },
    ],
    [],
  );
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const completed = window.localStorage.getItem(TOUR_KEY);
    if (!completed) setOpen(true);
  }, []);

  const current = steps[step];

  const goToStep = (index: number) => {
    setStep(index);
    const target = document.getElementById(steps[index].id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-background/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mx-auto mt-24 w-[min(560px,calc(100vw-2rem))] rounded-2xl border border-border bg-card p-6"
        >
          <p className="font-display text-xs uppercase tracking-[0.18em] text-primary">Guided Walkthrough</p>
          <h3 className="mt-2 font-display text-2xl font-bold">{current.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{current.desc}</p>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToStep(index)}
                  className={`h-2.5 w-8 rounded-full ${index === step ? "bg-primary" : "bg-muted"}`}
                  aria-label={`Go to tour step ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"
              >
                Back
              </button>
              {step === steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    window.localStorage.setItem(TOUR_KEY, "true");
                    setOpen(false);
                  }}
                  className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                >
                  Finish
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => goToStep(step + 1)}
                  className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OnboardingTour;
