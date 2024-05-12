import "./Comments.css"
import { useState } from "react"
import UserComment from "./UserComment.jsx"

export default function Comments({
  videoID,
  comments
}) {

  return (
    <section className="comments">
      {comments.map(comment =>
        <UserComment comment={comment} key={comment.commentID} />
      )
      }
    </section>
  )
}