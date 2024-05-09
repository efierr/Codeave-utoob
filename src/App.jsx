import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";

export default function App() {
  return (
    <>
    <header>
     <Nav/>
     <Search/>

    </header>
    </>
  );
}

