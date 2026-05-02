import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = localStorage.getItem("email");

    try {
      const res = await fetch("/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });
      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.error || "Verification failed.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const email = localStorage.getItem("email");

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
          onSubmit={handleVerify}
          className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-1">Check Your Email</h2>
          <p className="text-gray-500 text-sm mb-1">
            We sent a 6-digit OTP to
          </p>
          {email && (
            <p className="text-green-400 text-sm font-medium mb-6 truncate">{email}</p>
          )}

          <input
            name="otp"
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setError("");
            }}
            required
            className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg text-sm text-center tracking-[0.5em] focus:outline-none focus:border-green-500/60 placeholder-gray-600 transition"
          />

          {error && (
            <p className="mt-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            className="mt-6 w-full py-2.5 bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-lg transition"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <p className="mt-5 text-center text-xs text-gray-600">
            OTP expires in 5 minutes. Check your spam folder if not received.
          </p>
        </form>

      </div>
    </div>
  );
}
