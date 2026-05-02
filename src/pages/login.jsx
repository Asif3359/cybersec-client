import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (data.message === "OTP sent to email") {
        localStorage.setItem("email", form.email);
        navigate("/verify");
      } else {
        setError(data.error || "Login failed. Please try again.");
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
          <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
          <p className="text-gray-500 text-sm mb-6">Sign in to your secure account.</p>

          <div className="space-y-3">
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
              placeholder="Password"
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

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full py-2.5 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-lg transition"
          >
            {loading ? "Verifying..." : "Login"}
          </button>

          <p className="mt-5 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-green-400 hover:underline">
              Register
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}
