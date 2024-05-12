import "./VideoView.css"
import { useParams } from "react-router-dom"
import Video from "./Video.jsx"
import CommentForm from "./CommentForm.jsx"

export default function VideoView() {
  
  const { videoID } = useParams()

  return (
    <section className="video-view">
      <Video videoID={videoID}/>
      <div className="comment-section">
        <CommentForm />
        <h3>Comments</h3>
      </div>
    </section>
  )
}