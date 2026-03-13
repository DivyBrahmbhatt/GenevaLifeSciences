import { Layout } from "@/components/Layout";
import { CheckCircle2, Award, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary/5 py-16 lg:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">About Geneva Life Sciences</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to manufacturing excellence and scientific innovation in the medical products industry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-6">Our Story & Mission</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Geneva Life Sciences Private Limited was founded with a singular vision: to bridge the gap between advanced medical research and accessible, high-quality healthcare products. 
              </p>
              <p>
                Operating out of state-of-the-art facilities in India, we have grown our portfolio to over 30 distinct products covering critical therapeutic categories including Cephalosporins, Neuromuscular Blockades, Endocrine System treatments, and specialized Prefilled Syringes.
              </p>
              <p>
                Our mission is to consistently deliver pharmaceutical and medical products that healthcare professionals trust and patients rely on, while maintaining the highest global standards of manufacturing.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/facility.png`} 
              alt="Geneva Life Sciences Manufacturing Facility" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 mb-24 border border-border">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Uncompromising Quality", desc: "Every product undergoes rigorous multi-stage testing to ensure purity, efficacy, and safety." },
              { icon: Zap, title: "Continuous Innovation", desc: "Investing in modern manufacturing techniques, like our specialized prefilled syringe lines." },
              { icon: Heart, title: "Patient-Centric", desc: "Our end goal is always the well-being and health improvement of the patient." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/lab.png`} 
              alt="Quality Control Laboratory" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display font-bold mb-6">Manufacturing Capabilities</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We operate highly controlled, sterile environments that comply with strict international regulatory standards.
            </p>
            <ul className="space-y-4">
              {[
                "Class 100 Cleanrooms for sterile preparations (Ophthalmic & Otic)",
                "Dedicated Cephalosporin manufacturing block",
                "Advanced automated lines for Creams, Lotions, and Ointments",
                "Specialized filling machinery for Prefilled Syringes",
                "In-house comprehensive analytical and microbiological testing laboratories",
                "ISO 9001 and WHO-GMP Certified Operations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
