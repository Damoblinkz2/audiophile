# Audiophile E-Commerce Website

A modern, responsive e-commerce platform for high-quality audio products, built with React, Vite, and Convex. This project showcases a full-stack application featuring product browsing, detailed views, shopping cart functionality, and a seamless checkout process.

## 🚀 Features

- **Product Catalog**: Browse headphones, speakers, and earphones with detailed product information
- **Product Categories**: Organized navigation for headphones, speakers, and earphones
- **Product Details**: In-depth product pages with features, gallery, and specifications
- **Shopping Cart**: Add products to cart with quantity management
- **Checkout Process**: Complete checkout flow with billing and shipping information
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, accessible design using Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: Convex (serverless backend-as-a-service)
- **Build Tool**: Vite
- **State Management**: React Context API
- **Development**: ESLint, Prettier, TypeScript

## 📁 Project Structure

```
audiophile/
├── convex/                 # Backend functions and schema
│   ├── _generated/         # Auto-generated Convex files
│   ├── myFunctions.ts      # Database queries
│   └── schema.ts           # Database schema definition
├── public/                 # Static assets
│   └── assets/             # Product images
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── banner.tsx
│   │   ├── button.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── input.tsx
│   │   ├── navBar.tsx
│   │   ├── productCard.tsx
│   │   ├── productDescription.tsx
│   │   ├── productDetails.tsx
│   │   ├── productDisplay.tsx
│   │   ├── productGallery.tsx
│   │   ├── shopCard.tsx
│   │   ├── shopCardItem.tsx
│   │   └── youMayLike.tsx
│   ├── context/            # React Context for state management
│   │   └── context.tsx
│   ├── pages/              # Page components
│   │   ├── checkOut.tsx
│   │   ├── frame.tsx
│   │   ├── home.tsx
│   │   ├── productGrid.tsx
│   │   └── productView.tsx
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.tsx            # App entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Damoblinkz2/audiophile.git
   cd audiophile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Convex:

   ```bash
   npx convex dev --until-success
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start both the frontend (Vite) and backend (Convex) in parallel.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Database Schema

The application uses Convex for data management with the following schema:

- **data**: Stores product categories and their associated products
  - `path`: Category path (e.g., "headphones", "speakers")
  - `products`: Array of product objects with details like id, name, price, description, etc.

## 🎨 Design System

- **Colors**: Custom CSS variables for consistent theming
- **Typography**: Responsive text sizing with proper hierarchy
- **Layout**: Flexbox and Grid for responsive layouts
- **Components**: Modular, reusable components following React best practices

## 🔧 Available Scripts

- `npm run dev` - Start development servers (frontend + backend)
- `npm run dev:frontend` - Start only the Vite dev server
- `npm run dev:backend` - Start only the Convex dev server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🙏 Acknowledgments

- Design inspiration from Frontend Mentor challenges
- Built with modern web technologies for optimal performance
- Focus on accessibility and user experience
