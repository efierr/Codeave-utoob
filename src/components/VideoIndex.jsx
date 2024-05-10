import { useState } from "react"
import Video from "./component/Video.jsx"

export default function VideoIndex() {
  const [ videos, setVideos ] = useState([
    {
    "videoThumb": "Video Thumb",
    "title": "Title",
    "id": 1
    },
    {
    "videoThumb": "Video Thumb",
    "title": "Title",
    "id": 2
    },
  ])

  return(
    <section className="videos">
      {videos.map((video) => (
        <Video
          video={video}
          key={video.id}
        />
      ))}
    </section>
  )
}