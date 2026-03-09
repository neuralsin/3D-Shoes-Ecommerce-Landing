"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Rocket,
    Heart,
    Sparkles,
    Leaf,
    Users,
    Globe,
    Package,
    Calendar,
    Github,
    Linkedin,
} from "lucide-react";

const stats = [
    { icon: Package, label: "Products", value: "250+" },
    { icon: Users, label: "Happy Customers", value: "50K+" },
    { icon: Globe, label: "Countries", value: "30+" },
    { icon: Calendar, label: "Years", value: "5+" },
];

const values = [
    {
        icon: Rocket,
        title: "Innovation",
        description:
            "We push boundaries with cutting-edge materials and design thinking to create footwear that redefines expectations.",
        gradient: "from-cyan-400 to-blue-500",
    },
    {
        icon: Heart,
        title: "Comfort",
        description:
            "Every shoe is engineered for all-day comfort. Our ergonomic designs ensure your feet feel as good as they look.",
        gradient: "from-blue-400 to-purple-500",
    },
    {
        icon: Sparkles,
        title: "Style",
        description:
            "Bold aesthetics meet timeless design. Our shoes make a statement while remaining versatile for any occasion.",
        gradient: "from-purple-400 to-pink-500",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description:
            "We're committed to reducing our footprint. Eco-friendly materials and ethical manufacturing are at our core.",
        gradient: "from-green-400 to-cyan-500",
    },
];

const team = [
    {
        name: "Shaan Sahai",
        role: "Founder & Developer",
        bio: "Full-stack developer passionate about creating immersive web experiences with cutting-edge technology.",
        links: {
            github: "https://github.com/neuralsin",
            linkedin: "https://www.linkedin.com/in/shaan-sahai-a938b0387/",
        },
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
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

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black">
            <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
        .space-grotesk {
          font-family: "Space Grotesk", sans-serif;
        }
      `}</style>

            <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f1a2c_1px,transparent_1px),linear-gradient(to_bottom,#0f1a2c_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <div className="relative space-grotesk">
                {/* Hero */}
                <div className="container mx-auto px-6 md:px-10 py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                            About NEXT GEN
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
                            We&apos;re on a mission to revolutionize footwear. By blending
                            futuristic design with uncompromising comfort, we create shoes that
                            don&apos;t just keep up with your lifestyle — they elevate it.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border-y border-gray-800 bg-gray-900/50 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-6 md:px-10 py-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="text-center"
                                >
                                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Our Story */}
                <div className="container mx-auto px-6 md:px-10 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
                            Our Story
                        </h2>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-15" />
                            <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12 space-y-6">
                                <p className="text-gray-300 text-base leading-relaxed font-light">
                                    NEXT GEN was born from a simple idea: footwear should evolve
                                    with technology. In a world where everything is getting
                                    smarter, faster, and more connected, why should shoes stay the
                                    same?
                                </p>
                                <p className="text-gray-300 text-base leading-relaxed font-light">
                                    We started as a small team of designers and engineers who
                                    believed that the future of footwear lies at the intersection
                                    of innovation, sustainability, and style. Today, we&apos;re
                                    proud to serve thousands of customers worldwide with shoes that
                                    push the boundaries of what&apos;s possible.
                                </p>
                                <p className="text-gray-300 text-base leading-relaxed font-light">
                                    Every pair of NEXT GEN shoes is crafted with precision,
                                    using cutting-edge materials that provide unmatched comfort,
                                    durability, and performance. From the lab to the street, we
                                    ensure every step you take is a step into the future.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values */}
                <div className="container mx-auto px-6 md:px-10 pb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
                    >
                        Our Values
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                className="relative group cursor-pointer"
                            >
                                <div
                                    className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300`}
                                />
                                <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8 h-full">
                                    <value.icon
                                        className={`w-10 h-10 mb-4 text-transparent bg-gradient-to-r ${value.gradient} bg-clip-text`}
                                        style={{ stroke: "url(#grad)" }}
                                    />
                                    <div className="mb-2">
                                        <value.icon className="w-8 h-8 text-cyan-400 mb-3" />
                                        <h3 className="text-xl font-semibold text-white">
                                            {value.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Team */}
                <div className="container mx-auto px-6 md:px-10 pb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight"
                    >
                        Meet the Creator
                    </motion.h2>

                    <div className="flex justify-center">
                        {team.map((member) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="relative group max-w-sm w-full"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-300" />
                                <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-5">
                                        <span className="text-white text-2xl font-bold">
                                            {member.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-cyan-400 text-sm font-medium mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-5">
                                        {member.bio}
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <a
                                            href={member.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={member.links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 bg-gray-900/30"
                >
                    <div className="container mx-auto px-6 md:px-10 py-20 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to step into the future?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Explore our collection and find the perfect pair that matches your
                            style and ambition.
                        </p>
                        <motion.a
                            href="/catalog"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(56,189,248,0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg tracking-wide"
                        >
                            Explore Collection
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
