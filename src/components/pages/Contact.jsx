import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowRight,
  FaPaperPlane,
  FaInstagram,
  FaChevronDown,
  FaCheckCircle,
  FaQuestionCircle
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

// --- DATA ---
const socialLinks = [
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/gdi-nexus-b44196308/", label: "LinkedIn" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/gdi_nexus?igsh=MTF4dXl6MjRrendwMg%3D%3D", label: "Instagram" },
  { icon: <FaFacebookF />, url: "https://www.facebook.com/people/Gdi-Nexus/pfbid0ze6CfTdKQU8fsiW2KkevyF9o7Y1SGATYKTmykkmTbWxYdFRWwN9sbpXpDYKbwvnEl/", label: "Facebook" }
];

const faqData = [
  {
    question: "What is the typical project timeline?",
    answer: "Project timelines vary based on complexity. A standard MVP typically takes 8-12 weeks, while enterprise-scale migrations can span 6-12 months. We provide detailed milestones during our initial briefing."
  },
  {
    question: "Do you offer post-deployment support?",
    answer: "Yes, we provide comprehensive Maintenance and Evolution (M&E) packages. This includes 24/7 technical monitoring, security patches, and periodic feature updates."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We have deep expertise in Banking & Finance, Healthcare, Logistics, and High-Volume E-commerce. Our technical core is designed to be industry-agnostic but sector-specific in its implementation."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is baked into our engineering DNA. we utilize Zero-Trust architecture, end-to-end encryption, and conduct regular penetration testing on all built solutions."
  }
];

const InputField = ({ label, name, type = "text", value, onChange, required, placeholder }) => (
  <div className="flex flex-col gap-3">
    <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-8 py-5 bg-warm-white border border-slate-100 rounded-[2rem] focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold text-charcoal placeholder:text-slate-300"
      placeholder={placeholder}
    />
  </div>
);

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-black text-charcoal uppercase tracking-tight group-hover:text-primary transition-colors">{faq.question}</span>
        <div className={`w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center transition-all ${isOpen ? 'rotate-180 bg-primary text-white' : 'text-slate-400'}`}>
          <FaChevronDown />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-slate-500 font-medium leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    companyName: "",
    phoneNumber: "",
    serviceFocusId: "",
    briefing: ""
  });

  const [serviceFocusList, setServiceFocusList] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${api}/Contacts/service-focus`)
      .then((res) => setServiceFocusList(res.data))
      .catch((err) => {
        console.error("Service Focus fetch failed:", err);
        setServiceFocusList([
          { id: 1, name: "AI & Automation" },
          { id: 2, name: "Cloud & Infrastructure" },
          { id: 3, name: "Software Development" },
          { id: 4, name: "IT Strategy" }
        ]);
      });
  }, [api]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${api}/Contacts/create-contact`, formData, {
        headers: { "Content-Type": "application/json" }
      });
      toast.success("Message received! Our team will contact you shortly.");
      setFormData({ fullName: "", emailAddress: "", companyName: "", phoneNumber: "", serviceFocusId: "", briefing: "" });
    } catch (error) {
      console.error("Contact submit failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-warm-white min-h-screen text-charcoal font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative pt-40 pb-16 px-6 text-center bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -ml-20 -mt-20 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 border border-primary/10"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Direct Access
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-huge font-black mb-12"
          >
            Start a <br />
            <span className="text-primary italic">Conversation.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Our engineering and strategy experts are ready to help you navigate your digital transformation journey.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            
            {/* FORM SIDE */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-sm"
            >
              <div className="mb-16">
                <h2 className="text-4xl font-black text-charcoal mb-4 uppercase tracking-tighter">Project Briefing</h2>
                <p className="text-xl text-slate-500 font-medium">Fill out the details below and we'll reach out within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="John Doe" />
                  <InputField label="Email Address" name="emailAddress" type="email" value={formData.emailAddress} onChange={handleChange} required placeholder="john@company.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <InputField label="Company" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" />
                  <InputField label="Phone" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+91 00000 00000" />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">
                    Interested Service <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="serviceFocusId"
                      value={formData.serviceFocusId}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-5 bg-warm-white border border-slate-100 rounded-[2rem] focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold text-charcoal appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service focus</option>
                      {serviceFocusList.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </select>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                      <FaChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase ml-2">
                    Requirements <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="briefing"
                    rows="5"
                    value={formData.briefing}
                    onChange={handleChange}
                    required
                    placeholder="Describe your technical core needs or business goals..."
                    className="w-full px-8 py-5 bg-warm-white border border-slate-100 rounded-[2rem] focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold text-charcoal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-8 rounded-[2rem] font-black text-lg tracking-widest transition-all uppercase flex items-center justify-center gap-4
                    ${loading ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-primary text-white hover:bg-secondary shadow-2xl shadow-primary/20"}`}
                >
                  {loading ? "Transmitting..." : "Send Briefing"}
                  {!loading && <FaPaperPlane />}
                </button>
              </form>
            </motion.div>

            {/* INFO SIDE */}
            <div className="lg:col-span-5 space-y-12">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary text-white p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -mr-32 -mt-32" />
                
                <h3 className="text-3xl font-black mb-16 relative z-10 uppercase tracking-tighter">The Bridge</h3>

                <div className="space-y-12 relative z-10">
                  <div className="flex items-start gap-8">
                    <div className="text-accent text-3xl mt-2">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Email Us</p>
                      <a href="mailto:contactus@gdinexus.com" className="text-2xl font-black hover:text-accent transition-colors leading-none">
                        contactus@gdinexus.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="text-accent text-3xl mt-2">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Call Us</p>
                      <p className="text-2xl font-black leading-none">
                        +91 7483648727
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="text-accent text-3xl mt-2">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Location</p>
                      <p className="text-2xl font-black leading-tight uppercase tracking-tight">
                        Nilgiris, <br />Tamil Nadu <br />
                        <span className="text-xs font-black text-slate-400 tracking-[0.2em] mt-2 block">33, Thoppan Line, Fingerpost Kandal, Udagamandalam, 643001</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Socials */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm"
              >
                <h3 className="text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.4em]">Connect</h3>
                <div className="flex gap-6">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 rounded-[2rem] bg-warm-white text-primary flex items-center justify-center text-3xl hover:bg-primary hover:text-white transition-all duration-500 shadow-inner"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Why Contact Us? */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-12 bg-primary/5 rounded-[4rem] border border-primary/5"
              >
                <h4 className="text-xl font-black text-secondary mb-8 uppercase tracking-tight">Why Nexus?</h4>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-lg text-slate-600 font-black uppercase tracking-tight">
                    <FaCheckCircle className="text-primary text-xl" /> Expert Engineering
                  </li>
                  <li className="flex items-center gap-4 text-lg text-slate-600 font-black uppercase tracking-tight">
                    <FaCheckCircle className="text-primary text-xl" /> Radical Transparency
                  </li>
                  <li className="flex items-center gap-4 text-lg text-slate-600 font-black uppercase tracking-tight">
                    <FaCheckCircle className="text-primary text-xl" /> Secure Scalability
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION: ADDING DEPTH */}
      <section className="py-40 px-6 bg-white border-t border-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <div className="sticky top-40">
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center text-3xl mb-8">
                  <FaQuestionCircle />
                </div>
                <h2 className="text-mega font-black text-charcoal uppercase tracking-tighter leading-none mb-8">
                  Common <br /><span className="text-primary italic">Inquiries.</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Explore our technical briefing protocols and project lifecycle standards.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="divide-y divide-slate-100">
                {faqData.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;