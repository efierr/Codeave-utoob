import "./Comments.css"
import { useState } from "react"
import commentDB from "../util/commentDB.json"
import UserComment from "./UserComment.jsx"

export default function Comments({ videoID }) {
  const [ comments, setComments ] = useState(commentDB[videoID])

  console.log(comments)

  return (
    <section className="comments">
      {comments.map(comment =>
        <UserComment comment={comment} key={comment.commentID} />
      )
      }
    </section>
  )
}