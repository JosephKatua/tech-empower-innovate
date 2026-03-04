import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";

const stats = [
  { icon: Target, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "80+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-foreground">
            Technology Solutions Built on{" "}
            <span className="text-gradient">Trust & Innovation</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            JK IT Solutions is a forward-thinking IT company dedicated to
            delivering reliable, scalable, and innovative digital and network
            solutions. We partner with individuals, startups, and businesses to
            turn technology challenges into growth opportunities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is simple: empower our clients through smart technology.
            From custom web and mobile applications to enterprise-grade network
            infrastructure, we bring expertise, transparency, and unwavering
            commitment to every project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className="flex items-center gap-5 p-6 rounded-xl bg-card shadow-card border border-border"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg gradient-primary flex items-center justify-center">
                <Icon className="text-primary-foreground" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
