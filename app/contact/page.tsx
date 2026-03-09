"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@nextgenshoes.com",
        href: "mailto:hello@nextgenshoes.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "New Delhi, India",
        href: "#",
    },
];

const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/neuralsin",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/shaan-sahai-a938b0387/",
    },
];

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
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

            <div className="relative container mx-auto px-6 md:px-10 py-24 space-grotesk">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a question, suggestion, or just want to say hello? We&apos;d
                        love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Info Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="block relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-300" />
                                <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                            {info.label}
                                        </p>
                                        <p className="text-white text-sm mt-0.5">{info.value}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="pt-4"
                        >
                            <h3 className="text-white text-sm font-semibold mb-4">
                                Connect with us
                            </h3>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-11 h-11 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                                    >
                                        <link.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-15" />
                            <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                        >
                                            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-gray-400 mb-6">
                                                Thank you for reaching out. We&apos;ll get back to you
                                                soon.
                                            </p>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setIsSubmitted(false)}
                                                className="px-6 py-2.5 bg-gray-800 text-gray-300 rounded-lg text-sm hover:text-white transition-colors"
                                            >
                                                Send another message
                                            </motion.button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            {/* Name + Email Row */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-gray-400 text-sm mb-1.5">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your name"
                                                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${errors.name
                                                                ? "border-red-500/50 focus:border-red-500"
                                                                : "border-gray-700 focus:border-blue-500"
                                                            }`}
                                                    />
                                                    {errors.name && (
                                                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                            <AlertCircle className="w-3 h-3" />
                                                            {errors.name}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 text-sm mb-1.5">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="your@email.com"
                                                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${errors.email
                                                                ? "border-red-500/50 focus:border-red-500"
                                                                : "border-gray-700 focus:border-blue-500"
                                                            }`}
                                                    />
                                                    {errors.email && (
                                                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                            <AlertCircle className="w-3 h-3" />
                                                            {errors.email}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-1.5">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="What's this about?"
                                                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${errors.subject
                                                            ? "border-red-500/50 focus:border-red-500"
                                                            : "border-gray-700 focus:border-blue-500"
                                                        }`}
                                                />
                                                {errors.subject && (
                                                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.subject}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-gray-400 text-sm mb-1.5">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us more..."
                                                    rows={5}
                                                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none transition-colors resize-none ${errors.message
                                                            ? "border-red-500/50 focus:border-red-500"
                                                            : "border-gray-700 focus:border-blue-500"
                                                        }`}
                                                />
                                                {errors.message && (
                                                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Submit */}
                                            <motion.button
                                                type="submit"
                                                disabled={isSubmitting}
                                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                                className={`w-full py-3.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting
                                                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                                        : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/20"
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Send Message
                                                    </>
                                                )}
                                            </motion.button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
