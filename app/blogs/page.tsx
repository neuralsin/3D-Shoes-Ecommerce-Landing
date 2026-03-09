"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
/* eslint-disable @next/next/no-img-element */

const blogPosts = [
    {
        id: 1,
        title: "The Future of Sustainable Footwear",
        excerpt:
            "How eco-friendly materials and innovative manufacturing are reshaping the shoe industry for a greener tomorrow.",
        image:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1980&auto=format&fit=crop",
        date: "Mar 5, 2026",
        readTime: "5 min read",
        category: "Sustainability",
        featured: true,
    },
    {
        id: 2,
        title: "Top 5 Sneaker Trends to Watch in 2026",
        excerpt:
            "From retro revivals to tech-infused designs, these are the sneaker trends dominating the streets this year.",
        image:
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop",
        date: "Feb 28, 2026",
        readTime: "4 min read",
        category: "Trends",
        featured: false,
    },
    {
        id: 3,
        title: "How to Choose the Perfect Running Shoe",
        excerpt:
            "A comprehensive guide to finding running shoes that match your gait, terrain, and training goals.",
        image:
            "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop",
        date: "Feb 20, 2026",
        readTime: "7 min read",
        category: "Guides",
        featured: false,
    },
    {
        id: 4,
        title: "The Science Behind Shoe Comfort",
        excerpt:
            "Exploring the biomechanics and material science that make modern shoes more comfortable than ever.",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
        date: "Feb 14, 2026",
        readTime: "6 min read",
        category: "Technology",
        featured: false,
    },
    {
        id: 5,
        title: "Street Style: Pairing Sneakers with Every Outfit",
        excerpt:
            "Master the art of sneaker styling — from casual weekends to smart-casual office looks.",
        image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
        date: "Feb 8, 2026",
        readTime: "4 min read",
        category: "Style",
        featured: false,
    },
    {
        id: 6,
        title: "Behind the Design: Creating the NEXT GEN Series",
        excerpt:
            "An inside look at our design process — from concept sketches to the final 3D-printed prototype.",
        image:
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
        date: "Jan 30, 2026",
        readTime: "8 min read",
        category: "Behind the Scenes",
        featured: false,
    },
];

const categories = [
    "All",
    "Sustainability",
    "Trends",
    "Guides",
    "Technology",
    "Style",
    "Behind the Scenes",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 },
    },
};

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const featured = blogPosts.find((p) => p.featured);
    const filteredPosts = blogPosts
        .filter((p) => !p.featured)
        .filter(
            (p) => selectedCategory === "All" || p.category === selectedCategory
        );

    return (
        <div className="min-h-screen bg-black">
            <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
        .space-grotesk {
          font-family: "Space Grotesk", sans-serif;
        }
      `}</style>

            <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f1a2c_1px,transparent_1px),linear-gradient(to_bottom,#0f1a2c_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <div className="relative container mx-auto px-6 md:px-10 py-24 space-grotesk">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                        Blog
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Stories, insights, and guides from the world of next-generation
                        footwear.
                    </p>
                </motion.div>

                {/* Featured Article */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                            <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden grid md:grid-cols-2">
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {featured.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {featured.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                                        {featured.title}
                                    </h2>
                                    <p className="text-gray-400 font-light leading-relaxed mb-6">
                                        {featured.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-10 justify-center"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${selectedCategory === cat
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : "bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
                            <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className="flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-gray-300 text-xs rounded-full">
                                            <Tag className="w-3 h-3" />
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-cyan-400 text-sm mt-4 group-hover:gap-3 transition-all duration-300">
                                        Read more <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-15" />
                        <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-10">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Stay in the loop
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Get the latest articles and exclusive content delivered to your
                                inbox.
                            </p>
                            <div className="flex gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-medium whitespace-nowrap"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPage;
