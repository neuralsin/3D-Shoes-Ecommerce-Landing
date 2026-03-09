# 3D Shoes Ecommerce Landing Page 🚀👟

A modern, interactive 3D shoes landing page built with **Next.js**, **Three.js**, and **Tailwind CSS**. Features stunning 3D shoe models for an immersive shopping experience.

## Features ✨

- 🔥 **3D Shoe Models** — Interactive models rendered with Three.js
- 🎨 **Sleek & Responsive UI** — Designed for all screen sizes
- ⚡ **Optimized Performance** — Powered by Next.js with Turbopack
- 🌐 **Dynamic Catalog** — Showcasing various shoe models with search
- 📜 **Smooth Animations** — Built with Framer Motion
- 📩 **Contact Page** — For customer inquiries

## Tech Stack 🛠️

- [Next.js](https://nextjs.org/) (React framework)
- [Three.js](https://threejs.org/) (3D rendering)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [Lucide React](https://lucide.dev/) (Icons)

## Getting Started 🏗️

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
git clone https://github.com/neuralsin/3D-Shoes-Ecommerce-Landing-Page.git
cd 3D-Shoes-Ecommerce-Landing-Page
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure 📁

```
├── app/
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ShoeCard.tsx
│   │   └── ShoeModelViewer.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── CatalogScreen.tsx
│   │   ├── BlogScreen.tsx
│   │   └── ContactScreen.tsx
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Entry point
│   └── globals.css     # Global styles
├── public/
│   ├── images/         # Static images
│   └── models/         # 3D GLB models
├── data.tsx            # Shoe product data
└── package.json
```

## Author

**Shaan Sahai**

- GitHub: [@neuralsin](https://github.com/neuralsin)
- LinkedIn: [Shaan Sahai](https://www.linkedin.com/in/shaan-sahai-a938b0387/)

## License

This project is open source and available under the [MIT License](LICENSE).
