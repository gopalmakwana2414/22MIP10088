import axios from "axios";
import { useState } from "react";

const RegisterCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    github: "",
    regNo: ""
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "mobile number is required";
    } else if (!formData.mobile.startsWith("+")) {
      newErrors.mobile = "include country code with +";
    }

    if (!formData.github.trim()) {
      newErrors.github = "github username is required";
    }

    if (!formData.regNo.trim()) {
      newErrors.regNo = "registration number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );

      setMessage("registration completed successfully");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        github: "",
        regNo: ""
      });

      setErrors({});
    } catch (err) {
      setMessage(
        err.response?.data?.message || "something went wrong"
      );
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-semibold">
        Register
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3 outline-none"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3 outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Mobile Number (+91XXXXXXXXXX)"
            className="w-full rounded-lg border p-3 outline-none"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                mobile: e.target.value
              })
            }
          />

          {errors.mobile && (
            <p className="mt-1 text-sm text-red-500">
              {errors.mobile}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="GitHub Username"
            className="w-full rounded-lg border p-3 outline-none"
            value={formData.github}
            onChange={(e) =>
              setFormData({
                ...formData,
                github: e.target.value
              })
            }
          />

          {errors.github && (
            <p className="mt-1 text-sm text-red-500">
              {errors.github}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Registration Number"
            className="w-full rounded-lg border p-3 outline-none"
            value={formData.regNo}
            onChange={(e) =>
              setFormData({
                ...formData,
                regNo: e.target.value
              })
            }
          />

          {errors.regNo && (
            <p className="mt-1 text-sm text-red-500">
              {errors.regNo}
            </p>
          )}
        </div>

        <button className="w-full rounded-lg bg-slate-900 p-3 text-white transition hover:bg-slate-800">
          Create Account
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

export default RegisterCard;