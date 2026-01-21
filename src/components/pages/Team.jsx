import React from "react";
import { motion } from "framer-motion";
import { 
  FaLinkedinIn, FaEnvelope, FaCode, FaBrain, 
  FaCogs, FaProjectDiagram, FaChartLine, FaServer, FaShieldAlt, FaLink 
} from "react-icons/fa";

// Local Assets
import girishImg from "../../assets/girish.jpeg";
import balajiImg from "../../assets/balaji.jpeg";
import nithyaImg from "../../assets/WhatsApp Image 2026-01-13 at 01.18.31 (1).jpeg";
import vinayImg from "../../assets/vinay_nexus.jpeg";
import shanjanaaImg from "../../assets/WhatsApp Image 2026-01-13 at 01.18.31.jpeg";
import krishnaImg from "../../assets/krishna.jpeg";

const teamMembers = [
  {
    name: "Mr. Girish Girigowda",
    role: "Chief Operating Officer",
    email: "ggirigowda@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/girish-girigowda-199b3113/",
    oneLiner: "Oxford-trained strategist scaling global enterprise ecosystems through mission-critical SDLC leadership",
    tags: ["Oxford Executive MBA", "Global Operations", "Digital Transformation"],
    image: girishImg,
    icon: <FaCogs />
  },
  {
    name: "Mr. Balaji Bheemarajan",
    role: "Operations Manager",
    email: "bbheemraj@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/balaji-bheemarajan-899111129/",
    oneLiner: "Bridging the gap between resource procurement and lean enterprise efficiency through ERP excellence",
    tags: ["ERP Specialist", "Resource Planning", "Operations Management"],
    image: balajiImg,
    icon: <FaProjectDiagram />
  },
  {
    name: "Ms. Nithya Joghee",
    role: "Project Manager",
    email: "nsandhip@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/nithya-joghee-1b2736198/",
    oneLiner: "A data-first orchestrator synchronizing complex AI lifecycles with surgical reporting precision",
    tags: ["Reporting Expert", "Agile Governance", "Data Analytics"],
    image: nithyaImg,
    icon: <FaChartLine />
  },
  {
    name: "Mr. Vinay Gupta",
    role: "Principal AI & Data Science Engineer",
    email: "vgupta@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/guptavinayc/",
    // IMPACTFUL ONE-LINER: Synthesized from your specific "System Thinker" & "Constraints" philosophy
    oneLiner: "Engineering Deterministic Intelligence where reliability is a mathematical constraint, not a hope",
    tags: ["Agentic Architect", "Runtime Governance", "System Thinker"],
    image: vinayImg,
    icon: <FaBrain />,
    isVinay: true 
  },
  {
    name: "Ms. Shanjanaa",
    role: "Technical Lead",
    email: "sbharath@gdinexus.com",
    linkedin: "#", 
    oneLiner: "Guardian of technical integrity, ensuring high-velocity engineering meets production-grade cloud standards",
    tags: ["Systems Engineering", "Cloud Architecture", "Tech Leadership"],
    image: shanjanaaImg,
    icon: <FaServer />
  },
  {
    name: "Mr. Krishna Murthy",
    role: "Software Developer",
    email: "kmurthy@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/krishna-murthy-542a24218/",
    oneLiner: "Crafting the high-performance interface where aesthetic fluid design meets complex functional logic",
    tags: ["Full-Stack Engineer", "React/Node Architect", "UX Design"],
    image: krishnaImg,
    icon: <FaCode />
  }
];

function Team() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 text-center">
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-100 bg-white shadow-sm text-[var(--grms-blue)] text-[10px] font-black tracking-[.4em] uppercase">
              The GDI Nexus Human Infrastructure
            </span>
            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none mb-10 uppercase italic">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600">CORE SIX.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed italic">
              "Individually Elite. Architecturally Unified"
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THE UNIFORM GRID --- */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {teamMembers.map((member, index) => (
              <TeamDossier key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamDossier({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-full"
    >
      {/* Background Numbering */}
      <div className="absolute -top-6 -right-2 text-8xl font-black text-slate-100 transition-colors group-hover:text-[var(--grms-blue)]/10 pointer-events-none select-none z-0">
        0{index + 1}
      </div>

      <div className="relative z-10 bg-white border border-slate-100 rounded-[3.5rem] p-10 h-full flex flex-col items-center text-center transition-all duration-500 transform group-hover:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_100px_rgba(0,102,255,0.12)]">
        
        {/* VINAY'S GHOST WATERMARK (Only for Vinay) */}
        {member.isVinay && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-[3.5rem]">
            <span className="text-[14rem] font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-20 group-hover:translate-y-0 select-none">
              AI
            </span>
          </div>
        )}

        {/* Profile Portal (Fully Colored) */}
        <div className="relative w-52 h-52 mb-10">
          <div className="absolute -inset-3 bg-gradient-to-tr from-[var(--grms-blue)] to-indigo-600 rounded-full opacity-10 group-hover:opacity-100 transition-opacity blur-xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-50">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          {/* Action Icon */}
          <div className="absolute -bottom-2 right-4 w-14 h-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center text-2xl shadow-xl border-2 border-white transform group-hover:bg-[var(--grms-blue)] group-hover:rotate-12 transition-all">
            {member.icon}
          </div>
        </div>

        {/* Identity Details */}
        <div className="mb-8 relative z-10">
          <h3 className="text-3xl font-black text-slate-950 tracking-tighter uppercase italic leading-none mb-3">
            {member.name}
          </h3>
          <div className="inline-block px-4 py-1 bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest rounded-full mb-6 group-hover:bg-blue-50 group-hover:text-[var(--grms-blue)] transition-colors">
            {member.role}
          </div>
          {/* THE IMPACTFUL ONE-LINER */}
          <p className="text-slate-700 font-bold text-sm italic leading-relaxed px-2">
            "{member.oneLiner}"
          </p>
        </div>

        {/* Metadata Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
          {member.tags.map((tag) => (
            <span key={tag} className="text-[8px] font-black border border-slate-200 px-3 py-1.5 rounded-lg text-slate-500 uppercase tracking-tighter group-hover:border-[var(--grms-blue)]/30 group-hover:text-slate-700 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Connectivity Port */}
        <div className="mt-auto pt-6 border-t border-slate-50 w-full flex justify-center gap-6 relative z-10">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group/btn relative w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-[#0077b5] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <FaLinkedinIn className="relative z-10" />
          </a>
          <a href={`mailto:${member.email}`} className="group/btn relative w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-red-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <FaEnvelope className="relative z-10" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Team;