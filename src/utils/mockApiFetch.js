// MockAPI
const SECRET = import.meta.env.VITE_MOCKAPI_SECRET
const URL = `https://${SECRET}.mockapi.io/db/comments`

// get comment database
export function getCommentDB () {
  return fetch(URL)
    .then(response => response.json())
}

// create video comment list for video
export function createVideoCommentList(commentDB, videoID) {

  const options = {
    method: "PUT",
    headers: {'content-type':'application/json'},
    body: JSON.stringify({...commentDB, [videoID]: []})
  }

  return fetch(URL, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    // .then(res => console.log(res))
    .catch(err => console.error(err))
}

// addComment
export function addComment(updatedCommentDB) {

  const options = {
    method: "PUT",
    headers: {'content-type':'application/json'},
    body: JSON.stringify(updatedCommentDB)
  }

  return fetch(URL, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}
