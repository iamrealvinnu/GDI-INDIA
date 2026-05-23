import React from "react";
import { motion } from "framer-motion";
import { 
  FaLinkedinIn, FaEnvelope, FaCode, FaBrain, 
  FaCogs, FaProjectDiagram, FaChartLine, FaServer, FaUsers
} from "react-icons/fa";

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
    oneLiner: "Global strategist with Oxford training, scaling enterprise ecosystems through mission-critical leadership.",
    tags: ["Oxford Alum", "Operations Expert", "Global Strategy"],
    image: girishImg,
    icon: <FaCogs />
  },
  {
    name: "Mr. Balaji Bheemarajan",
    role: "Operations Manager",
    email: "bbheemraj@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/balaji-bheemarajan-899111129/",
    oneLiner: "Driving lean enterprise efficiency and resource orchestration through ERP and operational excellence.",
    tags: ["ERP Solutions", "Resource Planning", "Execution"],
    image: balajiImg,
    icon: <FaProjectDiagram />
  },
  {
    name: "Ms. Nithya Joghee",
    role: "Project Manager",
    email: "nsandhip@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/nithya-joghee-1b2736198/",
    oneLiner: "Synchronizing complex software lifecycles with surgical precision and data-driven oversight.",
    tags: ["Agile Management", "Data Analytics", "Governance"],
    image: nithyaImg,
    icon: <FaChartLine />
  },
  {
    name: "Mr. Vinay Gupta",
    role: "Principal AI Engineer",
    email: "vgupta@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/guptavinayc/",
    oneLiner: "Engineering intelligent systems where reliability, security, and performance are built into the foundation.",
    tags: ["AI Architect", "Deep Tech", "System Integrity"],
    image: vinayImg,
    icon: <FaBrain />
  },
  {
    name: "Ms. Shanjanaa",
    role: "Technical Lead",
    email: "sbharath@gdinexus.com",
    linkedin: "#", 
    oneLiner: "Ensuring high-velocity engineering meets world-class cloud standards and structural integrity.",
    tags: ["Cloud Engineering", "Full-Stack Lead", "Security"],
    image: shanjanaaImg,
    icon: <FaServer />
  },
  {
    name: "Mr. Krishna Murthy",
    role: "Software Developer",
    email: "kmurthy@gdinexus.com",
    linkedin: "https://www.linkedin.com/in/krishna-murthy-542a24218/",
    oneLiner: "Crafting modern digital interfaces where aesthetic beauty meets complex, high-performance logic.",
    tags: ["UX Architecture", "React Expert", "Interface Design"],
    image: krishnaImg,
    icon: <FaCode />
  }
];

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true, margin: "-50px" }}
    className="group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col items-center text-center"
  >
    <div className="relative w-48 h-48 mb-10 bg-slate-50 rounded-full">
      <div className="absolute inset-0 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img 
          src={member.image} 
          alt={member.name} 
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
        />
      </div>
      <div className="absolute -bottom-2 right-4 w-12 h-12 bg-charcoal text-white rounded-2xl flex items-center justify-center text-xl shadow-xl group-hover:bg-primary transition-colors">
        {member.icon}
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-black text-charcoal mb-2 uppercase tracking-tight leading-tight">{member.name}</h3>
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">{member.role}</p>
      <p className="text-slate-500 text-sm font-medium leading-relaxed italic">"{member.oneLiner}"</p>
    </div>

    <div className="flex flex-wrap justify-center gap-2 mb-10 mt-auto">
      {member.tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-warm-white text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-100 group-hover:border-primary/20 transition-all">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex justify-center gap-4 pt-6 border-t border-slate-50 w-full">
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-warm-white rounded-xl flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all">
        <FaLinkedinIn />
      </a>
      <a href={`mailto:${member.email}`} className="w-10 h-10 bg-warm-white rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
        <FaEnvelope />
      </a>
    </div>
  </motion.div>
);

function Team() {
  return (
    <main className="bg-warm-white min-h-screen text-charcoal font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 bg-white text-center">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="w-16 h-16 mx-auto mb-8 bg-teal-50 rounded-2xl flex items-center justify-center text-primary text-2xl"
          >
            <FaUsers />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-charcoal mb-8 leading-[1.1]"
          >
            The Minds Behind <br />
            <span className="text-primary">The Nexus.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A diverse group of technologists, strategists, and dreamers united by a single mission: to build software that moves the world.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-8 uppercase tracking-tight">Individually Elite. Collectively Unified.</h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-12">
            Our culture is built on radical transparency, engineering discipline, and a shared passion for solving the world's most complex technical challenges. We believe that the best solutions are born from collaborative friction and high-fidelity execution.
          </p>
          <div className="flex justify-center gap-12 flex-wrap">
             <div className="text-center">
                <span className="block text-4xl font-black text-primary mb-2">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Ownership</span>
             </div>
             <div className="text-center">
                <span className="block text-4xl font-black text-secondary mb-2">Zero</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Compromise</span>
             </div>
             <div className="text-center">
                <span className="block text-4xl font-black text-primary mb-2">Elite</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Engineering</span>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Team;