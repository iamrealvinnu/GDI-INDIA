import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaArrowRight,
  FaPaperPlane,
  FaInstagram
} from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/gdi-nexus-b44196308/", 
    hover: "hover:bg-[var(--grms-blue)]"
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/gdi_nexus?igsh=MTF4dXl6MjRrendwMg%3D%3D",
    hover: "hover:bg-pink-500"
  },
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/people/Gdi-Nexus/pfbid0ze6CfTdKQU8fsiW2KkevyF9o7Y1SGATYKTmykkmTbWxYdFRWwN9sbpXpDYKbwvnEl/", 
    hover: "hover:bg-indigo-700"
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    companyName: "",
    phoneNumber: "",
    serviceFocusId: "",
    briefing: ""
  });

  /* ---------- SERVICE FOCUS ---------- */
  const [serviceFocusList, setServiceFocusList] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = import.meta.env.VITE_API_BASE_URL;

  /* ---------- GET SERVICE FOCUS ---------- */
  useEffect(() => {
    axios
      .get(`${api}/Contacts/service-focus`)
      .then((res) => setServiceFocusList(res.data))
      .catch((err) => console.error("Service Focus fetch failed:", err));
  }, []);

  /* ---------- INPUT HANDLER ---------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ---------- SUBMIT (POST) ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${api}/Contacts/create-contact`,
        formData,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      console.log("Contact form submitted:", formData);
      toast.success("Transmission Received. Our Nexus team will contact you shortly.");

      // Reset
      setFormData({
        fullName: "",
        emailAddress: "",
        companyName: "",
        phoneNumber: "",
        serviceFocusId: "",
        briefing: ""
      });
    } catch (error) {
      console.error("Contact submit failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 selection:bg-[var(--grms-blue)] selection:text-white overflow-hidden">
      {/* --- HERO: THE TRANSMISSION HUB --- */}
      <section className="relative pt-40 pb-20 px-6">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--grms-blue)]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-100 bg-white/60 backdrop-blur-md text-[var(--grms-blue)] text-[10px] font-black tracking-[.4em] uppercase shadow-sm">
              Global Communication Port
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-10 uppercase italic">
              CONTACT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600">
                THE NEXUS.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT GRID: THE COMMAND CENTER --- */}
      <section className="pb-32 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <div className="bg-white/70 backdrop-blur-2xl p-10 rounded-[3.5rem] shadow-xl">
              <h2 className="text-3xl font-black mb-10 italic uppercase">
                Initiate Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* ROW 1 */}
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Email Address"
                    name="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* ROW 2 */}
                <div className="grid md:grid-cols-2 gap-8">
                  <InputField
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                {/* SERVICE FOCUS */}
                <div className="relative group">
                  <label className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-black tracking-widest uppercase text-slate-400">
                    Service Focus *
                  </label>
                  <select
                    name="serviceFocusId"
                    value={formData.serviceFocusId}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-transparent border-2 border-slate-100 rounded-2xl font-bold text-slate-700 focus:border-blue-600"
                  >
                    <option value="">SELECT CAPABILITY</option>
                    {serviceFocusList.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="relative group">
                  <label className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-black tracking-widest uppercase text-slate-400">
                    Briefing *
                  </label>
                  <textarea
                    name="briefing"
                    rows="5"
                    value={formData.briefing}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-transparent border-2 border-slate-100 rounded-2xl font-bold text-slate-700 focus:border-blue-600"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-6 rounded-2xl font-black text-lg transition-all
                    ${
                      loading
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-[var(--grms-blue)] hover:bg-blue-600 text-white"
                    }`}
                >
                  {loading ? "TRANSMITTING..." : "TRANSMIT DATA"}
                  <FaPaperPlane className="inline ml-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: THE SUPPORT INDEX */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-black mb-8 text-slate-950 italic uppercase tracking-tighter">
                Support Grid
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <ContactCard
                  icon={<FaEnvelope />}
                  title="Digital Mail"
                  detail="contactus@gdinexus.com"
                  sub="www.gdinexus.com"
                  link="mailto:info@gdinexus.com"
                />
                <ContactCard
                  icon={<FaPhone />}
                  title="Secure Line"
                  detail=" +1(703)987-9955"
                />
                {/* <ContactCard
                  icon={<FaMapMarkerAlt />}
                  title="HQ Terminal"
                  detail="33, Thoppan Line, Fingerpost Kandal,Udagamandalam, Nilgiris, Tamil Nadu, India – 643001"
                /> */}
              </div>
            </motion.div>

            {/* SOCIAL CONNECT: THE WHITE-ON-DARK TILES */}
            <div className="bg-[var(--grms-blue)] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--grms-blue)]/20 blur-3xl" />
              <h3 className="text-white text-xl font-black mb-8 uppercase tracking-widest italic">
                Nexus Social Link
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white text-xl transition-all ${social.hover}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Input Component for that clean, custom look
function InputField({ label, name, type, value, onChange, required }) {
  return (
    <div className="relative group">
      <label className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-black text-slate-400 tracking-widest uppercase group-focus-within:text-[var(--grms-blue)] transition-colors">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-6 py-5 bg-transparent border-2 border-slate-100 rounded-2xl focus:border-[var(--grms-blue)] outline-none transition-all font-bold text-slate-700"
        required={required}
      />
    </div>
  );
}

// Reusable Contact Card for the Grid
function ContactCard({ icon, title, detail, sub, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,102,255,0.08)] transition-all group"
    >
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-slate-50 text-[var(--grms-blue)] rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[var(--grms-blue)] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-1 group-hover:text-[var(--grms-blue)] transition-colors">
            {title}
          </h4>
          <p className="text-lg font-black text-slate-900 leading-tight mb-1">
            {detail}
          </p>
          <p className="text-sm font-medium text-slate-400">{sub}</p>
          {link && (
            <a
              href={link}
              className="inline-flex items-center gap-2 text-[var(--grms-blue)] text-xs font-black uppercase mt-3 hover:gap-4 transition-all"
            >
              Establish Connection <FaArrowRight size={10} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
