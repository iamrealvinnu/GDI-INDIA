import React from "react";
import { Link } from "react-router-dom";
import { 
  FaBrain, FaChartBar, FaCode, FaCloud, 
  FaPaintBrush, FaBuilding, FaArrowRight, FaCheckCircle, FaMicrosoft
} from "react-icons/fa";
import { motion } from "framer-motion";
import microsoftLogo from "../../assets/Microsoft_logo.svg";

const services = [
  {
    icon: <FaBrain />,
    title: "Smart AI Solutions",
    description: "Intelligent systems that automate routine tasks and analyze complex data to drive faster, data-driven decisions.",
    features: ["Intelligent Chatbots", "Predictive Analytics", "Process Automation"],
    color: "bg-primary",
    textColor: "text-white",
    iconColor: "text-secondary"
  },
  {
    icon: <FaChartBar />,
    title: "Data & Insights",
    description: "Transform raw data into a strategic asset with real-time visibility into your business performance.",
    features: ["Data Warehousing", "Visual Dashboards", "Big Data Strategy"],
    color: "bg-white",
    textColor: "text-charcoal",
    iconColor: "text-primary"
  },
  {
    icon: <FaCode />,
    title: "Custom Software",
    description: "Robust, secure, and scalable software solutions tailored precisely to your enterprise requirements.",
    features: ["Web & Mobile Apps", "API Development", "System Integration"],
    color: "bg-white",
    textColor: "text-charcoal",
    iconColor: "text-primary"
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description: "Secure cloud modernization specialized in Microsoft Azure for 99.9% uptime and global scale.",
    features: ["Cloud Migration", "Managed Services", "Azure Infrastructure"],
    color: "bg-secondary",
    textColor: "text-white",
    iconColor: "text-accent"
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX & Design",
    description: "Digital experiences that combine aesthetic beauty with functional simplicity for maximum engagement.",
    features: ["User Research", "Interface Design", "Prototyping"],
    color: "bg-white",
    textColor: "text-charcoal",
    iconColor: "text-primary"
  },
  {
    icon: <FaBuilding />,
    title: "IT Consulting",
    description: "Strategic technology planning to align your infrastructure with your long-term business goals.",
    features: ["Digital Strategy", "IT Audits", "Resource Planning"],
    color: "bg-white",
    textColor: "text-charcoal",
    iconColor: "text-primary"
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true, margin: "-50px" }}
    className={`p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col group relative overflow-hidden ${service.color} ${service.textColor}`}
  >
    <div className={`text-5xl mb-10 group-hover:scale-110 transition-transform duration-500 ${service.iconColor}`}>
      {service.icon}
    </div>
    <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none">{service.title}</h3>
    <p className={`text-lg mb-10 leading-relaxed font-medium ${service.textColor === 'text-white' ? 'opacity-70' : 'text-slate-500'}`}>
      {service.description}
    </p>
    <div className="mt-auto">
      <ul className="space-y-4">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
            <FaCheckCircle className={service.iconColor} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

function Services() {
  return (
    <main className="bg-warm-white min-h-screen text-charcoal font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative pt-40 pb-32 px-6 bg-white overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 border border-primary/10"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Engineering Excellence
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-huge font-black mb-12"
          >
            Our Technical <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">Capabilities.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            We deliver world-class software solutions with a focus on quality, security, and measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES GRID: BOLD & LARGE */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP CTA: COMPACT IMMERSIVE */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-secondary rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-8 mb-10 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                 <img src={microsoftLogo} alt="Microsoft" className="h-10 md:h-12 w-auto" />
                 <div className="text-left border-l border-white/20 pl-6">
                   <p className="text-[10px] font-black text-accent uppercase tracking-[0.4em] leading-none mb-2">Microsoft Cloud Service Partner</p>
                   <p className="text-xl font-bold text-white tracking-tight uppercase">Digital & App Innovation</p>
                 </div>
              </div>
              
              <h2 className="text-5xl font-black mb-10 uppercase tracking-tighter">
                Scalable Azure <br /><span className="text-accent italic">Infrastructure.</span>
              </h2>
              <p className="text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                As a certified partner, we leverage the elite power of the Microsoft Cloud to deliver secure, innovative, and transformation-ready ecosystems for the modern world.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 px-16 py-8 bg-white text-secondary rounded-[2.5rem] font-black text-xl tracking-widest hover:bg-accent hover:text-white transition-all shadow-2xl shadow-white/10"
              >
                GET A PROPOSAL
                <FaArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Services;