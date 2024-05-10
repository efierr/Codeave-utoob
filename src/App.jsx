import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx"
import VideoIndex from "./components/VideoIndex.jsx"

export default function App() {
  return (
    <>
    <header>
     <Nav/>
     <Search/>

    </header>
    <main>
      <Home />
      <VideoIndex />
    </main>
    </>
  );
}

