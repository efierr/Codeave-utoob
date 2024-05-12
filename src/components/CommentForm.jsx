import "./CommentForm.css"
import { useForm } from "react-hook-form"

export default function CommentForm() {
  const commentForm = useForm();

  const { register } = commentForm

  return (
    <form>
      <label>Name
        <br />
        <input type="text" id="username"
        name="username" />
      </label>

      <label>Comment
        <br />
        <input type="text" id="comment"
        name="comment" />
      </label>

      <button>Submit</button>

    </form>
  )
}