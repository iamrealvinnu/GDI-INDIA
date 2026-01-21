import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaEyeSlash, FaDatabase, FaArrowRight } from "react-icons/fa";

const Privacy = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--grms-blue)]/20 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" alt="Security" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-6 py-2 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[9px] font-black tracking-[.5em] uppercase">
                    Information Security Standard
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
                    PRIVACY <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">GOVERNANCE.</span>
                </h1>
            </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Text */}
            <div className="lg:w-2/3">
                <div className="prose prose-xl prose-slate max-w-none prose-headings:text-slate-950 prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-p:text-slate-600 space-y-12">
                    <p className="text-xl font-bold text-slate-900 mb-12">Effective Date: January 13, 2026 // Protocol v1.0</p>
                    
                    <div>
                        <h2>Introduction</h2>
                        <p>GDI Nexus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. By using our Services, you agree to the collection and use of information in accordance with this policy.</p>
                    </div>

                    <div>
                        <h2>Information We Collect</h2>
                        <p>We may collect personal information that you voluntarily provide to us, such as your name, email address, and contact details when you register for an account or contact us. We may also automatically collect certain information about your device and usage of our Services, including your IP address, browser type, and operating system.</p>
                    </div>

                    <div>
                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our Services. This includes personalizing your experience, communicating with you, monitoring the usage of our Services, and detecting and preventing technical issues and fraud.</p>
                    </div>

                    <div>
                        <h2>How We Share Your Information</h2>
                        <p>We do not sell your personal information. We may share your information with third-party service providers to perform services on our behalf, such as hosting, data analysis, and customer service. We may also disclose your information if required by law or in response to valid requests by public authorities.</p>
                    </div>
                    
                    <div>
                        <h2>Data Security</h2>
                        <p>We implement a variety of security measures to maintain the safety of your personal information. We use encryption to protect sensitive information transmitted online, and we also protect your information offline. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
                    </div>

                    <div>
                        <h2>Data Retention</h2>
                        <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
                    </div>

                    <div>
                        <h2>Your Data Protection Rights</h2>
                        <p>Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. Please contact us to exercise these rights. We will respond to your request in accordance with applicable data protection laws.</p>
                    </div>

                    <div>
                        <h2>Children's Privacy</h2>
                        <p>Our Services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
                    </div>

                    <div>
                        <h2>Changes to This Privacy Policy</h2>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                    </div>

                    <div>
                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us. You can reach our data protection officer via our <a href="/contact">contact page</a>.</p>
                    </div>
                </div>
            </div>

            {/* Technical Sidebar */}
            <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-8">
                    <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                        <h4 className="text-[10px] font-black text-[var(--grms-blue)] uppercase tracking-widest mb-6 italic">Compliance Tags</h4>
                        <div className="space-y-4">
                            {[
                                {icon: <FaLock />, label: "End-to-End Encryption"},
                                {icon: <FaEyeSlash />, label: "Zero-Knowledge Storage"},
                                {icon: <FaDatabase />, label: "Regional Data Residency"}
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                    <div className="text-[var(--grms-blue)]">{item.icon}</div>
                                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;