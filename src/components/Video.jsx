import "./Video.css"

export default function Video({ video }) {
  const {
    videoThumb,
    title,
    id
  } = video
  return (
    <article className="video-card">
      <div className="video-thumb"></div>
      <h3>{title}</h3>
    </article>
  )
}