import React from 'react'
import styles from './ProfileHeader.module.scss'
import Gravatar from 'react-gravatar'
import md5 from 'crypto-js/md5'

interface IProps {
  profile: any
}

const ProfileHeader = (props: IProps) => {
  const { profile } = props

  return (
    <div className={styles.profileHeader}>
      <Gravatar md5={String(md5(profile.email))} default="wavatar" className={styles.avatar}/>
    </div>
  )
}

export default ProfileHeader
