import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import holyGrailImg from "@assets/generated_images/futuristic_defi_dashboard_for_holy_grail.png";
import givingPoolImg from "@assets/generated_images/digital_charity_token_concept_for_giving_pool.png";
import counterTenImg from "@assets/generated_images/blockchain_gaming_nft_marketplace_for_counterten.png";
import biozImg from "@assets/generated_images/cyberpunk_on-chain_gaming_for_bioz.png";
import buburuzaImg from "@assets/generated_images/tokenized_event_experience_for_buburuza.png";

const projects = [
  {
    title: "Holy Grail",
    category: "DeFi / Blockchain",
    description: "Advanced smart contract architecture and DeFi mechanics for a revolutionary financial protocol.",
    tech: ["Solidity", "React", "Web3.js"],
    result: "Secured $10M+ TVL",
    image: holyGrailImg
  },
  {
    title: "Giving Pool Token",
    category: "Social Impact / Crypto",
    description: "Complete tokenomics design and smart contract development for a charitable giving platform.",
    tech: ["ERC-20", "Next.js", "Audited"],
    result: "100% Transparent Donations",
    image: givingPoolImg
  },
  {
    title: "CounterTen",
    category: "Blockchain Gaming",
    description: "Complex blockchain gaming logic and NFT integration for a next-gen gaming ecosystem.",
    tech: ["Solana", "Rust", "Unity"],
    result: "50k+ Active Users",
    image: counterTenImg
  },
  {
    title: "BIOZ Game",
    category: "On-Chain Gaming",
    description: "Fully on-chain gaming platform pushing the boundaries of what's possible on Ethereum.",
    tech: ["EVM", "Z-Knowledge", "React"],
    result: "Zero-Latency Gameplay",
    image: biozImg
  },
  {
    title: "Buburuza",
    category: "Tokenized Experience",
    description: "A tokenized experience system connecting physical events with digital assets.",
    tech: ["NFTs", "Mobile App", "QR Tech"],
    result: "Seamless Integration",
    image: buburuzaImg
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-heading mb-4"
            >
              Selected Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Delivering impact through engineering excellence.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary hover:text-white transition-colors font-tech tracking-wider uppercase flex items-center gap-2"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 || index === 3 ? "md:col-span-2" : ""}
            >
              <Card className="bg-card border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group h-full">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  <div className="relative min-h-[200px] md:min-h-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center relative bg-card/50 backdrop-blur-md">
                    <div className="mb-4">
                      <span className="text-accent text-sm font-tech tracking-widest uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <Badge key={i} variant="outline" className="border-white/20 text-gray-300">{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm font-medium text-white">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Outcome: {project.result}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
