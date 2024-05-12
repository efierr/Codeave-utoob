import "./VideoListing.css"
import { Link } from "react-router-dom"

export default function VideoListing({ video }) {
  const {
    id,
    snippet: {
      title,
      channelTitle,
      channelId,
      thumbnails: {
        maxres: {
          url
        }
      }
    }
  } = video


  return (
    <article className="video-card">
        <img src={url} className="video-thumb" />
        <div className="listing-details">
          <h4>{title}</h4>
          <a className="channel-title" href={`www.youtube.com/@${channelTitle}`} target="_blank" >{channelTitle}</a>
        </div>
        <Link to={`/videos/${id}`} className="card-link" />
      </article>
  )
}