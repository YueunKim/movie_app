// import { useEffect, useState } from "react";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Datail";
// import Navi from "./components/Navi";
import "./App.css";

const App = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default App;
