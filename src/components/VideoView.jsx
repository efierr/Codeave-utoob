import "./VideoView.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import commentDB from "../util/commentDB.json"
import Video from "./Video.jsx"
import CommentForm from "./CommentForm.jsx"
import Comments from "./Comments.jsx"

export default function VideoView() {
  const { videoID } = useParams()
  const [ comments, setComments ] = useState(commentDB[videoID] || [])
  
  console.log(comments)

  return (
    <section className="video-view">
      <Video videoID={videoID}/>
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