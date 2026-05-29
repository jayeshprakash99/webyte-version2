import logo from "@/assets/webyte-logo.jpeg";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      <img src={logo} alt="Webyte Solutions" className={className} />
      <span className="font-bold text-base tracking-tight text-white">
        Webyte Solutions
      </span>
    </div>
  );
}


