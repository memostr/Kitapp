import "../styles/globals.scss"
import { ProductProvider } from "../contexts/product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={3000}
        theme="colored"
        className="toastify"
        hideProgressBar
        pauseOnFocusLoss={false}
      />
    </ProductProvider>
  );
}

export default MyApp;
