import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Wifi,
  Database,
  Network,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications that are responsive, fast, and SEO-optimized. From business sites to e-commerce platforms.",
    features: ["Custom Web Apps", "E-commerce", "SEO Optimized"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android and cross-platform mobile apps that are scalable, secure, and user-friendly. End-to-end from idea to deployment.",
    features: ["Android & Cross-platform", "Scalable", "User-friendly"],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Installation",
    description:
      "Reliable home and enterprise Wi-Fi setups with network optimization, coverage planning, and high-performance wireless solutions.",
    features: ["Enterprise Setup", "Coverage Planning", "High Performance"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Database design, implementation, and optimization. Data security, backup, recovery, and performance tuning for your business.",
    features: ["Design & Setup", "Security", "Performance Tuning"],
  },
  {
    icon: Network,
    title: "Network Solutions",
    description:
      "Complete network design, setup, and maintenance. LAN/WAN configuration and secure, scalable infrastructure for businesses.",
    features: ["LAN/WAN Config", "Troubleshooting", "Scalable Infra"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-muted/50">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          What We Do
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
          Comprehensive IT Services
        </h2>
        <p className="text-muted-foreground">
          From digital to physical infrastructure, we deliver end-to-end
          technology solutions tailored to your needs.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, description, features }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="text-primary-foreground" size={26} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
