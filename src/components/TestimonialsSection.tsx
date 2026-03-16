import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Earlier it was hard to manage cash of my galla but ever since I became a ScrizaPay agent, things have changed. The cashflow is amazing and the commissions add up to a handsome income each month.",
    name: "Rajesh",
    location: "Patna",
  },
  {
    text: "Not only has my income increased, but the hassle of depositing money in bank has gone. With AePS and Money Transfer services, around 100-120 customers come to me daily. It has helped me be self-dependent.",
    name: "Vimal Kumar",
    location: "Uttarakhand",
  },
  {
    text: "ScrizaPay has not only helped me revive my passion to help people but being a retailer, I have earned more money than many different jobs. It feels great to be connected with such an amazing organization.",
    name: "Vishnu",
    location: "Bihar",
  },
  {
    text: "ScrizaPay has helped me increase my income and relieved me from so many tensions. My CIBIL score has increased and now I am looking to buy a flat for my family. All thanks to ScrizaPay.",
    name: "Kamal",
    location: "Agra, Uttar Pradesh",
  },
  {
    text: "ScrizaPay has helped me overcome my fear of financial crisis. The best part is that cashflow is seamless and commissions are deposited instantly.",
    name: "Swapnil",
    location: "Madhya Pradesh",
  },
  {
    text: "I have seen days where even basic needs were a luxury. Ever since I connected with ScrizaPay, my income has increased and being a retailer has exposed me to more money making opportunities than ever.",
    name: "Vishal",
    location: "West Bengal",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            What Our <span className="text-gradient-accent">Customers Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-card-hover transition-shadow"
            >
              <Quote size={24} className="text-accent/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
