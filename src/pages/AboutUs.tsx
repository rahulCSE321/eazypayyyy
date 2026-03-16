import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Rocket, Award, CheckCircle2, Globe, Heart, Zap, ShieldCheck, MapPin } from "lucide-react";
import aboutHeroBackground from "@/assets/about-hero.png";
import visionMissionImage from "@/assets/vision-mission.png";
import storyImage from "@/assets/about-premium.png";
import impactImage from "@/assets/hero-secondary.png";

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const stats = [
    { label: "Founded", value: "2018", icon: Rocket, color: "text-orange-500" },
    { label: "Districts", value: "100+", icon: MapPin, color: "text-blue-500" },
    { label: "Merchants", value: "5L+", icon: Users, color: "text-green-500" },
    { label: "Partners", value: "10K+", icon: Award, color: "text-accent" },
  ];

  const values = [
    {
      title: "Inclusion",
      description: "Bringing financial services to the unbanked and underbanked populations of rural India.",
      icon: Heart,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge technology to simplify complex banking processes for everyone.",
      icon: Zap,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "Integrity",
      description: "Building trust through transparency, security, and unwavering commitment to our partners.",
      icon: CheckCircle2,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Security",
      description: "Implementing world-class security protocols to protect every single transaction.",
      icon: ShieldCheck,
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white selection:bg-accent/30">
      <Navbar />

      {/* Hero Section with Background Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src={aboutHeroBackground}
            alt="Hero Background"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-black tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              The Heritage of ScrizaPay
            </span> */}
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-10 drop-shadow-2xl">
              Powering the <br />
              <span className="bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#138808] text-transparent bg-clip-text pb-2 inline-block">भारत</span> Potential.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              We are not just a fintech company; we are the bridge to digital independence for rural India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Story & Legacy Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-premium group">
                <img
                  src={storyImage}
                  alt="Rural Merchant"
                  className="w-full h-[650px] object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-10 right-10 p-6 glass-morphism rounded-3xl border-white/20 max-w-xs rotate-3 group-hover:rotate-0 transition-transform">
                  <p className="text-white text-sm font-bold leading-relaxed italic">
                    "ScrizaPay transformed my small shop into a banking hub for my entire village."
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-black tracking-widest uppercase text-accent mb-6 block">Our Heritage</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
                From One Vision To <br />
                <span className="text-gradient-accent">Lakhs of Smiles.</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-500 font-medium leading-relaxed">
                <p>
                  Founded in 2018, ScrizaPay emerged as a response to the stark digital divide in India. We saw a nation racing towards 5G, yet millions remained disconnected from basic banking.
                </p>
                <p>
                  Our journey began with a simple idea: If the people can't reach the bank, the bank must reach the people. By empowering local shopkeepers with our technology, we turned every corner store into a digital fortress.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-16">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-premium transition-all duration-300"
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                    <div className="text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Immersive Section */}
      <section className="py-32 bg-gray-950 relative overflow-hidden ring-1 ring-white/5">
        <div className="absolute inset-0 opacity-20">
          <img src={visionMissionImage} alt="Network Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-950/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-xs font-black tracking-widest uppercase text-accent mb-6 block">Future Ready</span>
              <h2 className="text-4xl md:text-7xl font-black text-white leading-tight mb-10">
                Charting the<br />
                Next 100 <span className="text-gradient-accent">Years.</span>
              </h2>
              <div className="grid gap-6">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Target className="text-accent" /> Our Mission
                  </h3>
                  <p className="text-blue-100/70 text-lg leading-relaxed">
                    To be the most trusted financial infrastructure provider for semi-urban and rural India, enabling digital transformation through accessibility and innovation.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Globe className="text-accent" /> Our Vision
                  </h3>
                  <p className="text-blue-100/70 text-lg leading-relaxed">
                    A nation where every village has native access to global banking standards, where no transaction is too small, and no merchant is left behind.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-6">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all border-b-4 border-b-accent/50"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mb-6`}>
                      <v.icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{v.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Image CTA */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[4rem] overflow-hidden group">
            <img
              src={impactImage}
              alt="Community Impact"
              className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-transparent flex items-center px-12 md:px-24">
              <div className="max-w-2xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-black text-accent-foreground leading-tight mb-8"
                >
                  Join the <br />
                  Digital Movement.
                </motion.h2>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.EzeePay_DigitalBharat"
                    className="px-8 py-4 bg-white text-accent font-black rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    Download App
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 border-2 border-white/50 text-white font-black rounded-2xl hover:bg-white/10 transition-all"
                  >
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
