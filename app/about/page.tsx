"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Users, Zap, Award } from "lucide-react";
import AuthorCard from "@/components/AuthorCard";
import { authors } from "@/data/authors";

export default function AboutPage() {
  const stats = [
    { label: "Articles Published", value: "500+" },
    { label: "Active Readers", value: "50K+" },
    { label: "Countries Reached", value: "120+" },
    { label: "Expert Contributors", value: "25+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide high-quality, accessible content that empowers developers and designers to build better products and advance their careers.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in the power of community and collaboration. Our platform is built by developers, for developers.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Staying ahead of the curve by covering the latest trends, technologies, and best practices in the industry.",
    },
    {
      icon: Award,
      title: "Quality Content",
      description:
        "Every article is carefully crafted, reviewed, and optimized to provide maximum value to our readers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About CafeStudy
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              We're on a mission to make technology education accessible,
              engaging, and impactful for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 text-left">
                <p>
                  CafeStudy was founded in 2020 with a simple yet powerful
                  vision: to create a platform where developers, designers, and
                  tech enthusiasts could find reliable, high-quality content
                  that helps them grow professionally.
                </p>
                <p>
                  What started as a small blog has grown into a thriving
                  community of creators and readers from around the world. We
                  cover everything from cutting-edge web development frameworks
                  to timeless design principles, always with a focus on
                  practical, actionable insights.
                </p>
                <p>
                  Our team of expert contributors brings diverse perspectives
                  and real-world experience to every article. We believe that
                  the best content comes from those who are actively building,
                  shipping, and iterating in the field.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented individuals passionate about sharing knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
