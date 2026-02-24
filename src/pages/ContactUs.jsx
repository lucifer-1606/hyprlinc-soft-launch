import React, { useState } from "react";
import { Mail, User, MessageSquare, Clock, Send, Loader2 } from "lucide-react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/v1/emailVerification/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-16">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          We'd love to hear from you. Whether it's a question, feedback, or partnership.
        </p>
      </div>

      {/* Card */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-gray-100">

        {/* Left Info Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-gray-600">
            Reach out to us anytime. We're here to help you build better, faster, and smarter.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>business@hyprlinc.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-blue-600" />
              <span>Mon – Fri, 9am – 6pm</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div>
          {status === "success" ? (
            <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-green-800 text-center space-y-2">
              <p className="text-2xl">✅</p>
              <p className="font-semibold">Message sent!</p>
              <p className="text-sm">We'll get back to you within 1–2 business days. Check your inbox for a confirmation.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-blue-600 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div className="relative">
                <User className="absolute top-3 left-3 text-gray-400" size={18} />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name (optional)"
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute top-3 left-3 text-gray-400" size={18} />
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  ❌ {errorMsg || "Failed to send. Please try again."}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-md disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Hyprlinc. All rights reserved.
      </div>
    </main>
  );
};

export default ContactUs;
