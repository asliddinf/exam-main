import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomProvider } from "rsuite";
import { useState } from "react";

import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Time from "./pages/Time/Time";

function App() {
  const [products, setProducts] = useState([]);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const clearProducts = () => {
    setProducts([]);
  };


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
          element: <Products products={products} clearProducts={clearProducts} />,
        },
        {
          path: "/create-products",
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
