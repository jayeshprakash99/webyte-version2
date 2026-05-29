import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-center shadow-[0_30px_80px_-20px_rgba(255,150,12,0.5)]"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-black/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            Ready to grow your business?
          </h2>
          <p className="mt-4 text-black/80 text-lg max-w-xl mx-auto">
            Book a free 30-minute strategy call. No pitch, just a clear plan.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Let's Talk <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
