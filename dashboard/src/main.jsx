import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="Lading......">
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
