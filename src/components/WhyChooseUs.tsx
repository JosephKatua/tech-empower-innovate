import { motion } from "framer-motion";
import { CheckCircle2, HeadphonesIcon, Settings2, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Expertise & Innovation",
    description:
      "Our team stays ahead of the curve with the latest technologies and industry best practices.",
  },
  {
    icon: Settings2,
    title: "Tailored Solutions",
    description:
      "No one-size-fits-all. Every solution is customized to fit your unique business requirements.",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable Support",
    description:
      "Transparent communication and dependable support throughout and after project delivery.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description:
      "We measure success by your growth. Our track record speaks through our satisfied clients.",
  },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 bg-background">
    <div className="container px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-foreground">
            Your Success Is Our <span className="text-gradient">Priority</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At JK IT Solutions, we don't just deliver projects—we build lasting
            partnerships. Our commitment to quality, transparency, and
            innovation sets us apart in a crowded market.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Icon className="text-primary mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
