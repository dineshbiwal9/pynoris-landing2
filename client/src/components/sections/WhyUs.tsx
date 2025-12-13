import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Deep Engineering Expertise",
  "Architecture-First Thinking",
  "Enterprise-Grade Quality",
  "Long-Term Partner Approach",
  "Transparent Communication",
  "On-Time Delivery",
  "Scalable Solutions",
  "Multi-Tech Capabilities"
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-secondary/20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            Why <span className="text-primary">PYNORIS?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300"
          >
            We don't just write code. We engineer future-proof systems that drive business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-6 bg-card/30 backdrop-blur-sm border border-white/5 rounded-lg hover:bg-card/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white font-heading">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
