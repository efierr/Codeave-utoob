import "./VideoView.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCommentDB, createVideoCommentList } from "../utils/mockApiFetch.js"
import commentDB from "../utils/commentDB.json"
import Video from "./Video.jsx"
import CommentForm from "./CommentForm.jsx"
import Comments from "./Comments.jsx"

export default function VideoView({
  videos,
  videoMap
}) {
  const { videoID } = useParams()
  const [ commentDB, setCommentDB ] = useState({})
  const [ comments, setComments ] = useState(commentDB[videoID] || [])

  useEffect(() => {
    getCommentDB()
      .then(commentDB => {
        if (!commentDB[videoID]) {
          createVideoCommentList(commentDB, videoID)
        }
        setCommentDB(commentDB)
        setComments(commentDB[videoID] || [])
      })
      .catch(err => console.log(err))
  }, [videoID])

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
          commentDB={commentDB}
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