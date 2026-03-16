import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const roles = [
  {
    title: "Become An Agent",
    desc: "Agents have a chance to select from our different products and provide better services to their customers. No working capital needed. Earn more than ₹25,000/month.",
    highlight: "Join over 5,00,000 retailers. Earn more than ₹25,000 per month. No working capital required.",
    categories: ["Kirana Shop", "Restaurant", "Medical Shop", "Fertilizer Shop", "Mobile Recharge Center", "Insurance Agency", "Travel Agency"],
  },
  {
    title: "Become A Distributor",
    desc: "Make more money through distribution services. Earn more than 25% commission by providing your network with our services. No physical effort or big store needed.",
    highlight: "Join over 10,000 distributors. Earn more than ₹50,000 per month.",
    categories: ["Telecom", "Pharma", "Retail", "FMCG"],
  },
  {
    title: "Become A Master Distributor",
    desc: "Set up a huge chain of distribution and agents. No investment for stores or staff needed. Earn 25% commission on overall investment by selling digital products.",
    highlight: "Earn more than ₹1,00,000 per month with us.",
    categories: ["Griha Udyog Members", "Self Help Groups", "Teachers"],
  },
  {
    title: "Become A District Franchise",
    desc: "With ScrizaPay's franchise model, make more than ₹2,00,000/month without spending on stores, godowns or staff. Make use of your contacts and network to earn 25% commission.",
    highlight: "Earn more than ₹2,00,000 per month with us.",
    categories: ["Griha Udyog Members", "Self Help Groups", "Teachers"],
  },
];

const JoinUsSection = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Become A Part Of Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            डिजिटल सदी का <span className="text-gradient-accent">डिजिटल भारत</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We are inviting distributors, retailers, and individuals to be part of our digital solutions that help them earn profits and prestige.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-all ${
                expanded === i ? "border-accent/40 shadow-card-hover" : "border-border/50 shadow-card"
              } bg-card overflow-hidden`}
            >
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold">{role.title}</h3>
                {expanded === i ? (
                  <ChevronUp size={20} className="text-accent" />
                ) : (
                  <ChevronDown size={20} className="text-muted-foreground" />
                )}
              </button>

              {expanded === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-6 pb-6"
                >
                  <p className="text-muted-foreground text-sm mb-4">{role.desc}</p>
                  <div className="bg-gradient-accent rounded-xl p-4 mb-4">
                    <p className="text-accent-foreground text-sm font-semibold">{role.highlight}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {role.categories.map((c) => (
                      <span key={c} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#contact" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition">
                      Apply Online
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.EzeePay_DigitalBharat"
                      className="px-5 py-2 rounded-lg bg-gradient-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition"
                    >
                      Download App
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
