import React from 'react'
import styles from './RecentInfo.module.scss'
import { IProfile } from '../Profile'

interface IProps {
  profile: IProfile
}
const RecentInfo = (props: IProps) => {
  return(
    <div>
    <h1>News:</h1>
    <div className={styles.recentInfoContainer}>
      <p><b>{props.profile.nickname}</b> had sex with {props.profile.currentPartners[props.profile.currentPartners.length - 1].nickname} in place: {props.profile.places[props.profile.places.length - 1].place.center.lat}, {props.profile.places[props.profile.places.length - 1].place.center.lng}</p>
    </div>
    </div>
  )
}

export default RecentInfo