import { motion } from "framer-motion";
import { Palette, Code2, Smartphone, Megaphone, Star, Film, Search, Sparkles } from "lucide-react";

const services = [
  { icon: Palette, title: "Graphic Designing", desc: "Eye-catching visuals that define your brand identity." },
  { icon: Code2, title: "Web Development", desc: "Fast, modern, conversion-driven websites built to scale." },
  { icon: Smartphone, title: "App Development", desc: "Native & cross-platform apps your users will love." },
  { icon: Megaphone, title: "Social Media Management", desc: "Strategy & content that grows engaged communities." },
  { icon: Star, title: "Influencer Management", desc: "Partner with the right voices to amplify your reach." },
  { icon: Film, title: "Video Editing", desc: "Cinematic edits that captivate and convert viewers." },
  { icon: Search, title: "SEO Optimisation", desc: "Rank higher on Google and own your category." },
  { icon: Sparkles, title: "And More…", desc: "Tell us what you need — we build the full stack of growth." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Services that <span className="gradient-text">scale</span> your brand
          </h2>
          <p className="mt-4 text-muted-foreground">Eight specialised teams. One mission — your growth.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-15px_rgba(255,150,12,0.35)] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(239,188,9,0.08), rgba(255,150,12,0.04))" }} />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ padding: "1px", background: "linear-gradient(135deg, #EFBC09, #FF960C)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5 shadow-[0_10px_25px_-10px_rgba(255,150,12,0.6)] group-hover:scale-110 transition-transform">
                  <s.icon size={22} className="text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
