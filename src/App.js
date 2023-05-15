import { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Detail from "./routes/Datail";
import Home from "./routes/Home";

const App = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie", element: <Detail /> },
]);

export default App;
