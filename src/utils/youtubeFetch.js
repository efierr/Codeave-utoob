const acApiKey= import.meta.env.VITE_YOUTUBE_API_KEY

const URL = "https://www.googleapis.com/youtube/v3/videos"

// get 20 most played
export function getMostPlayed() {
  const query = "part=snippet&part=statistics&chart=mostPopular&maxResults=20&regionCode=US" 
  return fetch(`${URL}?${query}&key=${acApiKey}`)
    .then(response => response.json())
}

// get video
export function getVideo(videoID) {
  const query=`part=snippet&id=${videoID}`
  return fetch(`${URL}?${query}&key=${acApiKey}`)
    .then(response => response.json())
}

//search for videos
export function searchForVideos(q) {
  const ytURL = "https://youtube.googleapis.com/youtube/v3/"
  const query = 'search?part=snippet&type=video'
  const encodedQ = encodeURIComponent(q)
  return fetch(`${ytURL}${query}&q=${encodedQ}&key=${acApiKey}`)
    .then(response => response.json())
}