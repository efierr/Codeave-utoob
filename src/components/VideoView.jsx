import "./VideoView.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import commentDB from "../utils/commentDB.json"
import Video from "./Video.jsx"
import CommentForm from "./CommentForm.jsx"
import Comments from "./Comments.jsx"

export default function VideoView({
  videos,
  videoMap
}) {
  const { videoID } = useParams()
  const [ comments, setComments ] = useState(commentDB[videoID] || [])

  return (
    <section className="video-view">
      <Video
        videos={videos}
        videoMap={videoMap}
        videoID={videoID}
        />
      <div className="comment-section">
        <CommentForm
          videoID={videoID}
          comments={comments}
          setComments={setComments}
        />
        <Comments
          videoID={videoID}
          comments={comments}
        />
      </div>
    </section>
  )
}