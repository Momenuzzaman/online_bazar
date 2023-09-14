import { useState } from "react";
import "./App.css";

import Router from "./router/Router";
import publicRoutes from "./router/routers/publicRoutes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
