import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured online store with payment integration and inventory management.",
  },
  {
    title: "Fleet Management App",
    category: "Mobile Development",
    description: "Cross-platform mobile app for real-time vehicle tracking and logistics.",
  },
  {
    title: "Enterprise Wi-Fi Network",
    category: "Wi-Fi Installation",
    description: "Multi-floor corporate Wi-Fi deployment with seamless roaming and security.",
  },
  {
    title: "Hospital Data System",
    category: "Database Solutions",
    description: "Secure patient records database with automated backup and compliance.",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-muted/50">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Our Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
          Featured Projects
        </h2>
        <p className="text-muted-foreground">
          A selection of projects that showcase our capabilities across web, mobile, and infrastructure.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(({ title, category, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {category}
            </span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View Details <ExternalLink size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
