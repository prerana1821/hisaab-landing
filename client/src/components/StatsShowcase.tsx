export default function StatsShowcase() {
  const stats = [
    { label: "Today", amount: "2,847" },
    { label: "This Week", amount: "18,432" },
    { label: "This Month", amount: "64,219" },
  ];

  return (
    <section className="border-t border-border bg-background py-32 px-8 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Minimal Header */}
        <div className="mb-32 text-center">
          <h2 className="mb-4 font-serif text-5xl font-black text-foreground md:text-6xl lg:text-7xl">
            Track
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Every Single Rupee
          </p>
        </div>

        {/* Clean Grid */}
        <div className="grid gap-24 md:grid-cols-3 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center"
              data-testid={`card-stat-${index}`}
            >
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </p>
                <div className="mx-auto h-px w-8 bg-border" />
                <div className="space-y-2">
                  <div className="font-mono text-4xl font-bold text-foreground md:text-5xl">
                    ₹{stat.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
