import React from "react";
import Header from "./components/header/Header";
import MyRoutes from "./myRoutes/MyRoutes";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
