import "./CommentForm.css"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

export default function CommentForm() {
  const commentForm = useForm();

  const { register, control } = commentForm

  return (
    <>
      <form>
        <label>Name
          <br />
          <input
            type="text"
            id="username"
            {...register("username")}
            />
        </label>

        <label>Comment
          <br />
          <input
            type="text"
            id="comment"
            {...register("comment")}
            />
        </label>

        <button>Submit</button>

      </form>
      <DevTool control={control} />
    </>
  )
}