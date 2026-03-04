import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-12 bg-navy text-sky-light/60">
    <div className="container px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="JK IT Solutions" className="h-8 w-8 rounded" />
            <span className="font-heading font-bold text-primary-foreground">
              JK IT Solutions
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering businesses through smart, reliable, and innovative technology solutions.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Wi-Fi Installation</li>
            <li>Database Solutions</li>
            <li>Network Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-light/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} JK IT Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
