import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import videoDB from "./utils/videoDB.json"
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx"
import VideoIndex from "./components/VideoIndex.jsx"
import VideoView from "./components/VideoView.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx";

const videoMap = {};
videoDB.items
  .forEach(({id}, idx) => videoMap[id] = idx)

export default function App() {
  const [ videos, setVideos ] = useState(videoDB.items)

  return (
    <>
    <header>
      <Nav/>
      <Search/>
    </header>
    <main> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoIndex
          videos={videos} />} />
        <Route path="/videos/:videoID"
          element={<VideoView
            videos={videos}
            videoMap={videoMap}
          />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}
