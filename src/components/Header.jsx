import './Header.css'
import logo from '/toprighthandcornerlogo.png'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-text">
          <p className="header-eyebrow">Silver Generation Office</p>
          <h1 className="header-title">Active Aging Guide</h1>
        </div>
        <img src={logo} alt="Silver Generation Office" className="header-logo" />
      </div>
    </header>
  )
}
