import React from 'react'
import styles from './Friends.module.scss'
import { IProfile } from '../Profile'
import Friend from './Friend'

interface IProps {
  profile: IProfile
}

const Friends = (props: IProps) => {
  return (
    <div>
    <h1>Friends</h1>
    <div className={styles.friendsContainer}>{props.profile.friends.map(item => (
      <Friend profile={item} />
    ))}
    </div>
    </div>
  )
}
export default Friends