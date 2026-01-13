"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "./Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate submission
    setStatus("success");
    setEmail("");

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get the latest articles and insights delivered directly to your
            inbox. No spam, ever.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <Button type="submit" variant="secondary" icon={Send}>
              Subscribe
            </Button>
          </form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-white font-semibold"
            >
              ✓ Thanks for subscribing! Check your inbox.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
