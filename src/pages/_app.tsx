import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
       <ToastContainer />

      <Footer />
    </>
  );
}
