import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaCloud,
  FaEye,
  FaFilter,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaUsers,
  FaWarehouse,
  FaGraduationCap,
  FaBrain,
  FaLaptopCode,
  FaCogs,
  FaStar,
  FaBuilding,
  FaGlobe,
  FaAward,
  FaUtensils,
  FaDumbbell,
  FaUserMd
} from "react-icons/fa";
import EmpireStarImg from "../../assets/EmpireStar.png";
import BensStaminaImg from "../../assets/BensStaminaFactory.jpg";
import GDI_Nexus_Logo from "../../assets/grms_logo.png";
import AxxendLogo from "../../assets/axxend_corp_logo.jpeg";
import HospitalLogo from "../../assets/SaiNivasFoundation.jpeg";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// New Operational Excellence Products
// New Operational Excellence Products
const operationalProducts = [
  {
    name: "Talentics ERP",
    category: "operations",
    oneLiner: "Comprehensive ERP",
    description:
      "Enterprise Resource Planning for talent management and operational efficiency with AI-driven insights.",
    icon: <FaUsers />,
    features: ["HR Automation", "Payroll Integration", "Performance Analytics"],
    price: "Seat-based Licensing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "WMS & AMS Pro",
    category: "operations",
    oneLiner: "Advanced Management Suite",
    description:
      "Warehouse and Asset Management System for real-time tracking and logistics optimization.",
    icon: <FaWarehouse />,
    features: [
      "Real-time Tracking",
      "IoT Integration",
      "Predictive Maintenance"
    ],
    price: "Asset-based Pricing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nexus LMS",
    category: "operations",
    oneLiner: "Scalable Learning Platform",
    description:
      "Learning Management System for corporate training and educational excellence with adaptive learning paths.",
    icon: <FaGraduationCap />,
    features: [
      "Adaptive Learning",
      "Certification Tracking",
      "Interactive Content"
    ],
    price: "User-based Subscription",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "SKILLYTICS AI",
    category: "operations",
    oneLiner: "Data-Driven Assessments",
    description:
      "Workforce analytics platform with data-driven skill assessments and competency mapping.",
    icon: <FaBrain />,
    features: ["Skill Gap Analysis", "Career Pathing", "Benchmark Analytics"],
    price: "Analytics Package",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "E-BOX Platform",
    category: "operations",
    oneLiner: "Technical Training Suite",
    description:
      "Engineering training platform designed for the next generation with hands-on virtual labs.",
    icon: <FaLaptopCode />,
    features: ["Virtual Labs", "Code Assessment", "Industry Certifications"],
    price: "Course-based Model",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "OperaFlow Suite",
    category: "operations",
    oneLiner: "Process Automation Core",
    description:
      "End-to-end business process automation with workflow orchestration and compliance tracking.",
    icon: <FaCogs />,
    features: ["Workflow Automation", "Compliance Audit", "Process Mining"],
    price: "Process-based Pricing",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Gym Management System",
    category: "operations",
    oneLiner: "Fitness Intelligence Tracker",
    description:
      "Software suite designed for efficiently managing gyms with advanced tracking.",
    icon: <FaDumbbell />,
    features: [
      "Admin Management",
      "Member Portal",
      "Exercise Tracking",
      "Invoice Creation"
    ],
    price: "Branch-based Licensing",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hotel Management System",
    category: "operations",
    oneLiner: "Empire Menu Zone",
    description:
      "Hotel suite designed for simplifying and streamlining hotel operations.",
    icon: <FaUtensils />,
    features: [
      "Table Booking",
      "Menu Ordering",
      "Admin Management",
      "Email Invoice"
    ],
    price: "Outlet-based Licensing",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Relationship Management System",
    category: "operations",
    oneLiner: "Customer Relationship Suite",
    description:
      "Software system for managing leads, accounts, and ongoing customer interactions.",
    icon: <FaAward />,
    features: [
      "Lead Management",
      "Contact Management",
      "Email Marketing",
      "Task Creation"
    ],
    price: "Process-based Pricing",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  },
  // ✅ ADD THE HOSPITAL MANAGEMENT SYSTEM HERE:
  {
    name: "Hospital Management System",
    category: "operations",
    oneLiner: "Smart Healthcare Suite",
    description:
      "End-to-end hospital management system for handling patients, appointments, prescriptions, and billing with real-time insights.",
    icon: <FaUserMd />, // Make sure FaUserMd is imported at the top!
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "E-Prescriptions",
      "Billing & Invoicing",
      "Doctor Dashboard"
    ],
    price: "Hospital-based Licensing",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  }
];

// Combine all products
const allProducts = [...operationalProducts];

// Customer testimonials data
const testimonials = [
  {
    name: "Sofia Aravind",
    quote:
      "We had an amazing experience working with GDI Nexus on the Ben’s Stamina Factory app. Their team brought our vision to life with a powerful, intuitive, and future-ready application. The level of innovation, technical expertise, and attention to detail was impressive throughout the project. What truly sets them apart is their mindset—they’re not just developers, they’re true digital transformation partners. Seamless collaboration, quick turnaround, and a strong commitment to excellence. We highly recommend GDI Nexus to any business looking to build impactful digital solutions!.would like to thank the entire team Balaji,Nithya,Shanjana,Krishna,Vinay for the exceptional service.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
    product: "Ben's Stamina Factory ",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    quote:
      "WMS & AMS Pro gave us real-time visibility across 12 warehouses. Inventory accuracy is now at 99.8%. The platform has streamlined our operations, reduced manual errors, and improved decision-making across the supply chain. With faster reporting and complete transparency, our teams can focus on growth instead of troubleshooting. It’s been a game-changer for efficiency and customer satisfaction. Additionally, order fulfillment speed has improved significantly, ensuring timely deliveries to clients. The scalability of the system also means we can confidently expand without worrying about operational bottlenecks.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    product: "WMS & AMS Pro",
    rating: 5
  },
  {
    name: "Priya Sharma",
    quote:
      "Nexus LMS scaled our training to 50,000 employees. Completion rates increased by 300% with adaptive paths. The platform has simplified onboarding, ensured compliance across departments, and personalized learning experiences for every role. Managers now have clear insights into progress and skill development, enabling smarter workforce planning. With its intuitive design and powerful analytics, Nexus LMS has become the backbone of our employee growth strategy.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    product: "Nexus LMS",
    rating: 5
  }
];

// Client logos data
const clients = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    name: "Amazon AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    name: "Google Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
  },
  {
    name: "Empire Star",
    logo: EmpireStarImg
  },
  {
    name: "Ben's Stamina Factory",
    logo: BensStaminaImg
  },
  {
    name: "GRMS",
    logo: GDI_Nexus_Logo
  },
  {
    name: "Axxend",
    logo: AxxendLogo
  },
  {
    name: "Sai Nivas Foundation",
    logo: HospitalLogo
  }
];

function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "ALL BUILDS" },
    { id: "ai", label: "AGENTIC AI" },
    { id: "data", label: "DATA SYSTEMS" },
    { id: "cloud", label: "CLOUD CORE" },
    { id: "security", label: "SECURITY" },
    { id: "operations", label: "OPERATIONAL EXCELLENCE" }
  ];

  const filteredProducts = allProducts.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 overflow-hidden">
      {/* --- HERO SECTION: ENHANCED --- */}
      <section className="relative pt-48 pb-24 px-6 text-center overflow-hidden">
        {/* Luxury Ambient Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--grms-blue)]/5 to-indigo-500/5 rounded-full blur-[140px] -top-40 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[var(--grms-blue)]/3 rounded-full blur-[100px] -mr-40 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-6 py-2 mb-8 rounded-full border border-blue-100 bg-white/80 backdrop-blur-md text-[var(--grms-blue)] text-[10px] font-black tracking-[.5em] uppercase shadow-sm">
              Proprietary Neural Assets
            </span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
              ENGINEERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] via-indigo-600 to-purple-600">
                PRODUCT ECOSYSTEM.
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed italic mb-12">
              "Where deterministic AI meets operational excellence in enterprise
              transformation."
            </p>

            {/* Ecosystem Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-slate-200 shadow-lg"
            >
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-black text-slate-700 uppercase tracking-widest">
                <span className="text-[var(--grms-blue)]">
                  {allProducts.length}
                </span>{" "}
                Specialized Products Active
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- CATEGORY NAV: ENHANCED --- */}
      <section className="sticky top-24 z-50 px-6 mb-20">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-2xl p-3 rounded-2xl border border-white shadow-2xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-8 py-4 rounded-full text-[11px] font-black tracking-widest uppercase transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600 text-white shadow-2xl"
                    : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {cat.label}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 border-2 border-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* --- OPERATIONAL EXCELLENCE BANNER --- */}
      {activeTab === "all" || activeTab === "operations" ? (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 mb-20"
        >
          <div className="container mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[4rem] p-12 lg:p-16 border border-white shadow-2xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -ml-32 -mt-32" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--grms-blue)]/5 rounded-full blur-3xl -mr-48 -mb-48" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl text-[var(--grms-blue)] shadow-lg">
                        <FaCogs />
                      </div>
                      <span className="text-[10px] font-black text-[var(--grms-blue)] uppercase tracking-[0.3em]">
                        Product Ecosystem
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-950 tracking-tighter italic">
                      Operational Excellence Suite
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      Specialized, automated products designed to streamline
                      core business operations with deterministic reliability.
                      From talent management to technical training, we engineer
                      the backbone of enterprise efficiency.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="px-4 py-2 bg-white rounded-full border border-slate-200">
                        <span className="text-xs font-black text-slate-700">
                          ERP • WMS • LMS • Analytics • Training
                        </span>
                      </div>
                      <div className="px-4 py-2 bg-[var(--grms-blue)]/10 rounded-full border border-[var(--grms-blue)]/20">
                        <span className="text-xs font-black text-[var(--grms-blue)]">
                          Microsoft Azure Certified
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600 rounded-3xl blur-xl opacity-30" />
                      <div className="relative bg-white p-8 rounded-3xl border border-white shadow-2xl">
                        <h3 className="text-2xl font-black mb-4 text-slate-950">
                          Enterprise Ready
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "SOC2 Compliance",
                            "GDPR Ready",
                            "99.9% Uptime",
                            "24/7 Support"
                          ].map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-3 text-sm font-medium text-slate-600"
                            >
                              <FaCheckCircle className="text-emerald-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ) : null}

      {/* --- PRODUCTS GRID --- */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- CUSTOMER TESTIMONIALS --- */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-[10px] font-black tracking-[.3em] uppercase"
            >
              Customer Success Stories
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-950 tracking-tighter italic">
              Trusted by{" "}
              <span className="text-[var(--grms-blue)]">Industry Leaders</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover how forward-thinking organizations leverage our products
              to drive operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:border-[var(--grms-blue)]/30 transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="text-4xl text-[var(--grms-blue)]/20 mb-6">
                  "
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-lg italic leading-relaxed mb-8">
                  {testimonial.quote}
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                  <div>
                    <h4 className="font-black text-slate-950">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                    <span className="text-xs font-black text-[var(--grms-blue)] uppercase tracking-widest mt-1 block">
                      {testimonial.product}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-slate-100"
          >
            <div className="text-center mb-12">
              <p className="text-md font-black text-slate-400 uppercase tracking-widest mb-4">
                TRUSTED BY GLOBAL ENTERPRISES
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-[var(--grms-blue)]/20 transition-all duration-300"
                >
                  <div className="relative h-20 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-14 w-auto opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-[4rem] p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[var(--grms-blue)] bg-[size:40px_40px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--grms-blue)]/10 rounded-full blur-3xl -mr-48 -mt-48" />

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-white tracking-tighter italic">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join 250+ global enterprises already driving operational
                excellence with our product ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-slate-900 px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] uppercase hover:shadow-2xl transition-all"
                >
                  <span className="flex items-center justify-center gap-3">
                    Book Enterprise Demo{" "}
                    <FaPlay className="text-xs group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-white/30 text-white px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
                >
                  Download Product Catalog
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Enhanced ProductCard Component
function ProductCard({ product, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -15 }}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[var(--grms-blue)]/20 to-indigo-500/20 rounded-[4rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative bg-white border border-slate-100 rounded-[3.5rem] p-10 h-full flex flex-col transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_100px_rgba(0,102,255,0.12)] hover:border-[var(--grms-blue)]/20">
        {/* Category Label with Badge */}
        <div className="absolute top-10 right-10 z-20">
          <div
            className={`px-4 py-2 rounded-full text-[9px] font-black tracking-[0.2em] uppercase shadow-lg ${
              product.category === "operations"
                ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                : "bg-slate-950/10 text-slate-700 backdrop-blur-md"
            }`}
          >
            {product.category === "operations"
              ? "OPERATIONS"
              : product.category.toUpperCase()}
          </div>
        </div>

        {/* Product Visual - Enhanced */}
        <div className="relative h-60 w-full mb-10 rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>

        {/* Identity with Enhanced Icon */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--grms-blue)] rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-14 h-14 bg-slate-50 text-[var(--grms-blue)] rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[var(--grms-blue)] group-hover:text-white transition-all shadow-lg group-hover:shadow-xl z-20">
              {product.icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-black text-slate-950 tracking-tighter uppercase italic leading-none mb-1">
              {product.name}
            </h3>
            <p className="text-[10px] font-black text-[var(--grms-blue)] uppercase tracking-widest">
              {product.oneLiner}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 flex-1">
          {product.description}
        </p>

        {/* Features List - Enhanced */}
        <div className="pt-8 border-t border-slate-50 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-[var(--grms-blue)] rounded-full" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              CORE CAPABILITIES
            </span>
          </div>
          <ul className="space-y-4">
            {product.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-700 group-hover:text-slate-900 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-emerald-500 text-xs" />
                </div>
                <span className="leading-tight">{f}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA - Enhanced */}
        <div className="mt-auto pt-8 border-t border-slate-50 flex items-end justify-between">
          <div className="space-y-2">
            <span className="text-[9px] font-black text-slate-400 block tracking-[0.2em] uppercase">
              Pricing Strategy
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-[var(--grms-blue)]/90 tracking-tighter leading-none">
                {product.price}
              </span>
              {product.category === "operations" && (
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">
                  ENTERPRISE
                </span>
              )}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn bg-slate-950 text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-[var(--grms-blue)] transition-all shadow-lg hover:shadow-xl"
          >
            <Link to="/contact">
              <span className="text-[10px] font-black tracking-widest">
                DEMO
              </span>
            </Link>
            <FaPlay className="text-[8px] group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
