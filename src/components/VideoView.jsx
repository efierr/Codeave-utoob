import "./VideoView.css"
import { useParams } from "react-router-dom"
import Video from "./Video.jsx"
import CommentForm from "./CommentForm.jsx"
import Comments from "./Comments.jsx"

export default function VideoView() {
  
  const { videoID } = useParams()

  return (
    <section className="video-view">
      <Video videoID={videoID}/>
      <div className="comment-section">
        <CommentForm />
        <Comments videoID={videoID} />
      </div>
    </section>
  )
}