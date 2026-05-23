import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHeartbeat, FaUniversity, FaShoppingCart, FaTruck, 
  FaGraduationCap, FaIndustry, FaArrowRight, FaGlobe, FaCogs, FaRocket
} from "react-icons/fa";
import { motion } from "framer-motion";

const industryData = [
  {
    icon: <FaUniversity />,
    title: "Banking & Finance",
    description: "Secure, high-performance financial systems that handle real-time transactions and intelligent risk management.",
    solutions: ["Fraud Detection", "Digital Wallets", "Compliance Tech"],
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description: "Transforming patient care with secure data management and AI-driven diagnostic assistance.",
    solutions: ["Patient Portals", "Diagnostic AI", "Medical ERP"],
    image: "https://images.unsplash.com/photo-1538108197017-c1a966b95efd?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <FaShoppingCart />,
    title: "Retail & E-commerce",
    description: "Personalized shopping experiences and intelligent inventory systems for modern retail.",
    solutions: ["Smart Recommendations", "Omnichannel Ops", "Customer Loyalty"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <FaTruck />,
    title: "Logistics & Supply Chain",
    description: "Streamlined operations with real-time tracking and predictive routing for global supply chains.",
    solutions: ["Route Optimization", "Fleet Tracking", "Demand Planning"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    description: "Industrial automation and smart factory solutions that increase production efficiency and reduce waste.",
    solutions: ["Predictive Maintenance", "Factory IoT", "Quality Automation"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description: "Modernizing the classroom with interactive learning platforms and automated administrative systems.",
    solutions: ["LMS Platforms", "Virtual Classrooms", "Admin Portals"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  }
];

const IndustryCard = ({ industry, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true, margin: "-50px" }}
    className="group relative overflow-hidden rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
  >
    <div className="relative h-64 overflow-hidden bg-slate-50">
      <img 
        src={`${industry.image}&w=800&q=70`} 
        alt={industry.title} 
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary text-2xl shadow-xl">
        {industry.icon}
      </div>
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-3xl font-black text-charcoal mb-4 uppercase tracking-tighter leading-none">{industry.title}</h3>
      <p className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow font-medium">{industry.description}</p>
      <div className="pt-8 border-t border-slate-50">
        <div className="flex flex-wrap gap-3">
          {industry.solutions.map((sol, i) => (
            <span key={i} className="px-4 py-2 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              {sol}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

function Industries() {
  return (
    <main className="bg-warm-white min-h-screen text-charcoal font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative pt-40 pb-32 px-6 bg-white text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -mr-20 -mt-20 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 border border-primary/10"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Global Impact
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-huge font-black mb-12"
          >
            Sectors We <br />
            <span className="text-primary italic">Transform.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Delivering deep domain expertise and custom software architecture for the world's most critical industries.
          </motion.p>
        </div>
      </section>

      {/* 2. INDUSTRIES GRID */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {industryData.map((item, index) => (
              <IndustryCard key={index} industry={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT SECTION: IMMERSIVE */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-secondary rounded-[4rem] p-16 md:p-32 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-mega font-black mb-12 leading-none uppercase tracking-tighter">
                  Driving <span className="text-accent italic">Measurable</span> <br />Results.
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-accent text-3xl border border-white/10 shrink-0">
                      <FaCogs />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl mb-3 uppercase tracking-tight">Efficiency First</h4>
                      <p className="text-blue-100/70 text-lg font-medium leading-relaxed">We've helped clients achieve up to 40% reduction in operational overhead through smart architecture and automation.</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-accent text-3xl border border-white/10 shrink-0">
                      <FaRocket />
                    </div>
                    <div>
                      <h4 className="font-black text-2xl mb-3 uppercase tracking-tight">Accelerated Growth</h4>
                      <p className="text-blue-100/70 text-lg font-medium leading-relaxed">Our scalable technical cores support 10x user growth without compromising absolute performance or stability.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-6 w-full">
                <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 text-center">
                  <span className="block text-5xl font-black text-accent mb-3">99.9%</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">System Uptime</span>
                </div>
                <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 text-center">
                  <span className="block text-5xl font-black text-primary mb-3">10+</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Sectors</span>
                </div>
                <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 text-center col-span-2">
                  <span className="block text-5xl font-black text-white mb-3">GLOBAL</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Infrastructure Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION: IMMERSIVE */}
      <section className="py-40 px-6 text-center bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-16 md:p-32 border border-white/10 shadow-2xl"
          >
            <h2 className="text-mega font-black text-white mb-12 uppercase tracking-tighter">Ready to evolve <br /><span className="text-accent italic">Your Industry?</span></h2>
            <p className="text-2xl text-blue-100/60 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">Connect with our industry-specific engineering directors to discuss your unique technical challenges.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-16 py-8 bg-white text-secondary rounded-[2.5rem] font-black text-xl tracking-widest shadow-2xl hover:bg-accent hover:text-white transition-all"
            >
              CUSTOM AUDIT
              <FaArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

export default Industries;