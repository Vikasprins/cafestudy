"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 h-full"
    >
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

      <div className="flex items-center space-x-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
