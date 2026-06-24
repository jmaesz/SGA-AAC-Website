import { useState } from 'react'
import './ExerciseCard.css'

export default function ExerciseCard({ exercise, index }) {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="card">
      <div className="card-accent" aria-hidden="true" />

      <div className="card-body">
        <div className="card-top">
          <span className="card-num">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="card-name">{exercise.name}</h3>
        </div>
        <p className="card-desc">{exercise.description}</p>
        <div className="card-bottom">
          <span className="card-reps">{exercise.reps}</span>
          {exercise.video ? (
            !videoOpen ? (
              <button className="card-play-btn" onClick={() => setVideoOpen(true)}>
                <PlayIcon />
                Watch
              </button>
            ) : null
          ) : (
            <span className="card-no-video">Video coming soon</span>
          )}
        </div>
      </div>

      {exercise.video && videoOpen && (
        <div className="card-video-wrap">
          <video
            className="card-video"
            src={exercise.video}
            controls
            autoPlay
            onEnded={() => setVideoOpen(false)}
          />
          <button className="card-video-close" onClick={() => setVideoOpen(false)}>✕ Close</button>
        </div>
      )}
    </div>
  )
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  )
}
