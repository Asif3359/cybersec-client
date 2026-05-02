import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(data.message);
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4">

      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 bg-green-500 rounded flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)]">
            <FaShieldAlt className="text-black text-lg" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">
            Cyber<span className="text-green-500">Sec</span>
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-1">Create Account</h2>
          <p className="text-gray-500 text-sm mb-6">Join the secure network.</p>

          <div className="space-y-3">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-green-500/60 placeholder-gray-600 transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-green-500/60 placeholder-gray-600 transition"
            />
            <input
              name="password"
              type="password"
              placeholder="Password (min 6 chars)"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-green-500/60 placeholder-gray-600 transition"
            />
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}
          {success && (
            <p className="mt-4 text-sm text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-2 rounded-lg">
              {success} Redirecting...
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full py-2.5 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-lg transition"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-400 hover:underline">
              Login
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}
