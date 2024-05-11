import "./VideoListing.css"

export default function VideoListing({ video }) {
  const {
    id,
    snippet: { title }
  } = video

  return (
    <article className="video-card">
      <div className="video-thumb"></div>
      <h3>{title}</h3>
    </article>
  )
}