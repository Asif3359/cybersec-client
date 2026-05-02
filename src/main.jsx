import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home";
import Intelligence from "./pages/Intelligence";
import Threats from "./pages/Threats";
import Support from "./pages/Support";
import Login from "./pages/login";
import Register from "./pages/Registration";
import VerifyOTP from "./pages/VerifyOtp";
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/intelligence",
    element: <Intelligence />
  },
  {
    path: "/threats",
    element: <Threats />
  },
  {
    path: "/support",
    element: <Support />
  },
  {
  path: "/login",
  element: <Login></Login>
},
{
  path: "/register",
  element: <Register></Register>
},
 {
    path: "/verify",
    element: <VerifyOTP></VerifyOTP>
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);