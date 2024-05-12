import "./CommentForm.css"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

export default function CommentForm() {
  const commentForm = useForm({
    defaultValues: {
      username: "",
      commentText: ""
    }
  });
  const { register, control, handleSubmit } = commentForm

  function onSubmit(formData) {
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
            required
            />
        </label>

        <label>Comment
          <br />
          <input
            type="text"
            id="commentText"
            {...register("commentText")}
            required
            />
        </label>

        <button>Submit</button>

      </form>
      <DevTool control={control} />
    </>
  )
}