import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useContactStore } from "../../lib/contactStore";

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { submitContact, loading, success, error } = useContactStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create payload with required fields for backend
    const payload = {
      name: formData.name,
      email: formData.email || "noemail@provided.com", // Fallback if optional
      phone: formData.phone || "Not provided",
      message: formData.message,
      budget: "Not specified", // Required by backend
      services: ["General Inquiry"], // Required by backend
      discoverySource: "Website Contact Form", // Required by backend
    };

    await submitContact(payload);
  };

  if (success) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          We'll get back to you within 24 hours.
        </p>
        <span className="hero-cta-glow">
          <button
            onClick={() => window.location.reload()}
            className="hero-cta-inner px-6 py-3 text-foreground rounded-xl font-semibold transition-colors font-roboto"
          >
            Send Another Message
          </button>
        </span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-5 py-3.5 bg-muted/40 border border-border/60 rounded-xl text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all"
          placeholder="Name"
        />
      </div>

      {/* Email + Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-muted/40 border border-border/60 rounded-xl text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-muted/40 border border-border/60 rounded-xl text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all"
            placeholder="Phone"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-5 py-3.5 bg-muted/40 border border-border/60 rounded-xl text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20 transition-all resize-none"
          placeholder="Message"
        />
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <span className="hero-cta-glow w-full inline-flex">
          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="hero-cta-inner w-full px-6 py-3.5 text-foreground font-roboto font-semibold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </span>

        <span className="hero-cta-glow w-full inline-flex">
          <button
            type="submit"
            disabled={loading}
            className="hero-cta-inner w-full px-6 py-3.5 text-foreground font-roboto font-semibold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send
              </>
            )}
          </button>
        </span>
      </div>
    </form>
  );
}
