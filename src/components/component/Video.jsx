export default function Video({ video }) {
  const {
    videoThumb,
    title,
    id
  } = video
  return (
    <article className="video-card">
      <h2>{videoThumb}</h2>
      <h3>{title}</h3>
    </article>
  )
}