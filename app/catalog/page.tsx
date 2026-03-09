"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, SlidersHorizontal, Eye } from "lucide-react";
import { shoes } from "@/data";
import ShoeModelViewer from "../components/ShoeModelViewer";

interface Shoe {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    modelUrl: string;
}

const categories = [
    "All",
    "Sneakers",
    "Casual Shoes",
    "Formal Shoes",
    "Boots",
    "Sandals",
];

const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low → High", value: "price-asc" },
    { label: "Price: High → Low", value: "price-desc" },
    { label: "Name: A → Z", value: "name-asc" },
];

const CatalogPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("featured");
    const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);
    const [cartItems, setCartItems] = useState<number[]>([]);

    const filteredShoes = shoes
        .filter((shoe) =>
            shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "name-asc":
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

    const handleAddToCart = (e: React.MouseEvent, shoeId: number) => {
        e.stopPropagation();
        setCartItems((prev) =>
            prev.includes(shoeId)
                ? prev.filter((id) => id !== shoeId)
                : [...prev, shoeId]
        );
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
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                        Our Collection
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover our curated selection of next-generation footwear. Each
                        pair crafted for performance, comfort, and style.
                    </p>
                </motion.div>

                {/* Search & Filters Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-10 space-y-6"
                >
                    {/* Search */}
                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur opacity-20" />
                        <div className="relative bg-gray-900 border border-gray-800 rounded-lg flex items-center overflow-hidden">
                            <Search className="ml-4 text-blue-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search shoes..."
                                className="w-full px-4 py-3.5 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Category Pills + Sort */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => (
                                <motion.button
                                    key={cat}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                                            : "bg-gray-900 border border-gray-700 text-gray-300 hover:border-blue-500/50 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-gray-900 border border-gray-700 text-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 cursor-pointer"
                            >
                                {sortOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 text-sm mb-6"
                >
                    Showing {filteredShoes.length} product
                    {filteredShoes.length !== 1 ? "s" : ""}
                </motion.p>

                {/* Product Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredShoes.map((shoe, index) => (
                            <motion.div
                                key={shoe.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -8 }}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedShoe(shoe)}
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300" />
                                <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.img
                                            src={shoe.image}
                                            alt={shoe.name}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="flex items-center gap-2 text-white bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm text-sm">
                                                <Eye className="w-4 h-4" />
                                                View 3D Model
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                                            {shoe.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 font-light line-clamp-2">
                                            {shoe.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                                ${shoe.price}
                                            </span>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => handleAddToCart(e, shoe.id)}
                                                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${cartItems.includes(shoe.id)
                                                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                                        : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                                    }`}
                                            >
                                                <ShoppingCart className="w-4 h-4" />
                                                {cartItems.includes(shoe.id) ? "Added" : "Add to Cart"}
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredShoes.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl text-gray-400 mb-2">No products found</h3>
                        <p className="text-gray-500 text-sm">
                            Try adjusting your search or filter criteria.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* 3D Model Viewer Modal */}
            {selectedShoe && (
                <ShoeModelViewer
                    isOpen={true}
                    onClose={() => setSelectedShoe(null)}
                    modelUrl={selectedShoe.modelUrl}
                    shoeName={selectedShoe.name}
                />
            )}
        </div>
    );
};

export default CatalogPage;
