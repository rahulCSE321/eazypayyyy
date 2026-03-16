import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: "banking",
    title: "Banking Services",
    heading: "Provide all banking services at one stop",
    desc: "As a ScrizaPay Retailer, you can offer banking services like Cash Withdrawal, Cash Deposit, Money Transfer, Aadhar Pay, Mini Statement, Balance Enquiry, M-ATM, Prepaid Cards, Loans and many more to your customers and earn upto Rs. 50,000. The product is designed to make every retail shop a mini bank.",
  },
  {
    id: "utility",
    title: "Utility & Bill Payments",
    heading: "Pay bills and earn monetary rewards",
    desc: "ScrizaPay wants to help new-age entrepreneurs. When you pay someone's bill—be it electricity, postpaid or anything else—you get a commission. Help customers with their daily needs and earn money on every transaction.",
  },
  {
    id: "insurance",
    title: "Insurance",
    heading: "Insure customers and earn commissions",
    desc: "Less than 5% of India's population is insured. Sell insurance across health, vehicle, life and general policy sectors. For every service you sell as a retailer, there is a fixed commission waiting for you.",
  },
  {
    id: "travel",
    title: "Travel Services",
    heading: "Book tickets and earn quick money",
    desc: "Not just bill payments—take care of people's travelling needs too. Book hotels, flights & trains and get real-time commissions like no other platform. Register now and start earning!",
  },
  {
    id: "egovernance",
    title: "E-Governance",
    heading: "Help with government services & earn",
    desc: "Register GST, file ITR, fill MSME forms for your customers' businesses. Be SMART—Simple Moral Accountable Responsive & Transparent with ScrizaPay. Earn money helping people with government-related services.",
  },
  {
    id: "neobanking",
    title: "Neo Banking",
    heading: "Open accounts & offer banking services",
    desc: "Why bother going to the bank when you can be one yourself? Provide each and every banking service from your end—open bank accounts, apply for credit/debit cards, and more. You become a bank yourself.",
  },
];

const ServicesTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Banking & <span className="text-gradient-accent">Digital Services</span>
          </h2>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === i
                  ? "bg-gradient-accent text-accent-foreground shadow-accent"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{tabs[active].heading}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{tabs[active].desc}</p>
          <div className="flex gap-3">
            <a href="#" className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition">
              Learn More
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.EzeePay_DigitalBharat"
              className="px-6 py-2.5 rounded-lg bg-gradient-accent text-accent-foreground text-sm font-semibold shadow-accent hover:opacity-90 transition"
            >
              Download App
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTabs;
