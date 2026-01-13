"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { authors } from "@/data/authors";
import { categories } from "@/data/categories";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  const author = authors.find((a) => a.id === post.authorId);
  const category = categories.find((c) => c.id === post.categoryId);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden hover-lift"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {post.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
        {category && (
          <div
            className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${category.color} text-black text-xs font-semibold rounded-full`}
          >
            {category.name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t">
          {author && (
            <div className="flex items-center space-x-3">
              <Image
                src={author.avatar}
                alt={author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">
                  {author.name}
                </p>
                <p className="text-xs text-gray-600">{author.role}</p>
              </div>
            </div>
          )}
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center space-x-1 text-primary-600 font-semibold group-hover:gap-2 transition-all"
          >
            <span>Read</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
