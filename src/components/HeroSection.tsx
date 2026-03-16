import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import heroSecondary from "@/assets/hero-secondary.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center pt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-accent rounded-full shadow-[0_0_60px_30px_hsl(352_99%_60%/0.1)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-accent">Digital Banking Revolution</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Banking{" "}
              <span className="text-gradient-accent">for the new </span>
              <span className="bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#138808] text-transparent bg-clip-text pb-1 drop-shadow-sm inline-block">भारत</span>
            </h1>

            <p className="text-lg text-primary-foreground/70 max-w-lg mb-8 leading-relaxed">
              Almost all the business verticals throughout the nation are becoming digital.
              Be a part of this digital revolution with ScrizaPay.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.EzeePay_DigitalBharat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-accent text-accent-foreground font-semibold shadow-accent hover:opacity-90 transition-all"
              >
                <Download size={18} />
                Download App
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                Partner Login
                <ArrowRight size={18} />
              </a>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Primary Image */}
            <motion.div
              className="absolute -top-8 right-0 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-2xl z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={heroImage} alt="Digital Banking with ScrizaPay" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              className="absolute -bottom-16 left-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 border-4 border-background"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 30 }}
            >
              <img src={heroSecondary} alt="Rural merchant using terminal" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
