"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { shoes } from "@/data";
import ShoeModelViewer from "../components/ShoeModelViewer";

interface Shoe {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  modelUrl?: string;
  category?: string;
}

const categories = [
  "Sneakers",
  "Casual Shoes",
  "Formal Shoes",
  "Boots",
  "Sandals",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "I absolutely love my new sneakers! They are comfortable, stylish, and perfect for running.",
  },
  {
    name: "Michael Chen",
    text: "Best boots I've ever bought. They feel like they were custom made for me!",
  },
];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);

  const filteredShoes = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (e: React.MouseEvent, shoe: Shoe) => {
    e.stopPropagation();
    console.log("Added to cart:", shoe.name);
  };

  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
        .space-grotesk {
          font-family: "Space Grotesk", sans-serif;
        }
      `}</style>

      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f1a2c_1px,transparent_1px),linear-gradient(to_bottom,#0f1a2c_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Hero Section */}
      <div className="relative container mx-auto px-20 py-20 space-grotesk">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[600px]"
        >
          {/* Left Content Section */}
          <div className="space-y-8 z-20">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent
        filter drop-shadow-lg tracking-tight leading-tight"
            >
              Step Into the Future of Footwear
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed"
            >
              Cutting-edge design meets unparalleled comfort. Experience shoes
              that transform the way you move, think, and explore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/catalog">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white
            rounded-full font-semibold text-lg tracking-wide
            transform transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:brightness-110"
                >
                  Explore Collection
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[600px] aspect-square overflow-hidden">
              <motion.div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <motion.img
                src="/images/xu-haiwei-fv1EFjgIb94-unsplash-removebg.png"
                alt="Futuristic Shoe"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 filter brightness-75"
                initial={{ rotate: 0 }}
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <div className="absolute -inset-10 bg-blue-500/20 rounded-full blur-3xl z-[-1] opacity-50"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Categories Section */}
      <div className="px-10">
        <div className="mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-medium text-white text-center mb-12 tracking-tight"
          >
            Shop by Category
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {categories.map((category) => (
              <Link
                href={`/catalog?category=${category.toLowerCase()}`}
                key={category}
              >
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      scale: 0.8,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 2, -2, 0],
                    transition: {
                      duration: 0.3,
                      type: "tween",
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group overflow-hidden bg-gray-900 border border-gray-800 rounded-xl p-6 text-center cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />

                  <motion.h3
                    className="relative z-10 text-white text-base font-medium tracking-wide
              group-hover:text-transparent group-hover:bg-clip-text
              group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600
              transition-all duration-300"
                  >
                    {category}
                  </motion.h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Featured Products */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium text-white text-center mb-12 tracking-tight">
            Featured Products
          </h2>
          <div className="relative">
            <div className="relative max-w-xl mx-auto mb-12">
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg flex items-center overflow-hidden">
                <Search className="ml-4 text-blue-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredShoes.map((shoe) => (
                  <motion.div
                    key={shoe.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    className="relative group"
                    onClick={() => setSelectedShoe(shoe)}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                    <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={shoe.image}
                          alt={shoe.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>

                      <div className="p-6">
                        <h2 className="text-xl font-medium text-white mb-3 tracking-tight">
                          {shoe.name}
                        </h2>
                        <p className="text-gray-400 text-sm mb-4 font-light">
                          {shoe.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            ${shoe.price}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => handleAddToCart(e, shoe)}
                            className="flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="text-3xl font-medium text-white text-center mb-12 tracking-tight"
            >
              Why Choose Us?
            </motion.h2>

            <div className="relative max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="relative bg-gray-900 border border-gray-800 rounded-xl p-8
        overflow-hidden group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20
          opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"
                />

                <p className="relative z-10 text-gray-300 text-base text-center leading-relaxed font-light">
                  At NextGen Footwear, we believe that shoes should be more than
                  just footwear. They should be an expression of your style,
                  comfort, and personality. Our mission is to provide
                  high-quality shoes that keep you comfortable all day long
                  while making sure you look good doing it.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="pb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="text-3xl font-medium text-white text-center mb-12 tracking-tight"
            >
              What Our Customers Are Saying
            </motion.h2>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      scale: 0.9,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotate: [0, 1, -1, 0],
                    transition: {
                      duration: 0.3,
                      type: "tween",
                    },
                  }}
                  className="relative bg-gray-900 border border-gray-800 rounded-xl p-8
          group overflow-hidden cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20
            opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"
                  />

                  <div className="relative z-10">
                    <p className="text-gray-300 text-base mb-4 italic leading-relaxed font-light">
                      {testimonial.text}
                    </p>
                    <p className="text-blue-400 font-medium text-sm tracking-wide">
                      - {testimonial.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Model Viewer Modal */}
      {selectedShoe && (
        <ShoeModelViewer
          isOpen={true}
          onClose={() => setSelectedShoe(null)}
          modelUrl={selectedShoe?.modelUrl ?? ""}
          shoeName={selectedShoe?.name}
        />
      )}
    </div>
  );
};

export default HomeScreen;
