import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx"
import VideoIndex from "./components/VideoIndex.jsx"
import VideoView from "./components/VideoView.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <>
    <header>
      <Nav/>
      <Search/>
    </header>
    <main> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoIndex />} />
        <Route path="/videos/:videoID" element={<VideoView />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}
