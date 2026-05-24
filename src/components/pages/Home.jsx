import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLightbulb,
  FaCogs,
  FaGlobe,
  FaRocket,
  FaMicrochip
} from "react-icons/fa";
import { motion } from "framer-motion";

const CapabilitySection = ({ index, title, subtitle, desc, icon, bg, textColor, sticky = true }) => {
  return (
    <section 
      className={`${sticky ? "sticky top-0" : "relative"} h-screen w-full flex items-center justify-center px-6 overflow-hidden ${bg} ${textColor}`}
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className={`text-[10rem] font-black absolute -top-32 -left-10 opacity-5 select-none`}>0{index}</span>
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-12 shadow-2xl ${bg === 'bg-white' ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              {icon}
            </div>
            <h2 className="text-huge font-black mb-10 uppercase tracking-tighter leading-none">
              {title} <br /><span className={`${bg === 'bg-white' ? 'text-primary' : 'text-accent'} italic`}>{subtitle}</span>
            </h2>
            <p className={`text-2xl font-medium leading-relaxed max-w-xl ${bg === 'bg-white' ? 'text-slate-500' : 'text-blue-100/60'}`}>
              {desc}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden lg:flex justify-center"
          >
            <div className={`w-[35vw] h-[35vw] rounded-[4rem] border flex items-center justify-center relative overflow-hidden ${bg === 'bg-white' ? 'border-slate-100 bg-warm-white/50' : 'border-white/10 bg-white/5'}`}>
               <div className={`text-[20rem] opacity-5 ${bg === 'bg-white' ? 'text-primary' : 'text-white'}`}>
                 {icon}
               </div>
               {/* Abstract floating circles for MNC vibe */}
               <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
               <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="bg-white text-charcoal font-sans selection:bg-primary selection:text-white">
      
      {/* 1. ELEGANT HERO (AIRY & AUTHORITATIVE) */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
        {/* Soft Radial Gradient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="container mx-auto max-w-7xl text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-warm-white border border-slate-100 rounded-full text-[11px] font-black uppercase tracking-[0.4em] mb-16 shadow-inner text-slate-400"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Global Engineering Standard
          </motion.div>

          <h1 className="text-huge font-black mb-16 tracking-tighter leading-[0.85] text-charcoal">
            Intelligent <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">Software.</span> <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global <span className="italic">Scale.</span></span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto mb-20 font-medium leading-relaxed">
            We architect high-fidelity technical cores for enterprises that demand absolute reliability and seamless growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/services"
              className="px-16 py-8 bg-gradient-to-r from-primary to-secondary text-white rounded-[2rem] font-black text-xs tracking-[0.3em] hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-6 group"
            >
              EXPLORE THE CORE
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Pro-Level Dynamic Isometric Grid (Undeniable 3D Depth) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.08]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ 
              perspective: "1200px", 
              width: "300vw", 
              height: "300vh", 
              transformStyle: "preserve-3d" 
            }}
          >
            <motion.div 
              style={{ 
                rotateX: "65deg", 
                rotateZ: "-45deg", 
                width: "100%", 
                height: "100%",
                backgroundImage: 'linear-gradient(#2563EB 2px, transparent 2px), linear-gradient(90deg, #2563EB 2px, transparent 2px)', 
                backgroundSize: '120px 120px'
              }}
              animate={{ 
                backgroundPositionY: ["0px", "120px"],
                backgroundPositionX: ["0px", "120px"]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (LAYERED VERTICAL REVEAL) */}
      <div className="relative">
        
        <CapabilitySection 
          index={1}
          title="Smart AI"
          subtitle="Architecture."
          desc="Custom intelligence protocols engineered to automate complex enterprise workflows and drive deterministic decision-making at scale."
          icon={<FaMicrochip />}
          bg="bg-secondary"
          textColor="text-white"
        />

        <CapabilitySection 
          index={2}
          title="Cloud"
          subtitle="Globalism."
          desc="Zero-trust infrastructure deployed across global regions, optimized for 99.9% availability and infinite elastic scaling on Azure."
          icon={<FaGlobe />}
          bg="bg-white"
          textColor="text-charcoal"
        />

        <CapabilitySection 
          index={3}
          title="Full-Stack"
          subtitle="Fidelity."
          desc="Robust, maintainable codebases built with rigorous engineering discipline to ensure your digital core evolves with your business goals."
          icon={<FaCogs />}
          bg="bg-secondary"
          textColor="text-white"
        />

        {/* 3. IMPACT SECTION (ELITE DATA STORYTELLING) */}
        <section className="relative z-30 py-60 px-6 bg-white border-t border-slate-100 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-48">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs font-black text-primary uppercase tracking-[0.8em] mb-6 block"
              >
                Operational Intelligence
              </motion.span>
              <h2 className="text-mega font-black text-charcoal tracking-tighter uppercase leading-none">
                The <span className="text-primary italic border-b-[12px] border-primary/5">Nexus</span> Benchmark.
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-32">
              
              {/* 1. Efficiency: The Data Speed Matrix */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-full h-80 mb-16 bg-slate-50 rounded-[3rem] p-10 flex flex-col justify-center gap-8 relative overflow-hidden shadow-inner">
                   <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(90deg, #2563EB 1px, transparent 1px)', backgroundSize: '20px 100%' }} />
                   
                   {/* Legacy Stream */}
                   <div className="relative">
                      <div className="flex justify-between mb-2 px-4">
                         <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Legacy Protocol</span>
                         <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Latent</span>
                      </div>
                      <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="w-1/3 h-full bg-slate-300/50"
                         />
                      </div>
                   </div>

                   {/* Nexus Stream */}
                   <div className="relative">
                      <div className="flex justify-between mb-2 px-4">
                         <span className="text-[8px] font-black text-primary uppercase tracking-widest">Nexus Architecture</span>
                         <span className="text-[8px] font-black text-primary uppercase tracking-widest">Optimal</span>
                      </div>
                      <div className="h-6 bg-primary/5 rounded-full overflow-hidden border border-primary/10 relative">
                         <motion.div 
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                          className="w-1/2 h-full bg-primary shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-end px-4"
                         >
                            <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                         </motion.div>
                      </div>
                      <motion.span 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="absolute -right-4 -top-8 text-4xl font-black text-primary italic"
                      >
                        +40%
                      </motion.span>
                   </div>
                </div>
                <span className="text-[8rem] font-black text-charcoal leading-none mb-4 tracking-tighter">40%</span>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Throughput Velocity</span>
              </div>

              {/* 2. Uptime: The Scanning Node Grid */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-full h-80 mb-16 bg-secondary rounded-[3rem] p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                   <div className="grid grid-cols-10 gap-2 w-full h-full opacity-20">
                      {[...Array(100)].map((_, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0.1 }}
                          whileInView={{ opacity: i === 99 ? 0.1 : 1 }}
                          transition={{ delay: i * 0.01 }}
                          className={`aspect-square rounded-sm ${i === 99 ? 'bg-accent' : 'bg-primary'}`}
                        />
                      ))}
                   </div>
                   {/* Scanning Beam */}
                   <motion.div 
                    initial={{ top: '-10%' }}
                    animate={{ top: '110%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-accent/20 to-transparent pointer-events-none"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                         <div className="text-xs font-black uppercase tracking-[0.5em] mb-2 opacity-50">Active Nodes</div>
                         <div className="text-5xl font-black tracking-tighter">99.9<span className="text-accent animate-pulse">%</span></div>
                      </div>
                   </div>
                </div>
                <span className="text-[8rem] font-black text-secondary leading-none mb-4 tracking-tighter">99.9%</span>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Operational Uptime</span>
              </div>

              {/* 3. Scale: The Exponential Node Growth */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-full h-80 mb-16 bg-warm-white rounded-[3rem] relative overflow-hidden border border-slate-100 shadow-inner flex items-center justify-center">
                   <svg className="w-full h-full p-10" viewBox="0 0 200 200">
                      {/* Central Node */}
                      <circle cx="100" cy="100" r="4" fill="#2563EB" />
                      {/* Radiating Connections */}
                      {[...Array(12)].map((_, i) => (
                        <g key={i}>
                          <motion.line 
                            x1="100" y1="100" 
                            x2={100 + Math.cos(i * 30 * Math.PI / 180) * 80}
                            y2={100 + Math.sin(i * 30 * Math.PI / 180) * 80}
                            stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.1 }}
                          />
                          <motion.circle 
                            cx={100 + Math.cos(i * 30 * Math.PI / 180) * 80}
                            cy={100 + Math.sin(i * 30 * Math.PI / 180) * 80}
                            r="2" fill="#2563EB"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 1.5 + i * 0.05 }}
                          />
                        </g>
                      ))}
                      {/* Secondary connections for 'exponential' look */}
                      <motion.circle 
                        cx="100" cy="100" r="10" 
                        fill="transparent" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.1"
                        animate={{ r: [10, 100], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                   </svg>
                   <div className="absolute top-10 right-10 text-right">
                      <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Scale Factor</div>
                      <div className="text-3xl font-black text-charcoal tracking-tighter italic">10.0x</div>
                   </div>
                </div>
                <span className="text-[8rem] font-black text-primary leading-none mb-4 tracking-tighter italic">10x</span>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Infrastructure Growth</span>
              </div>

            </div>
          </div>
        </section>

        {/* 4. FINAL CTA (OFF-WHITE TRANSITION) */}
        <section className="relative z-30 py-60 px-6 bg-warm-white overflow-hidden text-center border-t border-slate-100">
          {/* Subtle animated background orbs - adjusted for light bg */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-huge font-black text-charcoal mb-12 uppercase leading-none tracking-tighter">
                Architect Your <br /><span className="text-primary italic">Digital Future.</span>
              </h2>
              <p className="text-2xl text-slate-500 mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
                Join the network of world-class enterprises powered by GDI Nexus engineering.
              </p>
              <Link
                to="/contact"
                className="inline-flex px-20 py-10 bg-gradient-to-r from-primary to-secondary text-white rounded-[3rem] font-black text-2xl tracking-widest hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20 group items-center gap-8"
              >
                CONTACT THE FIRM
                <FaArrowRight size={32} className="group-hover:translate-x-4 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;