import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/fontawesome/all.min.css";
import "./styles/fontawesome/sharp-solid.min.css";
import "./styles/fontawesome/sharp-regular.min.css";
import "./styles/scss/style.scss";
// import Cursor from "./components/utils/Cursor.tsx";
import { ToastContainer } from "react-toastify";
import { Providers } from "./redux/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      {/* <Cursor /> */}
      <App />
      <ToastContainer />
    </Providers>
  </StrictMode>
);
