import React from "react";
import { Link } from "react-router-dom";
import { 
  FaBullseye, 
  FaUsers, 
  FaHandshake, 
  FaRocket, 
  FaLightbulb, 
  FaShieldAlt, 
  FaChartLine, 
  FaArrowRight,
  FaMicrosoft,
  FaAward
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const ValueBlock = ({ title, desc, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 text-primary/5 text-8xl group-hover:text-primary/10 transition-colors">
        {icon}
      </div>
      <div className="text-4xl text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-lg text-slate-500 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
};

function About() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main className="bg-warm-white min-h-screen text-charcoal font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-40 pb-20 px-6 bg-white overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -ml-20 -mt-20" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] -mr-20 -mb-20" />

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 border border-primary/10"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Our Legacy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-huge font-black mb-12"
          >
            Rooted in <span className="text-primary italic">India.</span> <br />
            Scaled <span className="text-primary italic">Globally.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            GDI Nexus was founded with a clear mission: to bridge the gap between world-class engineering talent and global enterprise needs.
          </motion.p>
        </div>
      </section>

      {/* 2. MISSION & VISION: SPLIT STICKY */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-40 p-16 bg-primary text-white rounded-[4rem] shadow-2xl shadow-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 text-white/10 text-[12rem] font-black leading-none">
                V
              </div>
              <h2 className="text-5xl font-black mb-10 uppercase tracking-tighter">Our Vision</h2>
              <p className="text-2xl text-blue-50 leading-relaxed font-medium">
                To be the most trusted technology partner worldwide, known for integrity, innovation, and absolute commitment to excellence. We envision a future where technology empowers every business to reach its full potential.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 bg-white border border-slate-100 rounded-[4rem] shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 text-slate-100 text-[12rem] font-black leading-none">
                M
              </div>
              <h2 className="text-5xl font-black mb-10 uppercase tracking-tighter text-charcoal">Our Mission</h2>
              <p className="text-2xl text-slate-500 leading-relaxed font-medium">
                To deliver high-quality, scalable, and secure software solutions that solve real-world problems. We strive to provide exceptional value through clear communication and engineering discipline.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES: BIG GRID */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <span className="text-xs font-black text-primary uppercase tracking-[0.5em] mb-4 block">Our DNA</span>
            <h2 className="text-mega font-black text-charcoal tracking-tighter">Values That <span className="text-primary italic">Define Us.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueBlock 
              title="Integrity" 
              desc="We believe in radical transparency and honesty in all our dealings. Trust is our most valuable asset." 
              icon={<FaHandshake />} 
              index={0}
            />
            <ValueBlock 
              title="Excellence" 
              desc="We don't settle for 'good enough'. We strive for perfection in engineering and design." 
              icon={<FaChartLine />} 
              index={1}
            />
            <ValueBlock 
              title="Innovation" 
              desc="We constantly explore new technologies to provide our clients with a competitive edge." 
              icon={<FaLightbulb />} 
              index={2}
            />
            <ValueBlock 
              title="Security" 
              desc="Protecting your data and digital assets is our top priority. We build with a security-first mindset." 
              icon={<FaShieldAlt />} 
              index={3}
            />
            <ValueBlock 
              title="Collaboration" 
              desc="We work as an extension of your team, ensuring that your goals are our goals." 
              icon={<FaUsers />} 
              index={4}
            />
            <ValueBlock 
              title="Growth" 
              desc="We are committed to the continuous growth of our people, our clients, and our community." 
              icon={<FaRocket />} 
              index={5}
            />
          </div>
        </div>
      </section>

      {/* 4. PARTNER SECTION: FULL WIDTH IMMERSIVE */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-secondary rounded-[4rem] p-16 md:p-32 text-white flex flex-col lg:grid lg:grid-cols-12 items-center gap-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 lg:col-span-7">
              <div className="flex items-center gap-6 mb-12">
                 <FaMicrosoft className="text-7xl text-blue-500" />
                 <div>
                   <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Certified Partner</p>
                   <p className="text-xl font-bold text-white tracking-tight">Digital & Cloud Innovation</p>
                 </div>
              </div>
              
              <h2 className="text-mega font-black mb-10 uppercase leading-none tracking-tighter">
                Empowered by <br /><span className="text-accent italic">Global Partnerships.</span>
              </h2>
              <p className="text-2xl text-blue-100/70 leading-relaxed font-medium mb-12">
                By leveraging our partnership with Microsoft Azure, we deliver secure, scalable, and world-class infrastructure to our clients globally.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-white text-secondary px-12 py-6 rounded-[2.5rem] font-black text-lg tracking-widest hover:bg-accent hover:text-white transition-all shadow-2xl shadow-white/5"
              >
                START A PROJECT
                <FaArrowRight />
              </Link>
            </div>

            <div className="relative z-10 lg:col-span-5 flex justify-center w-full">
               <div className="grid grid-cols-2 gap-8 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center text-center p-8"
                  >
                    <span className="text-6xl font-black text-accent mb-2">10+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Countries</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 mt-12 flex flex-col items-center justify-center text-center p-8"
                  >
                    <span className="text-6xl font-black text-primary mb-2">50+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Deployments</span>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;