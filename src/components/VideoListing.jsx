import "./VideoListing.css"
import { Link } from "react-router-dom"

export default function VideoListing({ video }) {
  const {
    id,
    snippet: {
      title,
      thumbnails: {
        maxres: {
          url
        }
      }
    }
  } = video


  return (
    <Link to={`/videos/${id}`} >
      <article className="video-card">
        <img src={url} className="video-thumb" />
        <h3>{title}</h3>
      </article>
    </Link>
  )
}