import React from 'react'
import styles from './FeedMenu.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Places from '../Places'

const FeedMenu = () => {
  return (
    <Router>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li>Home</li>
          <Link to="/places/">Places</Link>
          <li>People</li>
          <li>Tags</li>
          <li>About</li>
        </ul>
      </div>
      <Route path="/places/" component={Places} />
    </Router>
  )
}

export default FeedMenu
