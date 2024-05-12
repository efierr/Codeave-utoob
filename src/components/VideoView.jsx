import "./VideoView.css"
import { useParams } from "react-router-dom"
import Video from "./Video.jsx"

export default function VideoView() {
  
  const { videoID } = useParams()

  return (
    <section className="video-view">
      <Video videoID={videoID}/>
      <div className="comment-section">
        <h3>Comment Form</h3>
        <h3>Comments</h3>
      </div>
    </section>
  )
}