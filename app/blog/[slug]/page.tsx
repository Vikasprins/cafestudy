"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Tag,
} from "lucide-react";
import BlogCard from "@/components/BlogCard";
import AuthorCard from "@/components/AuthorCard";
import { blogPosts } from "@/data/blogs";
import { authors } from "@/data/authors";
import { categories } from "@/data/categories";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);
  const author = post ? authors.find((a) => a.id === post.authorId) : null;
  const category = post
    ? categories.find((c) => c.id === post.categoryId)
    : null;

  // Related posts from same category
  const relatedPosts = post
    ? blogPosts
        .filter((p) => p.categoryId === post.categoryId && p.id !== post.id)
        .slice(0, 3)
    : [];

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = post?.title || "";

    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  if (!post || !author) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary-600 hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Category Badge */}
          {category && (
            <span
              className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full mb-4`}
            >
              {category.name}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Image
                src={author.avatar}
                alt={author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{author.name}</p>
                <p className="text-sm">{author.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Share Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
            <span className="text-sm font-semibold text-gray-700">Share:</span>
            <button
              onClick={() => handleShare("facebook")}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
            </button>
            <button
              onClick={() => handleShare("copy")}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all relative"
              aria-label="Copy link"
            >
              <Link2 className="w-5 h-5 text-gray-700" />
              {copied && (
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br />"),
            }}
          />
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          <Tag className="w-5 h-5 text-gray-600" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">About the Author</h2>
          <AuthorCard author={author} />
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
}
