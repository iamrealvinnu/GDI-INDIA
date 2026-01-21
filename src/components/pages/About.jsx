import React from "react";
import { FaBullseye, FaUsers, FaHandshake, FaRocket, FaLightbulb, FaShieldAlt, FaChartLine, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Scroll Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function About() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION: THE IDENTITY --- */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Ambient Blobs for Luxury Feel */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--grms-blue)]/5 rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse" />
        
        <div className="container mx-auto relative z-10 text-center lg:text-left">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-100 bg-white/60 backdrop-blur-md text-[var(--grms-blue)] text-[10px] font-black tracking-[.4em] uppercase">
              The Genesis of Innovation
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
              ABOUT <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600">GDI NEXUS.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-medium leading-relaxed">
              We are the architects of the <span className="text-slate-950">AI-first era</span>, blending deep data science with elite cloud orchestration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VISION: THE SPLIT PERSPECTIVE --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Mission: Elevated Glass Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-blue-100/50 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] border border-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <div className="w-16 h-16 bg-[var(--grms-blue)] rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-blue-200">
                  <FaBullseye />
                </div>
                <h2 className="text-4xl font-black mb-6 text-slate-950 uppercase italic tracking-tighter">Our Mission</h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  To empower global enterprises with autonomous AI ecosystems. We don't just solve problems; we engineer the structural resilience required for the digital future.
                </p>
              </div>
            </motion.div>

            {/* Vision: Asymmetric Offset Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="lg:mt-24 group relative"
            >
              <div className="absolute -inset-4 bg-indigo-100/50 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-slate-900 p-12 rounded-[3rem] text-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[var(--grms-blue)] text-3xl mb-8">
                  <FaRocket />
                </div>
                <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tighter">Our Vision</h2>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  To be the central nexus where human ingenuity meets generative intelligence, creating a world where technology scales without boundaries.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VALUES: THE SYSTEM CORE --- */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-4">THE CORE VALUES</h2>
            <div className="w-24 h-1.5 bg-[var(--grms-blue)] mx-auto rounded-full" />
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ValueCard 
              icon={<FaUsers />} 
              title="Collaboration" 
              desc="Co-creating value through deep architectural alignment with our partners." 
            />
            <ValueCard 
              icon={<FaHandshake />} 
              title="Integrity" 
              desc="Radical transparency in every model we build and every cloud we scale." 
            />
            <ValueCard 
              icon={<FaLightbulb />} 
              title="Innovation" 
              desc="Relentless pursuit of the 'impossible' through generative research." 
            />
            <ValueCard 
              icon={<FaShieldAlt />} 
              title="Security" 
              desc="Fortifying digital assets with enterprise-grade causal auditing." 
            />
            <ValueCard 
              icon={<FaChartLine />} 
              title="Excellence" 
              desc="Obsessive focus on high-fidelity performance and data accuracy." 
            />
            <ValueCard 
              icon={<FaArrowRight />} 
              title="Agility" 
              desc="Rapid pivoting in the face of evolving technological breakthroughs." 
            />
          </motion.div>
        </div>
      </section>

      {/* --- MICROSOFT PARTNERSHIP: THE SEAL --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[4rem] p-12 lg:p-20 text-center border border-white shadow-2xl overflow-hidden"
          >
            {/* Background decorative square */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rotate-45 -mr-32 -mt-32 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Refined Microsoft Badge */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                  alt="Microsoft" 
                  className="h-10 w-auto" 
                />
                <div className="hidden md:block w-px h-12 bg-slate-300" />
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Certified Solutions Partner</p>
                  <p className="text-2xl font-black text-slate-900 tracking-tight">Digital & App Innovation</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-slate-950">Scalable Azure Infrastructure.</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                As a certified partner, we leverage the elite power of the Microsoft Cloud to deliver 
                secure, innovative, and transformation-ready ecosystems for the modern world.
              </p>
              
              <LinkButton />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Sub-component for Value Cards with hover effects
function ValueCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="group p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] hover:border-[var(--grms-blue)] transition-all duration-500"
    >
      <div className="text-3xl text-[var(--grms-blue)] mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 text-slate-950 uppercase tracking-tighter italic">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function LinkButton() {
  return (
    <a href="/contact" className="inline-flex items-center gap-3 bg-[var(--grms-blue)] text-white px-10 py-5 rounded-full font-black text-sm tracking-[0.2em] uppercase hover:shadow-[0_20px_40px_rgba(0,102,255,0.3)] transition-all active:scale-95">
      Work With Us <FaArrowRight />
    </a>
  );
}

export default About;