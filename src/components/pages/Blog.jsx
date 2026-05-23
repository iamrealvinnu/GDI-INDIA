import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaChevronLeft,
  FaShareAlt,
  FaCalendarAlt,
  FaClock
} from "react-icons/fa";

// --- DATA ---
const blogData = [
  {
    id: "p-001",
    type: "featured",
    date: "OCT 24, 2025",
    readTime: "8 MIN READ",
    tags: ["Digital Transformation", "Business Strategy"],
    title: "The Future of Enterprise Software: Scaling with Trust.",
    excerpt: "In an era of rapid technological change, building resilient software systems requires more than just code—it requires a foundation of trust and engineering discipline.",
    content: `
      <h2>The Shift to Resilient Architecture</h2>
      <p>Modern enterprises are no longer just looking for software; they are looking for resilience. As global markets become more volatile, the ability for a system to adapt without breaking is the ultimate competitive advantage.</p>
      <p>At GDI Nexus, we approach every project with a "Security-First" and "Scale-Ready" mindset. We believe that technology should empower human ingenuity, not replace it.</p>
      <blockquote>Integrity is not just a value; it's a design requirement.</blockquote>
      <hr/>
      <h2>Building for the Next Billion Users</h2>
      <p>Scaling a system from one thousand to one billion users requires a fundamental shift in how we think about data and infrastructure. It's not just about adding more servers; it's about architecting for concurrency and global distribution.</p>
    `,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    author: "Vinay Gupta",
    authorRole: "Principal AI & Data Science Engineer"
  },
  {
    id: "p-002",
    type: "standard",
    date: "JAN 12, 2026",
    readTime: "5 MIN READ",
    tags: ["AI & Innovation", "Data Science"],
    title: "AI That Understands Your Business Context.",
    excerpt: "Generic AI models are useful, but business-specific intelligence is revolutionary. Learn how custom-tuned models drive real ROI.",
    content: `
      <h2>Moving Beyond Generic Models</h2>
      <p>While general-purpose AI has captured the world's imagination, its utility in a corporate setting is often limited by a lack of context. A model that doesn't understand your industry's specific regulations, terminology, and customer needs can often do more harm than good.</p>
    `,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    author: "Nithya Joghee",
    authorRole: "Project Manager"
  },
  {
    id: "p-003",
    type: "standard",
    date: "FEB 05, 2026",
    readTime: "6 MIN READ",
    tags: ["Cloud Security", "Enterprise IT"],
    title: "Zero-Trust Architecture in the Modern Cloud.",
    excerpt: "Protecting your digital assets requires a shift from perimeter security to a zero-trust model. Here is how we implement it.",
    content: `
      <h2>The Death of the Perimeter</h2>
      <p>In a world of remote work and cloud-native apps, the old idea of a "secure perimeter" is dead. Attackers are increasingly targeting identity rather than just firewalls.</p>
    `,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    author: "Girish Girigowda",
    authorRole: "COO"
  }
];

const BlogCard = ({ post, onRead }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    onClick={onRead}
    className="group cursor-pointer bg-white rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full"
  >
    <div className="relative h-72 overflow-hidden bg-slate-50">
      <img 
        src={`${post.image}&w=800&q=70`} 
        alt={post.title} 
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute top-8 left-8 flex gap-2">
        {post.tags.map((tag, i) => (
          <span key={i} className="px-4 py-2 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <div className="flex items-center gap-6 mb-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
        <span className="flex items-center gap-2"><FaCalendarAlt /> {post.date}</span>
        <span className="flex items-center gap-2"><FaClock /> {post.readTime}</span>
      </div>
      <h3 className="text-3xl font-black text-charcoal mb-6 uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-slate-500 text-lg leading-relaxed mb-10 line-clamp-3 font-medium">{post.excerpt}</p>
      <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary text-sm">
            <FaBrain />
          </div>
          <div>
            <p className="text-sm font-black text-charcoal uppercase tracking-tight">{post.author}</p>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{post.authorRole}</p>
          </div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
          <FaArrowRight size={14} />
        </div>
      </div>
    </div>
  </motion.div>
);

const ArticleModal = ({ post, onClose }) => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      onClick={onClose}
      className="absolute inset-0 bg-secondary/95 backdrop-blur-xl"
    />
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 50 }}
      className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col"
    >
      <div className="absolute top-8 right-8 z-50">
        <button onClick={onClose} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all shadow-xl">
          <FaChevronLeft className="rotate-180" size={20} />
        </button>
      </div>

      <div className="overflow-y-auto p-12 md:p-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-10 text-xs font-black text-primary uppercase tracking-[0.4em]">
            <span>{post.date}</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-12 leading-none uppercase tracking-tighter">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 mb-16 p-8 bg-warm-white rounded-[2.5rem] border border-slate-100">
             <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">
               <FaBrain />
             </div>
             <div>
                <p className="font-black text-charcoal text-2xl uppercase tracking-tight">{post.author}</p>
                <p className="text-xs text-slate-500 font-black uppercase tracking-[0.2em]">{post.authorRole}</p>
             </div>
             <button className="ml-auto w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary border border-slate-100 transition-all shadow-sm">
                <FaShareAlt size={16} />
             </button>
          </div>

          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-20 shadow-2xl bg-slate-50">
            <img src={`${post.image}&w=1200&q=80`} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose-custom max-w-none">
            <div
              className="
                [&_h2]:text-4xl [&_h2]:font-black [&_h2]:text-charcoal [&_h2]:mt-20 [&_h2]:mb-10 [&_h2]:uppercase [&_h2]:tracking-tighter
                [&_h3]:text-3xl [&_h3]:font-black [&_h3]:text-charcoal [&_h3]:mt-12 [&_h3]:mb-8 [&_h3]:uppercase [&_h3]:tracking-tight
                [&_p]:text-slate-600 [&_p]:text-xl [&_p]:leading-relaxed [&_p]:mb-10 [&_p]:font-medium
                [&_blockquote]:border-l-[12px] [&_blockquote]:border-primary [&_blockquote]:bg-primary/5 [&_blockquote]:p-12 [&_blockquote]:rounded-r-[3rem] [&_blockquote]:text-secondary [&_blockquote]:text-3xl [&_blockquote]:font-black [&_blockquote]:italic [&_blockquote]:my-16 [&_blockquote]:tracking-tight [&_blockquote]:leading-tight
                [&_ul]:list-none [&_ul]:space-y-6 [&_ul]:mb-12
                [&_li]:flex [&_li]:items-start [&_li]:gap-4 [&_li]:text-slate-600 [&_li]:text-xl [&_li]:font-medium
                [&_li]:before:content-['→'] [&_li]:before:text-primary [&_li]:before:font-black
                [&_hr]:border-slate-100 [&_hr]:my-20
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedPost) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedPost]);

  return (
    <main className="bg-warm-white min-h-screen text-charcoal font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative pt-48 pb-32 px-6 bg-white text-center overflow-hidden border-b border-slate-50">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -mr-20 -mt-20 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 border border-primary/10"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Nexus Insights
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-huge font-black mb-12"
          >
            Deep <span className="text-primary italic">Intelligence.</span> <br />
            Nexus <span className="text-primary italic">Reports.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Thought leadership and strategic engineering insights from the bridge of Indian innovation and global enterprise.
          </motion.p>
        </div>
      </section>

      {/* 2. BLOG GRID */}
      <section className="py-40 px-6 relative z-10 min-h-[600px]">
        <div className="container mx-auto max-w-7xl">
          {blogData && blogData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogData.map((post) => (
                <BlogCard key={post.id} post={post} onRead={() => setSelectedPost(post)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
               <p className="text-slate-400 font-black uppercase tracking-widest">Protocol Syncing... No reports found.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>

      {/* 4. NEWSLETTER CTA: IMMERSIVE */}
      <section className="py-40 px-6 bg-white text-center relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-secondary rounded-[4rem] p-16 md:p-32 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-mega font-black mb-12 uppercase tracking-tighter">Stay <span className="text-accent italic">Informed.</span></h2>
              <p className="text-2xl text-blue-100/70 mb-16 max-w-2xl mx-auto font-medium">Join our strategic newsletter to receive the latest updates on digital transformation and AI architecture.</p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                 <input 
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS..." 
                  className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[2rem] focus:border-accent outline-none font-bold text-white text-lg backdrop-blur-sm placeholder:text-blue-100/20"
                 />
                 <button className="w-full md:w-auto px-12 py-6 bg-white text-secondary rounded-[2rem] font-black text-lg tracking-widest hover:bg-accent hover:text-white transition-all shadow-2xl">
                   SUBSCRIBE
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Blog;