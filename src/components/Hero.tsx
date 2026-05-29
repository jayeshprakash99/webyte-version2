import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background layers */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-40 blur-3xl animate-float-orb"
        style={{ background: "radial-gradient(circle, #EFBC09, transparent 70%)" }} />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-float-orb"
        style={{ background: "radial-gradient(circle, #FF960C, transparent 70%)", animationDelay: "3s" }} />

      <div className="container mx-auto px-5 relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full gradient-brand animate-pulse" />
            Fueling Your Success
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            We Fuel Your <br />
            <span className="gradient-text">Digital Success</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            From stunning websites to viral social campaigns — Webyte Solutions delivers results that move the needle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#services" className="shimmer group inline-flex items-center gap-2 gradient-brand text-black font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-[0_20px_40px_-15px_rgba(255,150,12,0.6)]">
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div><span className="text-foreground font-bold text-2xl">200+</span><br/>Projects</div>
            <div className="w-px h-10 bg-border" />
            <div><span className="text-foreground font-bold text-2xl">50+</span><br/>Clients</div>
            <div className="w-px h-10 bg-border" />
            <div><span className="text-foreground font-bold text-2xl">5★</span><br/>Rated</div>
          </motion.div>
        </div>

        {/* Animated bar chart visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative p-10 rounded-3xl border border-border bg-surface/40 backdrop-blur-md glow-border">
            <div className="flex items-end gap-4 h-64">
              {[0.4, 0.55, 0.7, 0.5, 0.85, 0.95, 1].map((h, i) => (
                <div
                  key={i}
                  className="w-10 rounded-t-xl gradient-brand animate-bar"
                  style={{
                    height: `${h * 100}%`,
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0.6 + i * 0.05,
                  }}
                />
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Growth Metrics</p>
              <p className="text-xs font-semibold gradient-text">+248% YoY</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Client logo marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-border bg-background/60 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {[...Array(2)].flatMap((_, k) =>
            ["NEXUS", "OBSIDIAN", "VAULT", "ORBIT CO.", "LUMEN", "STRATA", "HALO", "MERIDIAN"].map((n, i) => (
              <span key={`${k}-${i}`} className="text-2xl font-bold text-muted-foreground/40 tracking-widest">
                {n}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

