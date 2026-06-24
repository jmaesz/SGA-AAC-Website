import { useState } from 'react'
import Header from './components/Header'
import TabSwitch from './components/TabSwitch'
import ExerciseGrid from './components/ExerciseGrid'
import SafetyNotes from './components/SafetyNotes'
import './App.css'

export default function App() {
  const [category, setCategory] = useState('standing')

  return (
    <div className="app">
      <div className="sticky-top">
        <Header />
        <TabSwitch active={category} onChange={setCategory} />
      </div>
      <main className="app-main">
        <SafetyNotes />
        <ExerciseGrid category={category} />
      </main>
      <footer className="app-footer">
        <a href="tel:18006506060" className="footer-hotline">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 5.68 19.79 19.79 0 01.81 2.05 2 2 0 012.8 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.91-.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          1800-650-6060
        </a>
        <a href="mailto:enquiries@aic.sg" className="footer-email">enquiries@aic.sg</a>
        <span className="footer-copy">© Silver Generation Office · AIC</span>
      </footer>
    </div>
  )
}
