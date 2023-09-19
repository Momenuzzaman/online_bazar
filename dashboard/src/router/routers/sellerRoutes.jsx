import { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));

const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);

const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
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
];
