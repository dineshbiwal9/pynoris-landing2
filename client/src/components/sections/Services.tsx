import { motion } from "framer-motion";
import { Cpu, Database, Code, Smartphone, Layers, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bgImage from "@assets/generated_images/abstract_blockchain_and_ai_visualization.png";

const services = [
  {
    title: "Blockchain Engineering",
    icon: Database,
    description: "Solidity, Solana, L2/L3 chains, ZK Rollups, DeFi protocols, and DApp development.",
    items: ["Smart Contracts", "Token Engineering", "Custom Chains", "Zero Knowledge"]
  },
  {
    title: "AI Solutions",
    icon: Cpu,
    description: "Generative AI, MCP engineering, Multi-agent systems, and ML pipelines.",
    items: ["GenAI Integration", "Agentic Systems", "ML Pipelines", "Conversational AI"]
  },
  {
    title: "Software Development",
    icon: Code,
    description: "Full-stack engineering, scalable backend systems, and enterprise architectures.",
    items: ["Microservices", "SaaS Development", "API Architecture", "High-Load Systems"]
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android.",
    items: ["Flutter", "React Native", "Native iOS/Android", "App Modernization"]
  },
  {
    title: "Web Development",
    icon: Layers,
    description: "High-performance web applications using modern frameworks and best practices.",
    items: ["React & Next.js", "TypeScript", "Responsive UI/UX", "PWA"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description: "CI/CD pipelines, infrastructure as code, and multi-cloud deployments.",
    items: ["Docker & K8s", "AWS/GCP/Azure", "Terraform", "Auto-scaling"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img src={bgImage} alt="Abstract" className="w-full h-full object-cover mask-image-linear-gradient" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive technology solutions built on 11+ years of engineering excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400 font-tech">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
