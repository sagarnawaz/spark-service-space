const LogoMarquee = () => {
  const logos = [
    "Dubai Bank", "Scicom", "Gamer Exchange", "Odoo", "ItMax",
    "SafexPay", "Taksim", "Datalytic AI", "Gov. of Ajman", "Aion",
  ];

  return (
    <section className="overflow-hidden border-y border-border/40 bg-card/30 py-12">
      <p className="mb-8 text-center font-display text-sm text-muted-foreground">
        The company we keep inspires us to push boundaries and reimagine what's possible.
      </p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="mx-8 flex h-10 min-w-[120px] items-center justify-center font-display text-sm font-semibold text-muted-foreground/60"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
