import"./VideoIndex.css"
import { useState } from "react"
import videoDB from "../utils/videoDB.json"
import VideoListing from "./VideoListing.jsx"

export default function VideoIndex() {
  const [ videos, setVideos ] = useState(videoDB.items)

  return(
    <div className="video-page">
      <h2>Videos After Search</h2>
      <section className="videos">
        
        {videos.map((video) => (
          <VideoListing
            video={video}
            key={video.id}
          />
        ))}
      </section>
    </div>
  )
}