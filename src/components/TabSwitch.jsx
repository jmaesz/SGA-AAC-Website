import './TabSwitch.css'
import standingLogo from '/standinglogo.png'
import sittingLogo from '/sittinglogo.png'

export default function TabSwitch({ active, onChange }) {
  return (
    <nav className="tab-bar" role="tablist" aria-label="Exercise category">
      <button
        role="tab"
        aria-selected={active === 'standing'}
        className={`tab-item ${active === 'standing' ? 'tab-item--on' : ''}`}
        onClick={() => onChange('standing')}
      >
        <img src={standingLogo} alt="" className="tab-img" />
        <span className="tab-label">Can Stand</span>
      </button>
      <button
        role="tab"
        aria-selected={active === 'seated'}
        className={`tab-item ${active === 'seated' ? 'tab-item--on' : ''}`}
        onClick={() => onChange('seated')}
      >
        <img src={sittingLogo} alt="" className="tab-img tab-img--seated" />
        <span className="tab-label">Need a Chair</span>
      </button>
    </nav>
  )
}
