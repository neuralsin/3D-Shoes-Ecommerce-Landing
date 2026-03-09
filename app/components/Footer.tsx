"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Send, Mail, ExternalLink, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-black/95 text-gray-300 py-16">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1a2c_1px,transparent_1px),linear-gradient(to_bottom,#0f1a2c_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NEXT GEN
              </span>
            </div>
            <p className="text-gray-400">
              Step into the future with next-generation footwear. Experience
              comfort and style evolved.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/neuralsin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shaan-sahai-a938b0387/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Catalog", path: "/catalog" },
                { name: "About Us", path: "/about-us" },
                { name: "Blog", path: "/blogs" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </Link>
                </li>
              )
              )}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-bold text-white">Join the Future</h4>
            <p className="text-gray-400">
              Subscribe for exclusive drops and innovations.
            </p>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
              <form className="relative flex bg-black rounded-lg">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 text-white placeholder-gray-400 rounded-l-lg border border-gray-800 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-lg flex items-center space-x-2 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                >
                  <span>Join</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="relative mt-12 pt-8 text-center"
        >
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Shaan Sahai. Built with Next.js &
            Three.js.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
