import axios from "axios";
import { useState } from "react";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
  "http://localhost:5000/auth/login",
  { email }
);

setMessage("login successful");

      setMessage("login successful");
      setEmail("");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "login failed"
      );
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-semibold">
        Login
      </h2>

      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border p-3 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full rounded-lg bg-blue-600 p-3 text-white transition hover:bg-blue-700">
          Login
        </button>
      </form>

      {message && (
        <div className="mt-5 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          {message}
        </div>
      )}
    </div>
  );
};

export default LoginCard;