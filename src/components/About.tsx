import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import about from "@/assets/about.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>0{suffix}</span>;
}

const reasons = [
  "Data-driven strategies tailored to your KPIs",
  "Full-stack creative team under one roof",
  "Transparent reporting, no hidden fees",
  "Proven results across 12+ industries",
];

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Team Members" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-5">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-border">
            <img src={about} alt="Webyte Solutions team at work" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block p-5 rounded-2xl bg-surface border border-border glow-border">
            <p className="text-3xl font-extrabold gradient-text">98%</p>
            <p className="text-xs text-muted-foreground mt-1">Client retention</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-3">About Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Choose <span className="gradient-text">Webyte Solutions?</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We're a tight-knit team of designers, developers, and strategists obsessed with one thing — helping brands grow. We blend craft with data to deliver work that performs.
          </p>

          <ul className="mt-8 space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-0.5" style={{ color: "var(--brand-orange)" }} size={20} />
                <span className="text-foreground/90">{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-surface border border-border text-center">
                <p className="text-3xl font-extrabold gradient-text">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
