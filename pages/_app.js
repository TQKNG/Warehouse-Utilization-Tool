import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <ToastContainer
       autoClose={1000}
       newestOnTop={false}
       closeOnClick={false}
       rtl={false} 
       />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
