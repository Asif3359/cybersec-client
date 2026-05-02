import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaShieldAlt, FaLock, FaGlobe, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const Navlink = [
    { path: "/", label: "Home" },
    { path: "/intelligence", label: "Intelligence" },
    { path: "/threats", label: "Threats" },
    { path: "/support", label: "Support" }
  ];

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-green-500/30 selection:text-green-400">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-black/60 backdrop-blur-md border-b border-green-500/20 fixed w-full top-0 z-[100]">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            <FaShieldAlt className="text-black text-xl" />
          </div>

          <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">
            Cyber<span className="text-green-500">Sec</span>
          </h1>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-10 text-sm font-medium uppercase">

          {Navlink.map((item, index) => (
            <li key={index} className="hover:text-green-400 transition">

              <Link to={item.path}>
                {item.label}
              </Link>

            </li>
          ))}

        </ul>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-sm font-semibold hover:text-green-400">
            Login
          </Link>

          <Link to="/register" className="px-5 py-2 bg-green-500 text-black text-sm font-bold rounded-full hover:bg-green-400 transition">
            Registered
          </Link>
        </div>

      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto px-6 text-center relative"
        >
          <span className="px-4 py-1.5 border border-green-500/30 rounded-full text-xs font-bold text-green-400 uppercase mb-6 inline-block bg-green-500/5">
            Real-time Threat Intelligence
          </span>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Defend Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Digital Identity
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Enterprise-grade cyber protection with AI-driven monitoring and real-time defense systems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:scale-105 transition">
              Explore Live Feed
            </button>
            <button className="px-8 py-4 border border-gray-700 bg-white/5 rounded-lg hover:bg-white/10 transition">
              Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* THREATS */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Active Cyber Threats</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Ransomware",
              img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
              icon: <FaLock className="text-red-500" />,
              desc: "Cloud infrastructure vulnerability detected."
            },
            {
              title: "Phishing Attack",
              img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
              icon: <FaUserShield className="text-yellow-500" />,
              desc: "Social engineering targeting financial systems."
            },
            {
              title: "Data Breach",
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
              icon: <FaGlobe className="text-blue-500" />,
              desc: "Millions of records exposed on dark web."
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            >
              <img src={t.img} className="h-40 w-full object-cover opacity-70" />

              <div className="p-6">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm">{t.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-xl font-bold text-white">CyberSec</h2>
            <p className="text-gray-500 mt-4 text-sm">
              Advanced cyber intelligence platform for modern security.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>Threat Map</li>
              <li>API Docs</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Social</h4>
            <div className="flex gap-4 text-xl">
              <FaFacebook />
              <FaTwitter />
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>

        </div>

        <p className="text-center text-gray-600 text-xs mt-10">
          © 2026 CyberSec Intelligence Portal
        </p>
      </footer>

    </div>
  );
}