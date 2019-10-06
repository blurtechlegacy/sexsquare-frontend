import React from 'react'
import styles from './Achievements.module.scss'
import { IProfile } from '../Profile'
import Achievement from './Achievement'

interface IProps {
  profile: IProfile
}

const Achievements = (props: IProps) =>
{
  return(
    <div>
      <h1>Achievements:</h1>
      <div className={styles.achievementsContainer}>
        {props.profile.achievements.map(item => (
          <Achievement achievement={item} />
        ))}
      </div>
    </div>
  )
}

export default Achievements