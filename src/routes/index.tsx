import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webyte Solutions | Fueling Your Success" },
      { name: "description", content: "Webyte Solutions is a full-service digital marketing agency — web development, design, social media, SEO and more. Fueling your success." },
      { property: "og:title", content: "Webyte Solutions | Fueling Your Success" },
      { property: "og:description", content: "Full-service digital marketing agency for ambitious brands." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bytebright-success-studio.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://bytebright-success-studio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Webyte Solutions",
          image: "https://bytebright-success-studio.lovable.app/og-image.jpg",
          url: "https://bytebright-success-studio.lovable.app",
          telephone: "+91 8709511596",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bengaluru",
            addressCountry: "IN",
          },
          slogan: "Fueling Your Success",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}

