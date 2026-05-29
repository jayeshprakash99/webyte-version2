import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <a href="#home" aria-label="Webyte Solutions home"><Logo /></a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:gradient-brand hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex shimmer items-center gap-2 gradient-brand text-black font-semibold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-transform shadow-[0_10px_30px_-10px_rgba(255,150,12,0.6)]"
        >
          Get a Free Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden glass overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-foreground hover:gradient-text font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center gradient-brand text-black font-semibold px-5 py-3 rounded-full"
            >
              Get a Free Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
