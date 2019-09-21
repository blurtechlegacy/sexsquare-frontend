import React from 'react'
import styles from './AboutGrid.module.scss'
import AboutCard from './AboutCard'

const developers = [
  {
    firstname: 'Nina',
    lastname: 'Torgunakova',
    nickname: 'SeagullNina',
    info: 'Ideological Mastermind and Frontend Developer',
    image: '../assets/images/developers/SeagullNina.jpg',
  },
  {
    firstname: 'Alexandr',
    lastname: 'Sidorenko',
    nickname: 'MacOSO',
    info: 'Lead Frontend Developer',
    image: '../assets/images/developers/MacOSO.jpg',
  },
  {
    firstname: 'Alexandr',
    lastname: 'Bulatov',
    nickname: 'AlexBulatov',
    info: 'Lead Backend Developer',
    image: '../assets/images/developers/AlexBulatov.jpg',
  },
  {
    firstname: 'Sergey',
    lastname: 'Grechishnikov',
    nickname: 'SrgGrch',
    info: 'Lead Mobile Developer (Android)',
    image: '../assets/images/developers/SrgGrch.jpg',
  },
  {
    firstname: 'Vitaly',
    lastname: 'Shatalov',
    nickname: 'tnnNull',
    info: 'Frontend developer',
    image: '../assets/images/developers/tnnNull.jpg',
  }
]

const AboutGrid = () => {
  return (
    <div className={styles.aboutGrid}>
      {developers.map(item => (
        <AboutCard person={item} />
      ))}
    </div>
  )
}

export default AboutGrid
