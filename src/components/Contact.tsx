import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-5">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's build something <span className="gradient-text">remarkable</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">Drop us a message — we respond within one business day.</p>

          <div className="mt-10 space-y-5">
            <a href="mailto:business@webytesolutions.in" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-[var(--brand-orange)] transition-colors">
                <Mail size={20} style={{ color: "var(--brand-orange)" }} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email us</p>
                <p className="font-medium">business@webytesolutions.in</p>
              </div>
            </a>

            <a href="tel:+918709511596" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-[var(--brand-orange)] transition-colors">
                <Phone size={20} style={{ color: "var(--brand-orange)" }} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call us</p>
                <p className="font-medium">+91 8709511596</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center">
                <MapPin size={20} style={{ color: "var(--brand-orange)" }} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Visit</p>
                <p className="font-medium">Bengaluru, India</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            {[
              {
                Icon: Instagram,
                label: "Instagram",
                href: "https://www.instagram.com/webyte.solutions?igsh=bWFwN3gwcjM1ZnJw&utm_source=qr",
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/jayesh-prakash-37a7a31aa",
              },
              {
                Icon: MessageCircle,
                label: "WhatsApp",
                // Prefilled message (URL-encoded)
                href:
                  "https://wa.me/918709511596?text=Hi%20Webyte%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project.",
              },
              {
                Icon: Facebook,
                label: "Facebook",
                href: "https://www.facebook.com/share/1CtPhg7CTm/?mibextid=wwXIfr",
              },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center hover:gradient-brand hover:text-black hover:border-transparent transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-8 rounded-3xl bg-surface border border-border">
          <p className="text-lg font-medium mb-4">Prefer to write? Send us an email and we'll get back within one business day.</p>
          <a href="mailto:business@webytesolutions.in" className="w-full inline-flex items-center justify-center gap-2 gradient-brand text-black font-semibold px-6 py-3.5 rounded-xl hover:scale-[1.02] transition-transform shadow-[0_15px_35px_-10px_rgba(255,150,12,0.5)]">
            Email Us
          </a>
          <div className="mt-4 text-sm text-muted-foreground">Or call us at <a href="tel:+918709511596" className="font-medium text-foreground">+91 8709511596</a></div>
        </motion.div>
      </div>
    </section>
  );
}
