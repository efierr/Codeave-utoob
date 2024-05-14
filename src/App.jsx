import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { getMostPlayed } from "./utils/youtubeFetch.js"
import videoDB from "./utils/videoDB.json"
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx"
import VideoIndex from "./components/VideoIndex.jsx"
import VideoView from "./components/VideoView.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx";

export default function App() {
  const [ videos, setVideos ] = useState([])
  const [ videoMap, setVideoMap ] = useState({})

  useEffect(() => {
    if (!videos.length) {
      getMostPlayed()
      .then(data => {
        setVideos(data.items)
        setVideoMap(indexVideos(data.items))
      })
      .catch(err => console.error(err))
    }
  }, [])

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

// helper - index videos
function indexVideos(arr) {
  const indexedVideos = {}
  arr.forEach(({id}, idx) => indexedVideos[id] = idx)
  return indexedVideos
}