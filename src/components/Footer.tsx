import logo from "@/assets/nscrizaa.svg";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-32 pb-16 relative overflow-hidden noise-bg">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-4">
            <img
              src={logo}
              alt="ScrizaPay"
              className="h-10 mb-8"
              style={{ mixBlendMode: "multiply" }}
            />
            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10 max-w-sm">
              Your trusted partner for digital banking services across India. Empowering half a million retailers to build their own digital banks.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/20 hover:bg-white hover:shadow-lg transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Products", "Blog", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="text-base text-gray-500 font-medium hover:text-accent flex items-center gap-2 group transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-accent group-hover:scale-150 transition-all" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-8">Our Services</h4>
              <ul className="space-y-4">
                {["Banking Services", "Bill Payments", "Travel Booking", "Insurance", "Neo Banking", "E-Governance"].map((l) => (
                  <li key={l}>
                    <a href="#services" className="text-base text-gray-500 font-medium hover:text-accent flex items-center gap-2 group transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-accent group-hover:scale-150 transition-all" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-8">Contact Us</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="text-sm font-bold text-gray-600">
                    <div className="text-[10px] uppercase text-gray-400 mb-1">Email</div>
                    support@scrizapay.com
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-accent shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="text-sm font-bold text-gray-600">
                    <div className="text-[10px] uppercase text-gray-400 mb-1">Call Us</div>
                    +91 1800-XXX-XXXX
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Strip */}
        {/* <div className="grid md:grid-cols-2 gap-8 p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 mb-20">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-accent shadow-sm">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h5 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-2">Grievance Redressal</h5>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Ms. Deepika Rawat <br />
                statutory.compliance@arthmate.com <br />
                +91 7835009643
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start md:items-end">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-black text-gray-900 shadow-sm">
              <ExternalLink size={16} className="text-accent" />
              NPCI Certified Partner
            </div>
          </div>
        </div> */}

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm font-bold text-gray-400">
            © {new Date().getFullYear()} ScrizaPay. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-all">Privacy Policy</a>
            <a href="#" className="text-sm font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-all">Terms of Service</a>
          </div>
          <div className="text-sm font-bold text-gray-400 italic">
            Trusted by 5,00,000+ Retailers all over India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
