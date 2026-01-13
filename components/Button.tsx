"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "bg-white text-primary-600 shadow-md hover:shadow-lg border-2 border-primary-600 hover:bg-primary-50",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </motion.button>
  );
};

export default Button;
