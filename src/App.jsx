import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomProvider } from "rsuite";
import { useState } from "react";

import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Time from "./pages/Time/Time";

function App() {
  // ❗ Markaziy state
  const [products, setProducts] = useState([]);

  // Mahsulot qo‘shish
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Barcha mahsulotlarni o‘chirish
  const clearProducts = () => {
    setProducts([]);
  };

  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/products",
          // ❗ props orqali products va clearProducts uzatiladi
          element: <Products products={products} clearProducts={clearProducts} />,
        },
        {
          path: "/create-products",
          // ❗ props orqali addProduct uzatiladi
          element: <CreateProduct addProduct={addProduct} />,
        },
        {
          path: "/time",
          element: <Time />,
        },
      ],
    },
  ]);

  return (
    <CustomProvider theme={"light"}>
      <RouterProvider router={router} />
    </CustomProvider>
  );
}

export default App;
