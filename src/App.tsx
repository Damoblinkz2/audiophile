/**
 * App component is the root component of the application.
 * It sets up routing using React Router and fetches product data from Convex.
 * It renders different pages based on the current route.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import ProductGrid from "./pages/productGrid";
import Frame from "./pages/frame";
import ProductView from "./pages/productView";
import CheckOut from "./pages/checkOut";
import Home from "./pages/home";

/**
 * Main App component that handles routing and data fetching.
 * @returns The rendered App component.
 */
export default function App() {
  // Fetch all product data from Convex
  const allData = useQuery(api.myFunctions.listProducts);

  // Loading state while data is being fetched
  if (allData === undefined)
    return (
      <div className="h-[100%] flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );

  // Flatten all products from all documents (if you have more than one document)
  const allProducts = allData.flatMap((doc) => doc.products);

  return (
    <BrowserRouter>
      <Routes>
        {/* Frame component wraps all routes with navigation and layout */}
        <Route path="/" element={<Frame />}>
          {/* Home page */}
          <Route index element={<Home />} />

          {/* Dynamic routes for product categories and individual products */}
          {allData.map((item) => (
            <>
              {/* Product grid for a category */}
              <Route
                path={item.path}
                element={
                  <ProductGrid category={item.path} products={item.products} />
                }
              />

              {/* Individual product view */}
              <Route
                path={`${item.path}/:id`}
                element={<ProductView products={allProducts} />}
              />
            </>
          ))}

          {/* Checkout page */}
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
