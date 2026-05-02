import { FaBrain, FaSatellite, FaDatabase, FaShieldAlt } from "react-icons/fa";

export default function Intelligence() {
  return (
    <div className="pt-24 px-6 bg-[#020617] min-h-screen text-white">

      {/* HERO SECTION */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          Intelligence <span className="text-green-400">Center</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          AI-powered cyber intelligence monitoring system that detects, analyzes,
          and predicts global cyber threats in real-time.
        </p>
      </div>

      {/* FEATURE IMAGE BANNER */}
      <div className="relative rounded-2xl overflow-hidden mb-14 border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          className="w-full h-64 md:h-96 object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Live Global Threat Intelligence Map
          </h2>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-14">

        <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <FaBrain className="text-green-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold">AI Analysis</h3>
          <p className="text-gray-400 text-sm mt-2">
            Real-time machine learning threat detection.
          </p>
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <FaSatellite className="text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold">Global Tracking</h3>
          <p className="text-gray-400 text-sm mt-2">
            Satellite-level cyber activity monitoring.
          </p>
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <FaDatabase className="text-yellow-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold">Data Intelligence</h3>
          <p className="text-gray-400 text-sm mt-2">
            Dark web and deep network scanning.
          </p>
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10 hover:scale-105 transition">
          <FaShieldAlt className="text-red-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold">Threat Defense</h3>
          <p className="text-gray-400 text-sm mt-2">
            Auto mitigation & response system.
          </p>
        </div>

      </div>

      {/* LIVE INTELLIGENCE PANEL */}
      <div className="bg-[#0f172a] rounded-2xl p-6 border border-white/10">
        <h2 className="text-2xl font-bold mb-6">Live Intelligence Feed</h2>

        <div className="space-y-4">

          {[
            "Suspicious login detected from unknown IP (Germany)",
            "Dark web leak: 1.2M credentials exposed",
            "AI model flagged ransomware signature pattern",
            "Phishing campaign targeting banking sector detected"
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 bg-black/40 rounded-lg border border-white/10 hover:border-green-500/30 transition"
            >
              <p className="text-sm text-gray-300">⚡ {item}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}