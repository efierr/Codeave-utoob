const acApiKey= import.meta.env.VITE_YOUTUBE_API_KEY

const URL = "https://www.googleapis.com/youtube/v3/videos"

// get 20 most played
export function getMostPlayed() {
  const query = "part=snippet&chart=mostPopular&maxResults=20&regionCode=US" 
  return fetch(`${URL}?${query}&key=${acApiKey}`)
    .then(response => response.json())
}

// get video
export function getVideo(videoID) {
  const query=`part=snippet&id=${videoID}`
  return fetch(`${URL}?${query}&key=${acApiKey}`)
    .then(response => response.json())
}