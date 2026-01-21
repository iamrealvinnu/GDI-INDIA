import React from "react";
import { motion } from "framer-motion";
import { FaFileContract, FaGavel, FaExclamationTriangle, FaArrowRight } from "react-icons/fa";

const Terms = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" alt="Legal" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-6 py-2 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[9px] font-black tracking-[.5em] uppercase shadow-lg">
                    Service Infrastructure Agreement
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
                    OPERATIONAL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">TERMS.</span>
                </h1>
            </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-2/3">
                <div className="prose prose-xl prose-slate max-w-none prose-headings:text-slate-950 prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-p:text-slate-600 space-y-12">
                    <p className="text-xl font-bold text-slate-900 mb-12">Revision Cycle: FY 2026 // System Rules</p>
                    
                    <div>
                        <h2>Introduction</h2>
                        <p>Welcome to GDI Nexus. These Terms of Service ("Terms") govern your access to and use of our website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. Please read them carefully.</p>
                    </div>

                    <div>
                        <h2>User Accounts</h2>
                        <p>To access certain features of our Services, you may be required to create an account. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these Terms.</p>
                    </div>

                    <div>
                        <h2>Intellectual Property Rights</h2>
                        <p>All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, and software, are the exclusive property of GDI Nexus and its licensors and are protected by international copyright, trademark, and other intellectual property laws. You are granted a limited license to access and use the Services for your personal, non-commercial use.</p>
                    </div>

                    <div>
                        <h2>User Conduct</h2>
                        <p>You agree not to use the Services for any unlawful purpose or in any way that could harm, disable, overburden, or impair the Services. Prohibited activities include, but are not limited to: attempting to gain unauthorized access to the Services, transmitting any material that contains software viruses, or interfering with any other party's use and enjoyment of the Services.</p>
                    </div>
                    
                    <div>
                        <h2>Disclaimers and Limitation of Liability</h2>
                        <p>The Services are provided "as is" and "as available" without any warranties of any kind, either express or implied. GDI Nexus does not warrant that the Services will be uninterrupted or error-free. In no event will GDI Nexus, its affiliates, or their licensors be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Services.</p>
                    </div>

                    <div>
                        <h2>Termination</h2>
                        <p>We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease.</p>
                    </div>

                    <div>
                        <h2>Governing Law and Dispute Resolution</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions. Any disputes arising from these Terms will be resolved through binding arbitration in accordance with the rules of the designated arbitration association.</p>
                    </div>

                    <div>
                        <h2>Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.</p>
                    </div>

                    <div>
                        <h2>Contact Information</h2>
                        <p>If you have any questions about these Terms, please contact us. You can reach our compliance team via our <a href="/contact">contact page</a> for any legal inquiries or further clarification.</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-8">
                    <div className="p-10 bg-[#020617] rounded-[2.5rem] text-white shadow-2xl">
                        <div className="w-14 h-14 bg-[var(--grms-blue)] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                            <FaExclamationTriangle />
                        </div>
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 leading-tight">Legal Inquiry?</h3>
                        <p className="text-slate-400 text-sm mb-8">For detailed legal audits or enterprise-specific riders, contact our compliance node.</p>
                        <a href="/contact" className="w-full inline-flex items-center justify-center gap-3 bg-white text-slate-950 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[var(--grms-blue)] hover:text-white transition-all">
                            Contact Compliance <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;