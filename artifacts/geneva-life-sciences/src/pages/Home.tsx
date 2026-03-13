import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ArrowRight, ShieldCheck, Microscope, Globe, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Medical abstract background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Trust. Quality. Innovation.</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
              Advancing Healthcare <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Through Innovation
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Geneva Life Sciences Private Limited is a premier manufacturer of over 30 high-quality medical and pharmaceutical products spanning diverse therapeutic categories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground border-2 border-border rounded-full font-bold text-lg hover:bg-muted hover:border-muted-foreground/30 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 text-primary-foreground text-center relative z-10">
          <div>
            <div className="text-4xl font-display font-bold mb-2">30+</div>
            <div className="text-primary-foreground/80 font-medium">Distinct Products</div>
          </div>
          <div>
            <div className="text-4xl font-display font-bold mb-2">15+</div>
            <div className="text-primary-foreground/80 font-medium">Therapeutic Categories</div>
          </div>
          <div>
            <div className="text-4xl font-display font-bold mb-2">ISO</div>
            <div className="text-primary-foreground/80 font-medium">Certified Facilities</div>
          </div>
          <div>
            <div className="text-4xl font-display font-bold mb-2">GMP</div>
            <div className="text-primary-foreground/80 font-medium">Manufacturing Standard</div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">We cover a broad spectrum of medical and pharmaceutical needs with precision-engineered products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prefilled Syringes",
                desc: "High-precision delivery systems ensuring exact dosages, safety, and convenience.",
                icon: Activity,
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                title: "Ophthalmic & Otic",
                desc: "Sterile eye and ear preparations manufactured under the strictest clean-room standards.",
                icon: Microscope,
                color: "text-teal-500",
                bg: "bg-teal-500/10"
              },
              {
                title: "Ointments & Creams",
                desc: "Therapeutic topical applications for dermatological and musculoskeletal disorders.",
                icon: Globe,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.desc}</p>
                <Link href="/categories" className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Category <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/categories" 
              className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground font-semibold rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
