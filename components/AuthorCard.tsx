"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Author } from "@/data/authors";

interface AuthorCardProps {
  author: Author;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 flex flex-col items-center text-center"
    >
      <Image
        src={author.avatar}
        alt={author.name}
        width={120}
        height={120}
        className="rounded-full mb-4 shadow-lg"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-1">{author.name}</h3>
      <p className="text-sm text-primary-600 mb-3">{author.role}</p>
      <p className="text-gray-600 text-sm mb-4">{author.bio}</p>

      <div className="flex space-x-3">
        {author.social.twitter && (
          <a
            href={author.social.twitter}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-gray-700" />
          </a>
        )}
        {author.social.linkedin && (
          <a
            href={author.social.linkedin}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-700" />
          </a>
        )}
        {author.social.github && (
          <a
            href={author.social.github}
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            aria-label="Github"
          >
            <Github className="w-5 h-5 text-gray-700" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default AuthorCard;
