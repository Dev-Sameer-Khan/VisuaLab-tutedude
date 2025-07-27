
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Product from "../pages/Product";
import SellerDashboard from "../pages/SellerDashboard";
import VendorDashboard from "../pages/VendorDashboard";
import App from "../pages/App";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:slug",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vendor/dashboard",
    element: <VendorDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SignUp",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
