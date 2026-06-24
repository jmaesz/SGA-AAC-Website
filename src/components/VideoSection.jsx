import './VideoSection.css'

export default function VideoSection({ videoId, title, description }) {
  return (
    <div className="video-section">
      <div className="video-label">Follow-along video</div>
      <div className="video-embed-wrap">
        <iframe
          className="video-embed"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-meta">
        <p className="video-title">{title}</p>
        <p className="video-desc">{description}</p>
      </div>
    </div>
  )
}
