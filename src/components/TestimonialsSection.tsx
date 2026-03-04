import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Startup Founder",
    text: "JK IT Solutions delivered our web platform ahead of schedule. Their attention to detail and proactive communication made the entire process seamless.",
  },
  {
    name: "David K.",
    role: "Operations Manager",
    text: "The Wi-Fi and network setup they did for our office was incredible. Zero downtime since installation and their support has been outstanding.",
  },
  {
    name: "Amina T.",
    role: "Business Owner",
    text: "They built our mobile app exactly to spec. The team truly understood our vision and turned it into a product our customers love.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(({ name, role, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border shadow-card"
          >
            <Quote className="text-primary/30 mb-4" size={32} />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              "{text}"
            </p>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className="fill-primary text-primary"
                />
              ))}
            </div>
            <p className="font-bold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
