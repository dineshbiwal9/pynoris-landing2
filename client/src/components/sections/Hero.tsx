import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_dark_blue_tech_background_with_rising_lines.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Futuristic Technology Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-primary/50 rounded-full bg-primary/10 text-primary font-tech text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              Enterprise-Grade Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
          >
            Engineering Intelligent <br />
            <span className="text-primary text-glow">Futures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            PYNORIS is a global technology consulting company delivering high-performance AI, Blockchain, and software solutions for modern enterprises and ambitious startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-lg rounded-none skew-x-[-10deg] border border-accent hover:border-white/50 group transition-all">
              <span className="skew-x-[10deg] flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white h-14 px-8 text-lg rounded-none skew-x-[-10deg] transition-all">
              <span className="skew-x-[10deg] flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Schedule Consultation
              </span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
