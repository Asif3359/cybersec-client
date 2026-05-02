import { FaSkull, FaBug, FaGlobe, FaNetworkWired, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Threats() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div className="pt-28 pb-20 px-6 md:px-16 bg-[#020617] min-h-screen text-slate-200 selection:bg-red-500/30">
      
      {/* --- HERO HEADER --- */}
      <div className="relative rounded-3xl overflow-hidden mb-16 border border-white/5 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000"
            alt="Cyber Surveillance"
            className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 p-8 md:p-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            Critical System Alert
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 italic">
            ACTIVE <span className="text-red-500 underline decoration-red-500/30 underline-offset-8">THREATS</span>
          </h1>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            Real-time heuristic analysis of global intrusion vectors. Monitoring encrypted payloads and unauthorized packet flows across sovereign networks.
          </p>
        </div>
      </div>

      {/* --- THREAT INTELLIGENCE GRID --- */}
      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {[
          { icon: <FaSkull />, title: "Ransomware", count: "142", status: "Critical", color: "red" },
          { icon: <FaBug />, title: "Malware", count: "892", status: "Active", color: "yellow" },
          { icon: <FaGlobe />, title: "Data Breach", count: "12", status: "Mitigating", color: "blue" },
          { icon: <FaNetworkWired />, title: "Intrusion", count: "2.4k", status: "Monitoring", color: "green" },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300"
          >
            <div className={`text-4xl mb-6 text-${item.color}-500 opacity-80 group-hover:opacity-100 transition-opacity`}>
              {item.icon}
            </div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h3>
            <div className="text-3xl font-black text-white mb-4">{item.count}</div>
            <div className={`inline-block px-2 py-1 rounded text-[10px] font-bold bg-${item.color}-500/10 text-${item.color}-500 border border-${item.color}-500/20 uppercase`}>
              {item.status}
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <FaExclamationTriangle className="text-4xl" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- LIVE COMMAND CENTER FEED --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Feed */}
        <div className="lg:col-span-2 bg-slate-900/20 backdrop-blur-md rounded-3xl border border-white/5 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <span className="w-2 h-6 bg-red-500 rounded-full"></span>
              Live Intelligence Feed
            </h2>
            <span className="text-[10px] font-mono text-slate-500 tracking-tighter uppercase">Socket: Connected_TLS_1.3</span>
          </div>

          <div className="space-y-3">
            {[
              { msg: "Ransomware payload detected: [USA_BANK_NY_04]", time: "0.2s ago", type: "alert" },
              { msg: "Unauthorized SSH attempt from: 192.168.0.24", time: "1.5s ago", type: "warning" },
              { msg: "Credential dump identified on Dark Web [X-Market]", time: "4.0s ago", type: "critical" },
              { msg: "DDoS mitigation active for EU-Cluster-7", time: "10s ago", type: "info" },
              { msg: "New zero-day exploit detected in Webkit core", time: "1m ago", type: "critical" },
            ].map((feed, idx) => (
              <div 
                key={idx}
                className="group flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-red-500/5 hover:border-red-500/20 transition-all cursor-crosshair"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-1.5 h-1.5 rounded-full ${feed.type === 'critical' ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}></div>
                  <p className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors">
                    {">"} {feed.msg}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-600 uppercase">{feed.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Graphic */}
        <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl border border-red-500/20 p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-2">Regional Risk Map</h3>
              <p className="text-xs text-slate-400">Heat-map analysis of current packet collisions.</p>
            </div>
            
            {/* Visual Decorative Placeholder */}
            <div className="h-40 w-full flex items-center justify-center opacity-40">
               <div className="w-32 h-32 border-4 border-dashed border-red-500/40 rounded-full animate-spin-slow flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-red-500/20 rounded-full flex items-center justify-center">
                     <FaGlobe className="text-4xl text-red-500/50" />
                  </div>
               </div>
            </div>

            <button className="w-full py-4 bg-red-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-red-500 transition shadow-lg shadow-red-900/20">
              Generate Report
            </button>

            {/* Background Texture */}
            <div className="absolute bottom-0 right-0 text-9xl font-black text-white/5 -rotate-12 translate-y-10 translate-x-10 pointer-events-none">
              RISK
            </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>

    </div>
  );
}