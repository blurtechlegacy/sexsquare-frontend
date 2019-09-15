import React from 'react'
import styles from './Feed.module.scss'
import Feed from './Feed/FeedList'
import TopPlaces from './Feed/TopPlaces'

const FeedList = () => {
  return (
    <div className={styles.root}>
      <div className={styles.feedContainer}>
        <Feed />
        <TopPlaces />
      </div>
    </div>
  )
}

export default FeedList
