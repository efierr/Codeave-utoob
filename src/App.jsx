import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { getMostPlayed } from "./utils/fetch.js"
import videoDB from "./utils/videoDB.json"
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx"
import VideoIndex from "./components/VideoIndex.jsx"
import VideoView from "./components/VideoView.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx";

const videoMap = {};
function indexVideos(arr) {
  arr
    .forEach(({id}, idx) => videoMap[id] = idx)
}

export default function App() {
  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    if (!videos.length) {
      getMostPlayed()
      .then(data => {
        setVideos(data.items)
      })
      .catch(err => console.error(err))
    }
  }, [])
  
  indexVideos(videos)

  return (
    <>
    <header>
      <Nav/>
      <Search/>
    </header>
    <main> 
       <Routes>
        <Route path="/"
          element={<VideoIndex
            videos={videos} />}
        />
        <Route path="/videos/:videoID"
          element={<VideoView
            videos={videos}
            videoMap={videoMap}
          />}
        />
        <Route path="/about"
          element={<About />}
        />
      </Routes>
    </main>
    <Footer />
    </>
  );
}
