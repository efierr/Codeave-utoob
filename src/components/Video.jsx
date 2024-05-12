import "./Video.css"

export default function Video({ videoID }) {
  
  console.log(videoID)
  return (
    <div className="video">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
  )
}