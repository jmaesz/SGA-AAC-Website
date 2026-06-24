import './SafetyNotes.css'

const notes = [
  'If you are feeling unwell, do not attempt these exercises.',
  'Stop immediately if you feel dizzy, breathless, or any chest pain.',
  'If you have a fall or feel faint, sit down and call for help.',
  'Check with your doctor before starting if you have health conditions.',
]

export default function SafetyNotes() {
  return (
    <section className="safety-section">
      <div className="safety-inner">
        <div className="safety-row">
          <div className="safety-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h3 className="safety-title">Before you begin</h3>
        </div>
        <ul className="safety-list">
          {notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
