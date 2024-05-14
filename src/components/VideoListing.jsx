import "./VideoListing.css"
import { Link } from "react-router-dom"

export default function VideoListing({ video, minLikes }) {
  const {
    id,
    snippet,
    statistics: { likeCount }
  } = video

  const { title, channelTitle, channelId, thumbnails } = snippet
  const url = thumbnails?.maxres?.url || thumbnails.standard.url
  const rating = Math.floor(likeCount / minLikes)
  const fire  = "🔥".repeat(rating)
  let fireDisplay = fire
  if (rating > 5) {
    fireDisplay = `🔥 X ${rating}`
  }

  return (
    <article className="video-card">
      <img src={url} className="video-thumb" />
      {/* video autoplay */}
      {/* <iframe
      src={`https://www.youtube.com/embed/${id}?rel=0&controls=0&showinfo=0&autoplay=1&mute=1`}
      allow="autoplay" /> */}
      <div className="listing-details">
        <h4>{title}</h4>
        <a
          className="channel-title"
          href={`www.youtube.com/@${channelTitle}`}
          target="_blank"
        >{channelTitle} ● {fireDisplay}</a>
      </div>
      <Link to={`/videos/${id}`} className="card-link" />
    </article>
  )
}