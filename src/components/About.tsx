import React from 'react'
import styles from './About.module.scss'
import AboutGrid from './About/AboutGrid'

const AboutList = () => {
  return (
    <div className={styles.root}>
      <div className={styles.aboutContainer}>
        <AboutGrid />
      </div>
    </div>
  )
}

export default AboutList
