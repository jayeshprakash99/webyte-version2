import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
	{
		quote: "Webyte transformed our digital presence. Traffic up 320%, leads up 4x. They just get it.",
		name: "Neel Katoch",
		company: "Founder, Chill In Manali",
		rating: 5,
	},
	{
		quote: "From branding to launch, the team felt like an extension of ours. Pure professionalism.",
		name: "Vibha Pathak",
		company: "CEO, Annadisha",
		rating: 5,
	},
	{
		quote: "Their social campaigns took us viral. We sold out our launch collection in 48 hours.",
		name: "Ankit Bhagat",
		company: "Owner, Bloom Gifting",
		rating: 5,
	},
	{
		quote: "Best agency we've ever worked with. Strategic, fast, and ridiculously creative.",
		name: "Prashant Kumar",
		company: "Director, FW Worldwide",
		rating: 5,
	},
];

export function Testimonials() {
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
		return () => clearInterval(t);
	}, []);

	return (
		<section id="testimonials" className="relative py-28 px-5 bg-surface/30 overflow-hidden">
			<div className="container mx-auto max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-3">
						Testimonials
					</p>
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
						Clients{" "}
						<span className="gradient-text">love</span> working with us
					</h2>
				</motion.div>

				<div className="relative">
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="relative p-8 md:p-12 rounded-3xl bg-surface border border-border text-center"
					>
						<Quote
							className="mx-auto mb-6 gradient-text"
							size={36}
							style={{ color: "var(--brand-orange)" }}
						/>
						<div className="flex justify-center gap-1 mb-6">
							{Array.from({ length: items[idx].rating }).map((_, i) => (
								<Star
									key={i}
									size={18}
									className="fill-current"
									style={{ color: "var(--brand-yellow)" }}
								/>
							))}
						</div>
						<p className="text-xl md:text-2xl font-medium leading-relaxed">
							"{items[idx].quote}"
						</p>
						<div className="mt-8">
							<p className="font-bold">{items[idx].name}</p>
							<p className="text-sm text-muted-foreground">
								{items[idx].company}
							</p>
						</div>
					</motion.div>

					<div className="mt-6 flex items-center justify-center gap-4">
						<button
							onClick={() =>
								setIdx((i) => (i - 1 + items.length) % items.length)
							}
							aria-label="Previous"
							className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center hover:border-[var(--brand-orange)] transition-colors"
						>
							<ChevronLeft size={18} />
						</button>
						<div className="flex gap-2">
							{items.map((_, i) => (
								<button
									key={i}
									onClick={() => setIdx(i)}
									aria-label={`Go to testimonial ${i + 1}`}
									className={`h-2 rounded-full transition-all ${
										i === idx
											? "w-8 gradient-brand"
											: "w-2 bg-border"
									}`}
								/>
							))}
						</div>
						<button
							onClick={() => setIdx((i) => (i + 1) % items.length)}
							aria-label="Next"
							className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center hover:border-[var(--brand-orange)] transition-colors"
						>
							<ChevronRight size={18} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
