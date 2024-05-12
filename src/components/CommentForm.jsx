import "./CommentForm.css"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

export default function CommentForm({
  videoID,
  comments,
  setComments
}) {
  const commentForm = useForm({
    defaultValues: {
      username: "",
      commentText: "",
      commentID: ""
    }
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    reset
  } = commentForm

  const {
    errors,
    isSubmitSuccessful
  } = formState

  function onSubmit(formData) {
    console.log("Form Submitted", formData)
    setComments([...comments, {...formData, [formData.commentID]: generateRandomID()}])
  }

  function generateRandomID() {
    return String(Math.floor(Math.random()*9999)).padStart(4,"0")
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