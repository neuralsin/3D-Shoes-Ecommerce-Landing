import React, { useState } from "react";
import { motion } from "framer-motion";
import ShoeModelViewer from "./ShoeModelViewer";

interface Shoe {
  name: string;
  image: string;
  modelUrl: string;
}

interface ShoeCardProps {
  shoe: Shoe;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ shoe }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
      <motion.div className="relative bg-gray-900 rounded-xl overflow-hidden group">
        <div
          className="relative h-64 overflow-hidden cursor-pointer"
          onClick={() => setIsModelOpen(true)}
        >
          <motion.img
            src={shoe.image}
            alt={shoe.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              View 3D Model
            </span>
          </div>
        </div>
      </motion.div>

      <ShoeModelViewer
        isOpen={isModelOpen}
        onClose={() => setIsModelOpen(false)}
        modelUrl={shoe.modelUrl}
        shoeName={shoe.name}
      />
    </>
  );
};

export default ShoeCard;
