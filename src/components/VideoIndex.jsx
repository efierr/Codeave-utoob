import"./VideoIndex.css"
import { useState } from "react"
import db from "../utils/db.json"
import Video from "./VideoListing.jsx"

export default function VideoIndex() {
  const [ videos, setVideos ] = useState(db.items)

  return(
    <div className="video-page">
      <h2>Videos After Search</h2>
      <section className="videos">
        
        {videos.map((video) => (
          <Video
          video={video}
          key={video.id}
          />
        ))}
      </section>
    </div>
  )
}