import "./CommentForm.css"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

export default function CommentForm() {
  const commentForm = useForm({
    defaultValues: {
      username: "",
      commentText: ""
    }
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    reset
  } = commentForm

  console.log(formState)

  const {
    isSubmitSuccessful
  } = formState

  function onSubmit(formData) {
    console.log("Form Submitted", formData)
  }

  function onError(errors) {
    consol.log(errors)
  }

  useEffect (() => {
    console.log("use effect")
    if (isSubmitSuccessful) {
      reset()
    }
  }, [ isSubmitSuccessful ])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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