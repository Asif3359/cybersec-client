import { useState } from "react";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");

    const res = await fetch("http://localhost:5000/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, otp })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login success 🎉");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleVerify} className="bg-[#0f172a] p-8 rounded-xl w-80">
        <h2 className="text-2xl mb-4">Enter OTP</h2>

        <input
          placeholder="OTP"
          className="w-full p-2 mb-3 bg-black border"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="w-full bg-green-500 py-2">Verify</button>
      </form>
    </div>
  );
}