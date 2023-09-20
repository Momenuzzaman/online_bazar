import { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));

const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);

const AddProduct = lazy(() => import("../../views/seller/AddProduct"));

const Products = lazy(() => import("../../views/seller/Products"));

const DiscountProduct = lazy(() =>
  import("../../views/seller/DiscountProducts")
);

const Orders = lazy(() => import("../../views/seller/Orders"));

const Payment = lazy(() => import("../../views/seller/Payment"));
export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payment />,
    role: "seller",
    status: "active",
  },
];
