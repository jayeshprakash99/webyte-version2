import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We dig deep into your brand, goals, and audience." },
  { icon: Lightbulb, title: "Strategy", desc: "A custom roadmap built around measurable outcomes." },
  { icon: Rocket, title: "Execution", desc: "Our team ships fast — without cutting corners." },
  { icon: TrendingUp, title: "Results", desc: "Transparent reporting and continuous optimisation." },
];

export function Process() {
  return (
    <section className="relative py-28 px-5 bg-surface/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">How We Work</h2>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--brand-orange)] to-transparent opacity-40" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(255,150,12,0.5)]">
                <s.icon size={28} className="text-black" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border border-border text-xs font-bold flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-[220px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
