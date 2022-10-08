import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { routes } from "@providers/RoutesProvider";
import AdminLayout from "@layout/AdminLayout";

export default function Transitions({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.set("main", { opacity: 0 });
    gsap.to("main", { opacity: 1, delay: 0.6, duration: 0.3 });
  }, [pathname]);

  return pathname.includes("/admin") ? <AdminLayout>{children}</AdminLayout> : <main>{children}</main>;
}
