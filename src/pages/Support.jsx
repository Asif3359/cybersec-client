import { FaHeadset, FaEnvelope, FaDiscord, FaWhatsapp, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Support() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 bg-[#020617] min-h-screen text-slate-200">
      
      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <FaHeadset className="text-3xl text-green-500" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          24/7 COMMAND <span className="text-green-500 underline decoration-green-500/20 underline-offset-8">SUPPORT</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          আমাদের এক্সপার্ট টিম আপনার ডিজিটাল নিরাপত্তার জন্য সব সময় প্রস্তুত। যেকোনো সিকিউরিটি ব্রিচ বা টেকনিক্যাল সমস্যায় আমাদের সাথে যোগাযোগ করুন।
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* --- CONTACT METHODS (Left) --- */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-green-500 rounded-full"></span>
            Direct Channels
          </h2>
          
          {[
            { icon: <FaEnvelope />, title: "Email Support", detail: "support@cybersec.com", color: "blue" },
            { icon: <FaDiscord />, title: "Discord Community", detail: "Join our server", color: "indigo" },
            { icon: <FaWhatsapp />, title: "Quick Response", detail: "+880 1XXX-XXXXXX", color: "green" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-green-500/5 hover:border-green-500/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl text-slate-500 group-hover:text-green-500 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Incident Status Box */}
          <div className="mt-8 p-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
             <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                System Status: Optimal
             </div>
             <p className="text-[11px] text-slate-500 font-mono italic">
                All security nodes are operational. Average response time: 4 mins.
             </p>
          </div>
        </div>

        {/* --- TICKETING FORM (Middle/Right) --- */}
        <div className="lg:col-span-2 bg-slate-900/20 backdrop-blur-md border border-white/5 p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <FaShieldAlt className="text-9xl text-white" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">Open a Security Ticket</h2>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
              <input type="text" placeholder="Sheikh Minan" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500 outline-none transition" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
              <input type="email" placeholder="minan@example.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500 outline-none transition" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Issue Category</label>
              <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500 outline-none transition appearance-none">
                <option>Account Compromise</option>
                <option>Malware Infection</option>
                <option>API Access Issue</option>
                <option>Other Security Query</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Detailed Message</label>
              <textarea rows="4" placeholder="Describe the incident..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500 outline-none transition"></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full py-4 bg-green-600 text-black font-black text-sm uppercase tracking-widest rounded-xl hover:bg-green-500 transition shadow-lg shadow-green-900/20 active:scale-95">
                Submit Report to SOC
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="mt-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <FaQuestionCircle className="text-2xl text-green-500" />
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {[
            { q: "How long does it take to review a ticket?", a: "Our typical response time for critical issues is under 15 minutes." },
            { q: "Is my data shared with anyone?", a: "No, all support communication is end-to-end encrypted and strictly confidential." },
            { q: "Do you offer emergency incident response?", a: "Yes, our Tier-3 engineers are available for immediate breach mitigation." }
          ].map((faq, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-slate-900/20 border border-white/5 rounded-2xl hover:border-white/10 transition"
            >
              <h4 className="font-bold text-white mb-2">{faq.q}</h4>
              <p className="text-sm text-slate-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}