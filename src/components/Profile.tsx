import React from 'react'
import styles from './Profile.module.scss'
import ProfileMainInfo from './Profile/ProfileMain'
import RecentInfo from './Profile/RecentInfo'
import Friends from './Profile/Friends'

const profile = {
  nickname: 'MacOSO',
}

const Profile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <ProfileMainInfo />
        <RecentInfo />
        <Friends />
      </div>
      <div> Profile {profile.nickname}</div>
    </div>
  )
}

export default Profile
