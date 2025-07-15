import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please fill this detail";
    if (!form.email.trim()) newErrors.email = "Please fill this detail";
    if (!form.message.trim()) newErrors.message = "Please fill this detail";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "36146de5-f393-4799-8d8a-bda0dbe37f65",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message. Try again later.");
      }
    } catch {
      setSuccess("Failed to send message. Try again later.");
    }
    setLoading(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="py-16 px-4 flex flex-col items-center"
      id="contact"
    >
      <h1 className="text-4xl font-bold text-center mb-2">Contact Me</h1>
      <p className="text-zinc-400 text-center mb-8">Fill up the form below to send me a message.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/5 rounded-xl shadow p-8 flex flex-col gap-4">
        <div>
          <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Full Name</label>
          <input
            className={`w-full px-4 py-2 rounded border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 ${errors.name ? 'border-red-500' : ''}`}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Email Address</label>
          <input
            className={`w-full px-4 py-2 rounded border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            name="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Your Message</label>
          <textarea
            className={`w-full px-4 py-2 rounded border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 ${errors.message ? 'border-red-500' : ''}`}
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        <input type="hidden" name="access_key" value="36146de5-f393-4799-8d8a-bda0dbe37f65" />
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded transition disabled:opacity-60"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <div className="text-center text-green-600 mt-2">{success}</div>}
      </form>
    </motion.div>
  );
};

export default Contact; 