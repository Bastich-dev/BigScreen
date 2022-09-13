import Header from "@layout/Header";
import Footer from "@layout/Footer";
import MetaLinks from "@layout/MetaLinks";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Transitions from "@layout/Transitions";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaLinks />
      <Header />
      <main>
        <Transitions>
          <Component {...pageProps} />
        </Transitions>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
