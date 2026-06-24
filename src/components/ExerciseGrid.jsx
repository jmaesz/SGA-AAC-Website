import VideoSection from './VideoSection'
import standingImg from '/standing.png'
import sittingImg from '/sitting.png'
import './ExerciseGrid.css'

const videos = {
  standing: {
    videoId: 'RIIJgWC6rFs',
    title: 'Gentle Low Impact All-in-One Exercises for Seniors — 30 min',
    description:
      'A 30-minute gentle, low-impact full-body routine you can follow along at home. No equipment needed — just clear some floor space and go at your own pace.',
  },
  seated: {
    videoId: '7TMyScomzic',
    title: '30-Min Seated Chair Exercises for Seniors — No equipment',
    description:
      'A 30-minute seated workout you can do entirely from a chair. Perfect if standing is difficult — just follow along at your own pace, no equipment needed.',
  },
}

const images = {
  standing: { src: standingImg, alt: 'Active Aging Guide — exercises for seniors comfortable with standing' },
  seated:   { src: sittingImg,  alt: 'Active Aging Guide — exercises for seniors with difficulty standing' },
}

export default function ExerciseGrid({ category }) {
  const video = videos[category]
  const image = images[category]

  return (
    <section className="grid-section">
      <div className="grid-inner">
        <VideoSection {...video} />
        <div className="guide-img-card">
          <div className="guide-img-label">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
            </svg>
            Picture Guide — follow along at your own pace
          </div>
          <img src={image.src} alt={image.alt} className="guide-img" />
        </div>
      </div>
    </section>
  )
}
