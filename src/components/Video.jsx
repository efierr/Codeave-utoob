import "./Video.css"
import { useState, useEffect } from "react"
import { getVideo } from "../utils/youtubeFetch.js"

export default function Video({
  videos,
  videoMap,
  videoID
}) {
  const [ video, setVideo ] = useState({})

  useEffect(() => {
    getVideo(videoID)
      .then(data => {
        setVideo(data.items[0])
      })
  },[])

    // const { title, channelTitle } = video.snippet?
  const title = video.snippet?.title
  const channelTitle = video.snippet?.channelTitle
  const publishedAt = video.snippet?.publishedAt
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const publishDate = new Date(publishedAt).toLocaleDateString(undefined, options) 

  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${videoID}`}
        align="center"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <h4>{title}</h4>
      <h4>{channelTitle} ● {publishDate}</h4>
    </div>
  )
}