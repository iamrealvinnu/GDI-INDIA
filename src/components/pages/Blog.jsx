import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaMicrochip,
  FaBrain,
  FaTimes,
  FaClock,
  FaUserShield,
  FaShareAlt,
  FaChevronLeft
} from "react-icons/fa";

// --- DATA SOURCE ---
const blogData = [
  {
    id: "p-001",
    type: "featured",
    date: "OCT 24, 2025",
    readTime: "8 MIN READ",
    tags: ["Agentic AI", "Enterprise Architecture"],
    title:
      "Beyond Stochastic Parrots: Engineering Deterministic AI Agents for FinTech.",
    excerpt:
      "We analyze the failure modes of generative models in high-stakes finance and outline our proprietary framework for ensuring causal reasoning in runtime environments.",
    content: `
<h2>⚙️ The Determinism Gap in Enterprise AI</h2>
<p>
Large Language Models have normalized probabilistic reasoning.
While effective for consumer use cases, this approach introduces
unacceptable risk in regulated financial environments.
</p>

<p>
When decisions impact capital, compliance, and customer trust,
<strong>“mostly correct” becomes a failure condition</strong>.
</p>

<blockquote>
Reliability is not a model feature — it is a system design choice.
</blockquote>

<hr/>

<h2>🧠 From Generation to Governed Intelligence</h2>
<p>
At GDI Nexus, AI systems are treated as decision infrastructure —
not creative engines. Intelligence must operate inside
clearly defined constraints with predictable outcomes.
</p>

<h3>🛡️ The Causal Governor Layer</h3>
<p>
The Causal Governor enforces structured reasoning at runtime.
Every response is mapped to a verified logical path,
eliminating probabilistic shortcuts.
</p>

<ul>
  <li>🔁 <strong>Deterministic Routing</strong><br/>
  Inputs always trigger predefined execution paths.</li>

  <li>🔍 <strong>Causal Auditing</strong><br/>
  Each reasoning step is validated against trusted data.</li>

  <li>🚧 <strong>Runtime Governance</strong><br/>
  Active guardrails prevent hallucination and policy drift.</li>
</ul>

<p>
The outcome is intelligence that is
<strong>auditable, compliant, and production-ready</strong>.
</p>
`,

    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    author: "Vinay Gupta",
    authorRole: "Principal AI Engineer"
  },
  {
    id: "p-002",
    type: "video",
    date: "OCT 18, 2025",
    readTime: "12 MIN WATCH",
    tags: ["Cloud Core", "Azure Migration"],
    title:
      "The Zero-Latency Enterprise—Migrating Legacy Monoliths to Elastic Cloud.",
    excerpt:
      "Watch Girish Girigowda's keynote on de-risking massive infrastructure shifts using the GDI Nexus phased migration protocol.",
    content: `
<h2>☁️ Enterprises Are Living Systems</h2>
<p>
Cloud migration is often framed as an infrastructure upgrade.
In reality, it represents a fundamental shift in how
software is built, scaled, and operated.
</p>

<p>
Modern enterprises demand elasticity across:
</p>

<ul>
  <li>⚡ Compute and performance</li>
  <li>🏗️ Architecture and design</li>
  <li>💰 Cost models and efficiency</li>
  <li>🚀 Operational velocity</li>
</ul>

<hr/>

<h2>📐 The GDI Nexus Migration Model</h2>
<p>
This phased strategy minimizes risk while enabling
continuous progress toward cloud-native systems.
</p>

<ol>
  <li>
    <strong>Decoupling</strong><br/>
    🔗 Separate business logic from legacy constraints
  </li>
  <li>
    <strong>Containerization</strong><br/>
    📦 Enable independent scaling and deployment
  </li>
  <li>
    <strong>Cloud-Native Orchestration</strong><br/>
    ☁️ Reduce operational overhead using Azure services
  </li>
</ol>

<p>
The result is incremental migration with
<strong>maximum stability and long-term resilience</strong>.
</p>
`,

    videoThumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    author: "Girish Girigowda",
    authorRole: "COO"
  },
  {
    id: "p-003",
    type: "featured",
    date: "JAN 23, 2026",
    readTime: "6 MIN READ",
    tags: [
      "Resilient Intelligence",
      "Human + Machine",
      "Digital Transformation"
    ],
    title: "The Rise of Resilient Intelligence in the Digital Age",
    excerpt:
      "In an era of constant disruption, resilient intelligence blends human judgment with machine scale to build systems that adapt, endure, and earn trust under pressure.",
    content: `
<h2>🌍 Navigating a World of Constant Change</h2>
<p>
Digital systems today operate in environments defined by volatility,
uncertainty, and rapid transformation. Intelligence that works only
under ideal conditions is no longer sufficient.
</p>

<p>
Resilient intelligence is the capability to adapt without breaking —
maintaining continuity even when conditions shift unexpectedly.
</p>

<!-- IMAGE 1 -->
<div style="margin:56px 0;">
  <img
    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000"
    alt="Digital resilience and intelligence"
    style="width:50%; border-radius:28px;"
  />
</div>

<hr/>

<h2>🛡️ Why Resilience Matters</h2>
<p>
Traditional intelligence systems optimize for performance under
stable conditions. Resilient systems are designed to perform
<strong>under pressure</strong>.
</p>

<ul>
  <li>
    🔐 <strong>Security First</strong><br/>
    Ensures continuity even during failure or attack.
  </li>
  <li>
    🔄 <strong>Adaptability</strong><br/>
    Systems must pivot without collapsing.
  </li>
  <li>
    🔍 <strong>Trust & Transparency</strong><br/>
    Accountability is as critical as accuracy.
  </li>
</ul>

<!-- IMAGE 2 -->
<div style="margin:56px 0;">
  <img
    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000"
    alt="System reliability and security"
    style="width:50%; border-radius:28px;"
  />
</div>

<hr/>

<blockquote>
The future belongs to those who can balance innovation with responsibility,
speed with safety, and intelligence with integrity.
</blockquote>

<hr/>

<h2>🤝 The Human + Machine Equation</h2>
<p>
Resilient intelligence is not artificial intelligence alone.
It is the fusion of complementary strengths — combining human judgment
with machine-scale execution.
</p>

<ul>
  <li>
    🧠 <strong>Humans</strong><br/>
    Empathy, ethics, judgment, and strategic vision.
  </li>
  <li>
    ⚙️ <strong>Machines</strong><br/>
    Scale, speed, consistency, and data-driven insight.
  </li>
</ul>

<!-- IMAGE 3 -->
<div style="margin:56px 0;">
  <img
    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000"
    alt="Human and machine collaboration"
    style="width:50%; border-radius:28px;"
  />
</div>

<p>
When designed together, human and machine intelligence form systems
that are not only powerful, but dependable — capable of navigating
complexity without losing alignment or trust.
</p>
`
,
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2065&auto=format&fit=crop",
    author: "Nithya Joghee",
    authorRole: "Project Manager"
  },
  {
    id: "p-004",
    type: "featured",
    date: "FEB 02, 2026",
    readTime: "7 MIN READ",
    tags: ["Machine Learning", "NLP", "ML.NET", ".NET Enterprise"],
    title: "Intelligent Text Processing with ML.NET for Enterprise NLP",
    excerpt:
      "ML.NET enables enterprises to build secure, high-performance NLP systems directly within the .NET ecosystem—without external ML stacks.",
    content: `
<h2>🧪 Enterprise NLP Without External Dependencies</h2>
<p>
ML.NET enables production-grade NLP systems entirely
within the .NET ecosystem — eliminating external ML stacks
while preserving control and security.
</p>

<blockquote>
Enterprise intelligence thrives when aligned with engineering discipline.
</blockquote>

<hr/>

<h2>🔧 Pipeline-Driven Intelligence</h2>
<ul>
  <li>📄 Raw text → structured features</li>
  <li>🔢 Strong typing and reproducibility</li>
  <li>🚀 Predictable behavior across environments</li>
</ul>

<h2>📚 Core NLP Capabilities</h2>
<ul>
  <li>✂️ <strong>Text Processing:</strong> Tokenization, normalization, n-grams</li>
  <li>📐 <strong>Feature Engineering:</strong> TF-IDF, embeddings</li>
  <li>🤖 <strong>Model Training:</strong> SDCA, FastTree, LightGBM</li>
  <li>⚡ <strong>Deployment:</strong> Low-latency ASP.NET Core APIs</li>
</ul>

<h2>🧱 Why ML.NET Fits Enterprise NLP</h2>
<ul>
  <li>✅ Native .NET integration</li>
  <li>✅ Secure data boundaries</li>
  <li>✅ CI/CD-friendly lifecycle</li>
  <li>✅ Production-ready governance</li>
</ul>
`,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2065&auto=format&fit=crop",
    author: "Shanjanaa Bharath",
    authorRole: "Technical Lead"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (selectedPost) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedPost]);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* --- HERO SECTION: FIXED SPACING FOR NAVBAR --- */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-black/60 z-10" />
          {/* Space/Earth Background from image_f41dd0.jpg */}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Space BG"
            className="w-full h-full object-cover scale-105 opacity-80"
          />
        </div>

        {/* Added pt-40 to push content down so it's not hidden by the Header */}
        <div className="container mx-auto px-6 relative z-20 text-center pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-6 py-2 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[10px] font-black tracking-[.5em] uppercase">
              Nexus Intelligence Stream
            </span>
            {/* Titles matched to your screenshot styling */}
            <h1 className="text-6xl md:text-5xl font-black text-white tracking-tighter leading-[0.85] mb-6 uppercase italic">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
                THOUGHT.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- NEURAL FEED --- */}
      <section className="py-32 px-6 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden lg:block"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col gap-32">
            {blogData.map((post, index) => (
              <BlogNode
                key={post.id}
                post={post}
                index={index}
                onRead={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- FULLSCREEN PROTOCOL READER --- */}
      <AnimatePresence>
        {selectedPost && (
          <ProtocolReader
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

// --- SUB-COMPONENT: BLOG NODE ---
const BlogNode = ({ post, index, onRead }) => {
  const isEven = index % 2 === 0;
  const isVideo = post.type === "video";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 group-hover:border-[var(--grms-blue)]/20">
          <img
            src={isVideo ? post.videoThumbnail : post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl border border-white/30 group-hover:bg-[var(--grms-blue)] group-hover:scale-110 transition-all cursor-pointer">
                <FaPlay className="ml-1" />
              </div>
            </div>
          )}
        </div>
        <div
          className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--grms-blue)] border-4 border-white z-20 ${isEven ? "-right-[58px]" : "-left-[58px]"}`}
        ></div>
      </div>

      <div
        className={`w-full lg:w-1/2 ${isEven ? "lg:text-left" : "lg:text-right"}`}
      >
        <div
          className={`flex items-center gap-4 mb-6 ${isEven ? "justify-start" : "justify-end"}`}
        >
          <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
            {post.date}
          </span>
          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
          <span className="text-[10px] font-black tracking-widest text-[var(--grms-blue)] uppercase">
            {post.readTime}
          </span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6 uppercase italic tracking-tighter">
          {post.title}
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-10">
          {post.excerpt}
        </p>
        <button
          onClick={onRead}
          className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[var(--grms-blue)] transition-all shadow-lg active:scale-95"
        >
          Read Protocol <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

// --- SUB-COMPONENT: FULLSCREEN READER ---
const ProtocolReader = ({ post, onClose }) => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const container = document.getElementById("protocol-container");
    const updateScroll = () => {
      if (container) {
        const current = container.scrollTop;
        const height = container.scrollHeight - container.clientHeight;
        setCompletion((current / height) * 100);
      }
    };
    if (container) {
      container.addEventListener("scroll", updateScroll);
      return () => container.removeEventListener("scroll", updateScroll);
    }
  }, []);

  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      id="protocol-container"
      className="fixed inset-0 z-[2000] bg-white overflow-y-auto"
    >
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-[var(--grms-blue)] z-[2100] transition-all duration-100 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ width: `${completion}%` }}
      ></div>

      {/* Sticky Reader Header */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-xl px-8 py-5 flex justify-between items-center border-b border-slate-100 z-[2050] shadow-sm">
        <button
          onClick={onClose}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[var(--grms-blue)] transition-colors"
        >
          <FaChevronLeft /> Return to Feed
        </button>
        <div className="flex items-center gap-6">
          <button className="text-slate-400 hover:text-[var(--grms-blue)] transition-colors">
            <FaShareAlt />
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-red-500 transition-all shadow-md"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto max-w-7xl pt-10 pb-32 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* --- MAIN CONTENT COLUMN --- */}
          <div className="lg:w-2/3">
            {/* <span className="text-[11px] font-black text-[var(--grms-blue)] uppercase tracking-[0.4em] mb-4 block">
              {post.tags.join(" // ")}
            </span> */}
            <h1 className="text-2xl md:text-4xl font-black text-slate-950 tracking-tighter uppercase italic leading-[0.9] mb-10">
              {post.title}
            </h1>

            <div className="h-[450px] w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border border-slate-100">
              <img
                src={post.type === "video" ? post.videoThumbnail : post.image}
                className="w-full h-full object-cover"
                alt="Article Header"
              />
            </div>

            {/* Rich Text Body */}
            <div
              className="prose prose-xl max-w-none prose-slate prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:text-slate-950 prose-p:text-slate-600 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-[var(--grms-blue)] prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-r-2xl prose-blockquote:p-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* --- SIDEBAR --- */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-inner">
                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 italic">
                  Engineering Authority
                </h4>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-[var(--grms-blue)] text-xl shadow-lg border border-white/10">
                    <FaBrain />
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-950 leading-none mb-1 uppercase tracking-tighter">
                      {post.author}
                    </p>
                    <p className="text-[10px] font-bold text-[var(--grms-blue)] uppercase tracking-widest">
                      {post.authorRole}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                    <span className="text-slate-400 flex items-center gap-2">
                      <FaClock /> Data Depth
                    </span>
                    <span className="text-slate-900">{post.readTime}</span>
                  </div>
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                    <span className="text-slate-400 flex items-center gap-2">
                      <FaUserShield /> Status
                    </span>
                    <span className="text-green-600">Active Node</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[var(--grms-blue)] rounded-[2rem] text-white shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-transform duration-300">
                <p className="text-lg font-black italic mb-6 tracking-tight leading-tight">
                  Implement this protocol in your enterprise.
                </p>
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-3 bg-white text-[var(--grms-blue)] py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-950 hover:text-white transition-all shadow-lg"
                >
                  Inquire Now <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default Blog;
