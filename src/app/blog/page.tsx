"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  categories: string[];
}

interface MediumFeed {
  status: string;
  items: MediumPost[];
}

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/"
        );
        const data: MediumFeed = await res.json();

        if (data.status === "ok") {
          // Filter out comments (items with empty categories array)
          const blogPosts = data.items.filter((item) => item.categories.length > 0);
          setPosts(blogPosts);
        } else {
          throw new Error("Failed to fetch Medium posts");
        }
      } catch (err) {
        setError("Unable to load blog posts. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <section className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 mt-6">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light text-[#4F45E4]">
            Our Blog
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Insights, updates, and stories from Tamar Software.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-gray-400">
            <p>Loading blog posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center text-gray-400">
            <p>No blog posts found.</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Thumbnail */}
                {post.thumbnail && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Posted on: {new Date(post.pubDate).toLocaleDateString()}
                  </p>
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#4F45E4] font-medium hover:text-[#4F45E4]/80 transition-colors duration-300 hover:translate-x-1"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}