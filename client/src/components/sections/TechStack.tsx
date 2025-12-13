import { motion } from "framer-motion";

const technologies = [
  "Solidity", "Rust", "Solana", "Ethereum", "Polygon",
  "React", "Next.js", "Node.js", "Flutter",
  "Kubernetes", "Docker", "AWS", "GCP", "Azure",
  "Python", "TensorFlow", "PyTorch", "OpenAI"
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-background border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold font-heading text-gray-400 uppercase tracking-widest">Powered By</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="text-xl md:text-2xl font-tech text-gray-500 hover:text-white transition-colors cursor-default px-4 py-2 border border-transparent hover:border-white/10 rounded"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
