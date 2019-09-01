import React from 'react'
import styles from './App.module.scss'
import FeedMenu from './components/Feed/FeedMenu'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.feedContainer}>
        <FeedMenu />
        <Feed />
      </div>
    </div>
  )
}

export default App
