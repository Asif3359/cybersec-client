import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

   const res= await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    const data = await res.json();

alert(data.message || data.error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="bg-[#0f172a] p-8 rounded-xl w-80">
        <h2 className="text-2xl mb-4">Register</h2>

        <input placeholder="Name" className="w-full p-2 mb-3 bg-black border"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input placeholder="Email" className="w-full p-2 mb-3 bg-black border"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input type="password" placeholder="Password"
          className="w-full p-2 mb-3 bg-black border"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="w-full bg-green-500 py-2">Register</button>
      </form>
    </div>
  );
}