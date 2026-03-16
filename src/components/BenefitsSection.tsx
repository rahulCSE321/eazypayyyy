import { motion } from "framer-motion";
import { DollarSign, Package, Percent, Heart } from "lucide-react";
import benefitsImage from "@/assets/benefits-image.jpg";

const benefits = [
  { icon: DollarSign, title: "Minimum Investment", desc: "Start with minimal one-time investment and zero working capital on a secure platform." },
  { icon: Package, title: "60+ Products & Services", desc: "We offer 60+ services to our agents to serve their customers in the best way possible." },
  { icon: Percent, title: "Commission on Every Transaction", desc: "ScrizaPay offers maximum commission to agents for all service transactions." },
  { icon: Heart, title: "Prestige & Customer Loyalty", desc: "Join a trusted family of 500K+ agents with unmatched trust and loyalty." },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={benefitsImage} alt="Fintech Benefits" className="w-full h-auto object-cover rounded-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Why Join Us?</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-10">
              Benefits Of <span className="text-gradient-accent">Joining Us</span>
            </h2>

            <div className="space-y-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all border border-border/50 hover:border-accent/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <b.icon size={22} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
