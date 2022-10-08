// Core
import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/_index.scss";

// Gsap / Animations
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

// React-toastify / Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Providers & Layout components
import AuthProvider from "@providers/AuthProvider";
import RoutesProvider from "@providers/RoutesProvider";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import TransitionProvider from "@providers/TransitionProvider";
import { Outlet } from "react-router-dom";
import TopFade from "@components/TopFade";
import LoadingProvider from "@providers/LoadingProvider";

const root = ReactDOM.createRoot(document.querySelector("body"));

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <AuthProvider>
        <RoutesProvider>
          <TopFade />
          <Header />
          <TransitionProvider>
            <Outlet />
          </TransitionProvider>
        </RoutesProvider>
      </AuthProvider>
    </LoadingProvider>

    <Footer />
    <ToastContainer />
  </React.StrictMode>
);
