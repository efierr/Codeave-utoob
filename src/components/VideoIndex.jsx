import"./VideoIndex.css"
import { useState } from "react"
import Video from "./Video.jsx"

export default function VideoIndex() {
  const [ videos, setVideos ] = useState([
    {
      "videoThumb": "Video Thumb",
      "title": "Title",
      "duration": "3:57",
      "id": 1
    },
    {
      "videoThumb": "Video Thumb",
      "title": "Title",
      "duration": "5:25",
      "id": 2
    },
    {
      "videoThumb": "Video Thumb",
      "title": "Title",
      "duration": "10:26",
      "id": 3
      },
      {
      "videoThumb": "Video Thumb",
      "title": "Title",
      "duration": "8:26",
      "id": 4
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