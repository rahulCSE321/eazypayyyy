import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutPremium from "@/assets/about-premium.png";
import aboutImage from "@/assets/about-image.jpg";

const premiumStats = [
  { number: "100+", label: "Districts Served", color: "text-blue-500" },
  { number: "2,490+", label: "Super Partners", color: "text-orange-500" },
  { number: "8,382+", label: "Distributors", color: "text-green-500" },
  { number: "5,00,000+", label: "Merchant Outlets", color: "text-accent" },
];

const legacyStats = [
  { number: "100+", label: "District Franchise" },
  { number: "2,490+", label: "Super Distributors" },
  { number: "8,382+", label: "Distributors" },
  { number: "4,00,000+", label: "Merchant Outlets" },
];

const AboutSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <>
      <section ref={targetRef} id="about-premium" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              style={{ opacity, scale }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-premium group">
                <motion.img
                  style={{ y }}
                  src={aboutPremium}
                  alt="Digital Banking in Rural India"
                  className="w-full h-[600px] object-cover rounded-[3rem] scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-morphism rounded-3xl border-white/20">
                  <p className="text-white font-bold italic text-lg leading-relaxed">
                    "Our mission is to bring the power of digital banking to the doorsteps of every Indian village."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-6 block">Legacy of Trust</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-none mb-8">
                Empowering <br />
                The Real <span className="text-gradient-accent">भारत.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                ScrizaPay has emerged as the spine of digital transactions in semi-urban and rural areas.
                We are not just a service provider; we are the enablers of financial independence for lakhs
                of small business owners.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {premiumStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className={`text-3xl md:text-4xl font-black mb-2 ${stat.color}`}>{stat.number}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Know Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
                We Are Here To Make <span className="text-gradient-accent">डिजिटल भारत</span>
              </h2>
              <p className="text-primary-foreground/60 mt-4 text-lg leading-relaxed">
                In this era of digital revolution, ScrizaPay has emerged as a leading service provider for money transfer through AEPS alongside all major banking and utility services. We strive to create digital banking services easy, convenient and accessible in every village and rural area of India.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {legacyStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.number}</div>
                    <div className="text-xs text-primary-foreground/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={aboutImage} alt="Digital Banking in India" className="w-full h-auto object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
