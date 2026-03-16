import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 123 456 7890",
      description: "Mon-Sat from 9am to 6pm.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "support@scrizapay.com",
      description: "Online support 24/7.",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Netaji Subhash Place, Pitampura",
      description: "New Delhi, India 110034",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6 tracking-wider uppercase">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
              Let's Connect and <br />
              <span className="bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#138808] text-transparent bg-clip-text pb-1 drop-shadow-sm inline-block">Grow</span> Together.
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Have questions or want to partner with us? We're here to help you navigate your digital banking journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                  We're just a <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8">message</span> away.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  Whether you are a merchant looking to expand your services or a partner seeking digital transformation, our team is ready to support you at every step.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-premium transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <div className="text-lg font-semibold text-gray-700 mb-1">{item.details}</div>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Support Channels */}
              <div className="pt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 text-green-700 text-sm font-bold border border-green-100">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live Chat Available
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
                  <Clock size={16} />
                  Avg. Response: 2 hours
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-10 rounded-[2.5rem] bg-white shadow-2xl border border-gray-100 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <MessageSquare className="text-accent" /> Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      placeholder="+91 00000 00000"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="How can we help you today?"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-gradient-accent text-white font-bold text-lg shadow-accent hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                  >
                    <span>Send Message</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Decorative accent behind form */}
              <div className="absolute -top-10 -right-10 w-full h-full bg-accent/5 rounded-[3rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden h-96 relative group shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white"
          >
            {/* Generic placeholder for Map - in production use Google Maps/Mapbox */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4 animate-spin-slow" />
                <div className="text-xl font-bold text-gray-500">Interactive Location Map</div>
                <div className="text-gray-400">Netaji Subhash Place, Delhi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
