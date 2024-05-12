import "./CommentForm.css"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

export default function CommentForm() {
  const commentForm = useForm();
  const { register, control, handleSubmit } = commentForm

  function onSubmit(formData) {
    // e.preventDefault()
    console.log("Form Submitted", formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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