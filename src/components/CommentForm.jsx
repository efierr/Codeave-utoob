import "./CommentForm.css"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { addComment } from "../utils/mockApiFetch"

export default function CommentForm({
  videoID,
  commentDB,
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

  function onSubmit(comment) {

    const commentWID = {...comment, ["commentID"]: generateRandomID() } // add random ID to user's comment
    const updatedComments = [...comments, commentWID] // add the users comment to video's comments
    const updatedCommentDB = {...commentDB, [videoID]: updatedComments} // make a new copy of commentDB with new property

    addComment(updatedCommentDB)
      .then(res => res)
      .catch(err => console.error(err))

    setComments(updatedComments)
  }

  function generateRandomID() {
    return String(Math.floor(Math.random()*9999)).padStart(4,"0")
  }

  function onError(errors) {
    consol.log(errors)
  }

  useEffect (() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [ isSubmitSuccessful ])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Username
          <br />
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="Add your username..."
            required
            />
        </label>

        <label>Comment
          <br />
          <input
            type="text"
            id="commentText"
            {...register("commentText")}
            placeholder="Add a comment..."
            required
            />
        </label>

        <button>Comment</button>

      </form>
      {/* <DevTool control={control} /> */}
    </div>
  )
}