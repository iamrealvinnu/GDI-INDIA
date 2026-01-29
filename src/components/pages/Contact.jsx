import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaArrowRight,
  FaPaperPlane
} from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Transmission Received. Our Nexus team will contact you shortly.");
  };

  // 🔥 GET CURRENT LOCATION
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLocationError(null);
      },
      () => {
        setLocationError("Location permission denied");
      }
    );
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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* LEFT: THE INTERACTIVE FORM (Glassmorphism) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7"
            >
              <div className="bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[3.5rem] border border-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                {/* Decorative Internal Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--grms-blue)]/5 rounded-full blur-3xl transition-all group-hover:scale-150" />

                <h2 className="text-3xl font-black mb-10 text-slate-950 uppercase tracking-tight italic">
                  Initiate Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField
                      label="Full Name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField
                      label="Company Name"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative group">
                    <label className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-black text-slate-400 tracking-widest uppercase group-focus-within:text-[var(--grms-blue)] transition-colors">
                      Service Focus
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-transparent border-2 border-slate-100 rounded-2xl focus:border-[var(--grms-blue)] outline-none transition-all appearance-none font-bold text-slate-700"
                    >
                      <option value="">SELECT CAPABILITY</option>
                      {[
                        "AI Systems",
                        "Data Architecture",
                        "Cloud Infrastructure",
                        "Enterprise Audit"
                      ].map((s) => (
                        <option key={s} value={s}>
                          {s.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative group">
                    <label className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-black text-slate-400 tracking-widest uppercase group-focus-within:text-[var(--grms-blue)] transition-colors">
                      Briefing
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Describe your digital challenge..."
                      className="w-full px-6 py-5 bg-transparent border-2 border-slate-100 rounded-2xl focus:border-[var(--grms-blue)] outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full group relative bg-slate-950 text-white py-6 rounded-2xl font-black text-lg overflow-hidden shadow-2xl transition-all hover:-translate-y-1 hover:bg-[var(--grms-blue)]"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-4 tracking-widest">
                      TRANSMIT DATA{" "}
                      <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </span>
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
                    detail="+918056584718 ||  +1(703)987-9955"
                    link="tel:+918056584718"
                  />
                  <ContactCard
                    icon={<FaMapMarkerAlt />}
                    title="HQ Terminal"
                    detail="33, Thoppan Line, Fingerpost Kandal,Udagamandalam, Nilgiris, Tamil Nadu, India – 643001"
                  />
                </div>
              </motion.div>

              {/* SOCIAL CONNECT: THE WHITE-ON-DARK TILES */}
              <div className="bg-slate-950 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--grms-blue)]/20 blur-3xl" />
                <h3 className="text-white text-xl font-black mb-8 uppercase tracking-widest italic">
                  Nexus Social Link
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
                    { icon: <FaTwitter />, color: "hover:bg-sky-500" },
                    { icon: <FaFacebookF />, color: "hover:bg-indigo-700" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      href="#"
                      className={`w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white text-xl transition-all ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION: THE GEOLOCATION --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600 rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative h-[500px] bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl border border-white/50">
              {/* MAP IFRAME */}
              {userLocation ? (
                <iframe
                  title="User Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}&z=15&output=embed`}
                />
              ) : (
                <iframe
                  title="HQ Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=11.41185,76.69502&z=15&output=embed"
                />
              )}

              {/* CENTER MARKER (YOUR EXISTING STYLE) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-[var(--grms-blue)] rounded-full flex items-center justify-center text-white text-3xl animate-bounce shadow-2xl">
                  <FaMapMarkerAlt />
                </div>
              </div>

              {/* LOCATE BUTTON */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                <button
                  onClick={getCurrentLocation}
                  className="px-8 py-4 bg-slate-950 text-white font-black rounded-2xl shadow-xl hover:bg-[var(--grms-blue)] transition-all"
                >
                  📍 Use My Current Location
                </button>
              </div>

              {/* ERROR */}
              {locationError && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl font-bold text-red-500 shadow">
                  {locationError}
                </div>
              )}
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
