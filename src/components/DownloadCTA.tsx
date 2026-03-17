import { motion } from "framer-motion";
import { Download, Sparkles, ShieldCheck, Zap } from "lucide-react";
import appMockup from "@/assets/hero-fintech.png";

const DownloadCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full noise-bg opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 mb-8">
              <Sparkles size={14} className="text-accent animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Available on Play Store</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
              The App for <br />
              <span className="text-gradient-accent italic">Billion</span> dreams.
            </h2>

            <p className="text-xl text-white/50 font-medium mb-12 leading-relaxed max-w-lg">
              Download the ScrizaPay app and transform your shop into a digital bank. Join 5L+ retailers today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              {/* <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.EzeePay_DigitalBharat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-[2.5rem] bg-white text-gray-900 font-black shadow-2xl transition-all text-lg"
              >
                <Download size={24} />
                Download App
              </motion.a> */}

              <div className="flex items-center gap-4 px-6 py-4 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-xs font-bold text-white/80 uppercase tracking-widest leading-none">
                  Encrypted & <br /> Secure
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { label: "Rating", value: "4.8/5", icon: Zap },
                { label: "Downloads", value: "1M+", icon: Download },
                { label: "Reviews", value: "50k+", icon: ShieldCheck },
              ].map((stat, i) => (
                <div key={i} className="text-white/40">
                  <div className="text-xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 transform hover:scale-[1.05] transition-transform duration-700">
              <img src={appMockup} alt="ScrizaPay App Mockup" className="w-full h-auto drop-shadow-[0_50px_100px_rgba(255,59,92,0.2)]" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[150px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
