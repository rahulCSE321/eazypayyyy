import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Landmark, Receipt, Plane, Smartphone, Shield, Building2 } from "lucide-react";
import servicesPremium from "@/assets/services-premium.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Landmark, title: "Banking Services", desc: "Cash Withdrawal, Money Transfer & more." },
  { icon: Receipt, title: "Bill Payments", desc: "Pay all utility bills & earn commissions." },
  { icon: Plane, title: "Travel Booking", desc: "Book flights, trains, & hotels instantly." },
  { icon: Smartphone, title: "Recharge & DTH", desc: "Fast recharges for all major providers." },
  { icon: Shield, title: "Insurance", desc: "Health, vehicle, & life insurance plans." },
  { icon: Building2, title: "E-Governance", desc: "GST, ITR, PAN & other govt services." },
];

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and description reveal
      gsap.from(".reveal-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Cards staggered entrance
      gsap.from(".service-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      });

      // Floating image animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
        },
      });

      // Continous floating effect for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Content Left */}
          <div ref={titleRef}>
            <div className="reveal-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Business Overview</span>
            </div>

            <h2 className="reveal-text text-4xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-8">
              Everything you need to <br />
              <span className="text-gradient-accent">Scale your Shop.</span>
            </h2>

            <p className="reveal-text text-xl text-gray-500 font-medium leading-relaxed mb-12 max-w-xl">
              Transform your retail store into a modern digital hub. With ScrizaPay, access a full suite of financial tools designed for the modern entrepreneur.
            </p>

            <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="service-card flex items-start gap-4 group p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-accent/20 transition-shadow transition-colors duration-300"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gradient-accent group-hover:text-white transition-all duration-500">
                    <s.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Right */}
          <div className="relative">
            <div ref={imageRef} className="relative z-10">
              <img
                src={servicesPremium}
                alt="Digital Financial Services Illustration"
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -z-10" />


          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
