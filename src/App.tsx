import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import ProductGrid from "./pages/productGrid";
import Frame from "./pages/frame";
import ProductView from "./pages/productView";
import CheckOut from "./pages/checkOut";
import Home from "./pages/home";

export default function App() {
  const allData = useQuery(api.myFunctions.listProducts);

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
        <Route path="/" element={<Frame />}>
          <Route index element={<Home />} />
          {allData.map((item) => (
            <>
              <Route
                path={item.path}
                element={
                  <ProductGrid category={item.path} products={item.products} />
                }
              />
              <Route
                path={`${item.path}/:id`}
                element={<ProductView products={allProducts} />}
              />
            </>
          ))}
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
