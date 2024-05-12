import "./UserComment.css"

export default function UserComment({ comment }) {
  const {
    username,
    commentText,
    commentID
  } = comment

  return (
    <div className="comment">
      <h4>{username}</h4>
      <p>{commentText}</p>
    </div>
  )
}