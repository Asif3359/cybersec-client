import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaUserShield, FaGlobe, FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  const stats = [
    { label: "Threats Detected", value: "1,284", icon: <FaLock className="text-red-400 text-2xl" />, color: "border-red-500/30" },
    { label: "Active Shields", value: "47", icon: <FaShieldAlt className="text-green-400 text-2xl" />, color: "border-green-500/30" },
    { label: "Users Protected", value: "9,310", icon: <FaUserShield className="text-blue-400 text-2xl" />, color: "border-blue-500/30" },
    { label: "Global Nodes", value: "132", icon: <FaGlobe className="text-yellow-400 text-2xl" />, color: "border-yellow-500/30" },
  ];

  const recentActivity = [
    { event: "Brute force attempt blocked", time: "2 min ago", severity: "high" },
    { event: "Phishing URL flagged", time: "11 min ago", severity: "medium" },
    { event: "New device login detected", time: "34 min ago", severity: "low" },
    { event: "SSL certificate renewed", time: "1 hr ago", severity: "info" },
    { event: "Firewall rule updated", time: "3 hr ago", severity: "info" },
  ];

  const severityColor = {
    high: "text-red-400 bg-red-500/10 border-red-500/30",
    medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    low: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    info: "text-gray-400 bg-white/5 border-white/10",
  };

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-black/60 backdrop-blur-md border-b border-green-500/20 fixed w-full top-0 z-[100]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            <FaShieldAlt className="text-black text-xl" />
          </div>
          <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">
            Cyber<span className="text-green-500">Sec</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-400 hidden md:block">{email}</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg hover:bg-red-500/20 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </nav>

      <div className="pt-24 px-6 md:px-16 pb-16">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-white">
            Welcome back, <span className="text-green-400">{email?.split("@")[0]}</span>
          </h2>
          <p className="text-gray-500 mt-1 text-sm">Here's your security overview for today.</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {stats.map((s, i) => (
            <div key={i} className={`bg-[#0f172a] border ${s.color} rounded-xl p-5 flex flex-col gap-3`}>
              {s.icon}
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-5">Recent Activity</h3>
          <ul className="space-y-3">
            {recentActivity.map((item, i) => (
              <li key={i} className={`flex items-center justify-between px-4 py-3 rounded-lg border ${severityColor[item.severity]}`}>
                <span className="text-sm font-medium">{item.event}</span>
                <span className="text-xs opacity-60 ml-4 whitespace-nowrap">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="mt-8 flex flex-wrap gap-4">
          {[
            { to: "/threats", label: "View Threats" },
            { to: "/intelligence", label: "Intelligence Feed" },
            { to: "/support", label: "Support" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-5 py-2 border border-green-500/30 text-green-400 text-sm rounded-lg hover:bg-green-500/10 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
