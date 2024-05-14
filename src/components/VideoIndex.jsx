import"./VideoIndex.css"
import { useState } from "react"
import VideoListing from "./VideoListing.jsx"

export default function VideoIndex({videos}) {

  videos.sort((a, b) => b.statistics.likeCount - a.statistics.likeCount)

  const minLikes = videos.reduce((min, {statistics: {likeCount}}) => +likeCount < min ? +likeCount : min, Infinity)
  console.log(videos.map(({statistics: {likeCount}}) => likeCount))
  console.log(minLikes)

  return(
    <div className="video-page">
      <section className="videos">
        
        {videos.map((video) => (
          <VideoListing
            video={video}
            minLikes={minLikes}
            key={video.id}
          />
        ))}
      </section>
    </div>
  )
}