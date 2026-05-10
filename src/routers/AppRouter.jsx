import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/Profile";
import Order from "../pages/Order";
import Logout from "../pages/Logout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Product />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "order",
          element: <Order />,
        },
        {
          path: "products/:id",
          element: <ProductDetail />,
        },
      ],
    },
    { path: "*", element: <h1>Page Not Found</h1> },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
