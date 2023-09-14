import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="Lading......">
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#283046",
              color: "white",
            },
          }}
        />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
