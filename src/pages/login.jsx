import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.message === "OTP sent to email") {
      localStorage.setItem("email", form.email);
      alert("OTP sent to your email");
     navigate("/verify");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="bg-[#0f172a] p-8 rounded-xl w-80">
        <h2 className="text-2xl mb-4">Login</h2>

        <input
          placeholder="Email"
          className="w-full p-2 mb-3 bg-black border"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 bg-black border"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-green-500 py-2">Login</button>
      </form>
    </div>
  );
}