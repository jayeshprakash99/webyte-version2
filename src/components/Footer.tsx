import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 px-5 pt-16 pb-8">
      <div className="container mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fueling your success with strategy, design, and code. A full-service digital agency for ambitious brands.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { Icon: Instagram, label: "Follow us on Instagram" },
              { Icon: Linkedin, label: "Connect with us on LinkedIn" },
              { Icon: MessageCircle, label: "Chat with us on WhatsApp" },
              { Icon: Facebook, label: "Follow us on Facebook" },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:gradient-brand hover:text-black hover:border-transparent transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-sm">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "Services", "About", "Portfolio", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-sm">Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Web Development", "Graphic Design", "Social Media", "SEO", "Video Editing"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© 2025 Webyte Solutions. All Rights Reserved.</p>
        <p>Fueling Your Success.</p>
      </div>
    </footer>
  );
}
