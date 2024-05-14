// MockAPI
const SECRET = import.meta.env.VITE_MOCKAPI_SECRET
const URL = `https://${SECRET}.mockapi.io/db/comments`

// create video comment list for video
export async function createVideoCommentList(videoID) {

  let commentsDB = await fetch(URL)
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(err => console.log(err))

  const options = {
    method: "PUT",
    headers: {'content-type':'application/json'},
    body: JSON.stringify({...commentsDB, [videoID]: []})
  }

  return fetch(URL, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}

// get comments for video

export function getComments () {
  return fetch(URL)
    .then(response => response.json())
}

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