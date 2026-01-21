import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaMicrochip,
  FaCogs
} from "react-icons/fa";
import { motion } from "framer-motion";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- SERVICES DATA ---
const servicesData = [
  {
    icon: <FaRobot />,
    title: "Cognitive AI",
    description:
      "Orchestrating autonomous logic for enterprise-scale intelligence.",
    shadow: "hover:shadow-[0_20px_80px_rgba(59,130,246,0.2)]"
  },
  {
    icon: <FaDatabase />,
    title: "Data Liquidity",
    description: "Refining raw data into a high-velocity strategic asset.",
    shadow: "hover:shadow-[0_20px_80px_rgba(99,102,241,0.2)]"
  },
  {
    icon: <FaCloud />,
    title: "Hybrid Cloud",
    description:
      "Elastic, secure, and invisible infrastructure for global growth.",
    shadow: "hover:shadow-[0_20px_80px_rgba(139,92,246,0.2)]"
  }
];

// --- MAIN HOME COMPONENT ---
function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 selection:bg-[var(--grms-blue)] selection:text-white overflow-hidden relative">
      {/* REMOVED: <NexusAI /> - Now it's in App.js */}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"
          />
          <motion.div
            animate={{ x: [0, -70, 70, 0], y: [0, 100, -100, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-soft-light pointer-events-none"></div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-100 bg-white/60 backdrop-blur-md shadow-sm text-[var(--grms-blue)] text-[10px] font-black tracking-[.4em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--grms-blue)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--grms-blue)]"></span>
              </span>
              Engineered for 2026
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-[ -0.05em] mb-10 text-slate-900 drop-shadow-sm">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600">
                THE NEXUS.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl text-slate-600 max-w-3xl mx-auto mb-14 font-medium leading-relaxed"
          >
            Accelerating digital transformation through elite{" "}
            <span className="text-slate-900 font-bold">AI Orchestration</span>{" "}
            and{" "}
            <span className="text-slate-900 font-bold">
              Cloud Intelligence.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="group relative px-12 py-6 rounded-full font-black text-lg text-white overflow-hidden shadow-[0_20px_50px_rgba(0,102,255,0.3)] hover:shadow-[0_30px_60px_rgba(0,102,255,0.5)] transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                START EVOLUTION <FaArrowRight />
              </span>
            </Link>
            <Link
              to="/services"
              className="px-12 py-6 bg-white/80 backdrop-blur-xl border-2 border-slate-200 text-slate-900 rounded-full font-black text-lg hover:border-[var(--grms-blue)] hover:bg-white transition-all shadow-sm"
            >
              SERVICES
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-32 px-6 relative z-20"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/70 backdrop-blur-[40px] rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative border border-white/40 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-slate-900/[0.03] pointer-events-none select-none leading-none">
              NEXUS
            </div>
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 leading-tight">
                Where Data <br />
                meets <span className="text-[var(--grms-blue)]">Destiny.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
                We provide the structural backbone for companies moving into the
                AI-first era. No fluff. Just high-performance engineering.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: <FaMicrochip />, title: "Neural Hardware" },
                  { icon: <FaCogs />, title: "Scale Ops" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-sm"
                  >
                    <div className="text-3xl text-[var(--grms-blue)]">
                      {item.icon}
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-widest text-slate-950">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-slate-950 font-black text-sm tracking-widest uppercase group p-2"
              >
                Discovery{" "}
                <FaArrowRight className="group-hover:translate-x-2 transition-transform text-[var(--grms-blue)]" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full transform rotate-12 scale-75 animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000"
                alt="Core"
                className="rounded-3xl shadow-2xl relative z-10 border border-white/50"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
          >
            <h2 className="text-5xl font-black tracking-tighter text-slate-950 italic relative z-10">
              OUR VERTICALS
              <div className="absolute -bottom-4 left-0 w-1/2 h-4 bg-blue-200/50 blur-xl -z-10"></div>
            </h2>
            <p className="text-slate-500 font-bold max-w-xs text-right">
              Precision engineered solutions for a digital-first economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {servicesData.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative h-full"
              >
                <div
                  className={`relative h-full p-12 bg-gradient-to-br from-white to-slate-50 border border-white/60 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 ${service.shadow}`}
                >
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--grms-blue)] to-indigo-600 text-white flex items-center justify-center text-4xl mb-10 shadow-lg group-hover:rotate-[10deg] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-slate-950">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-10">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-3 text-[var(--grms-blue)] font-black text-sm uppercase tracking-[.2em] group/link"
                  >
                    Explore{" "}
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-70 pointer-events-none"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto text-center px-6 relative z-10"
        >
          <h2 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter mb-12 leading-none drop-shadow-sm">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] to-indigo-500">
              INTEGRATE?
            </span>
          </h2>
          <div className="flex justify-center gap-6">
            <Link
              to="/contact"
              className="bg-slate-950 text-white px-16 py-7 rounded-full font-black text-2xl hover:bg-[var(--grms-blue)] transition-all shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,102,255,0.4)] hover:-translate-y-1"
            >
              GET STARTED
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;