import { useEffect, useState } from "react";
import "./App.css";

import Router from "./router/Router";
import publicRoutes from "./router/routers/publicRoutes";
import { getRoutes } from "./router/routers";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  const routes = getRoutes();

  useEffect(() => {
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
