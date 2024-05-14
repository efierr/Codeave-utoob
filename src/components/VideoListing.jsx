import "./VideoListing.css"
import { Link } from "react-router-dom"

export default function VideoListing({ video }) {
  const {
    id,
    snippet
  } = video

  const { title, channelTitle, channelId, thumbnails } = snippet
  const url = thumbnails?.maxres?.url || thumbnails.standard.url

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
        >{channelTitle}</a>
      </div>
      <Link to={`/videos/${id}`} className="card-link" />
    </article>
  )
}