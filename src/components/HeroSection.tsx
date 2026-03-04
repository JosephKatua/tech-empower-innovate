import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-sky-light border border-primary/30">
              Trusted IT Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary-foreground mb-6"
          >
            Smart IT Solutions That{" "}
            <span className="text-gradient">Power Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-sky-light/70 mb-10 max-w-2xl mx-auto"
          >
            We build high-performance websites, mobile apps, and secure network
            solutions that help organizations grow, connect, and operate
            efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Get a Free Quote <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sky-light/50"
          >
            {[
              { icon: Shield, text: "Secure & Reliable" },
              { icon: Zap, text: "Fast Delivery" },
              { icon: Globe, text: "Scalable Solutions" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm">
                <Icon size={18} />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
