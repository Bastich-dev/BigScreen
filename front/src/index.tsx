// Core
import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/global.scss";

// Gsap / Animations
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

// React-toastify / Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Providers & Layout components
import AuthProvider from "src/providers/AuthProvider";
import RoutesProvider from "@providers/RoutesProvider";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("body") as HTMLElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RoutesProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </RoutesProvider>
    </AuthProvider>

    <Footer />
    <ToastContainer />
  </React.StrictMode>
);
