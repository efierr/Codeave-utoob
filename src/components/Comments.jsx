import "./Comments.css"
import { useState } from "react"
import UserComment from "./UserComment.jsx"

export default function Comments({
  videoID,
  comments
}) {

  const numComments = comments.length

  return (
    <section className="comments">
      <h3>{numComments} Comments</h3>
      {comments.map(comment =>
        <UserComment comment={comment} key={comment.commentID} />
      )
      }
    </section>
  )
}