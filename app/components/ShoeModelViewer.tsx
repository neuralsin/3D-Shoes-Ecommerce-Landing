//ShoeModelViewer component
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { X, Maximize2, Minimize2, RotateCw } from "lucide-react";

// Define prop types
interface ShoeModelViewerProps {
  isOpen: boolean;
  onClose: () => void;
  modelUrl: string;
  shoeName: string;
}

// 3D Viewer Modal Component
const ShoeModelViewer: React.FC<ShoeModelViewerProps> = ({
  isOpen,
  onClose,
  modelUrl,
  shoeName,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;

    // Three.js setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Load 3D Model
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        scene.add(gltf.scene);
        setIsLoading(false);

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        gltf.scene.scale.multiplyScalar(scale);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setIsLoading(false);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [isOpen, modelUrl]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;

      const container = containerRef.current;
      const renderer = rendererRef.current;
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative bg-gray-900 rounded-xl overflow-hidden ${
              isFullscreen ? "w-full h-full" : "w-[800px] h-[600px]"
            }`}
          >
            {/* Control Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent">
              <h2 className="text-xl font-bold text-white">{shoeName}</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  {isFullscreen ? <Minimize2 /> : <Maximize2 />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <X />
                </button>
              </div>
            </div>

            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="flex items-center space-x-2">
                  <RotateCw className="w-6 h-6 text-cyan-400 animate-spin" />
                  <span className="text-white">Loading model...</span>
                </div>
              </div>
            )}

            {/* 3D Viewer Container */}
            <div
              ref={containerRef}
              className="w-full h-full"
              style={{ touchAction: "none" }}
            />

            {/* Instructions Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-center">
              <p className="text-gray-300 text-sm">
                Click and drag to rotate • Scroll to zoom • Right click to pan
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShoeModelViewer;
