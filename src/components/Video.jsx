import "./Video.css"

export default function Video({
  videos,
  videoMap,
  videoID
}) {

  const {
    snippet: {
      title,
      channelTitle
    }
  } = videos[videoMap[videoID]]
  
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
      <h4>{channelTitle}</h4>
    </div>
  )
}