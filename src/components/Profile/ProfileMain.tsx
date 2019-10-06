import React from 'react'
import styles from './ProfileMain.module.scss'
import ProfileHeader from './ProfileHeader'
import { IProfile } from '../Profile'

interface IProps {
  profile: IProfile
}
const ProfileMain = (props: IProps) =>
{
  return(
    <div className={styles.profileContainer}>
      <div className={styles.photo}>
        <ProfileHeader profile={props.profile} />
      </div>
      <div className={styles.info}>
        <h2>{props.profile.nickname}</h2>
        <p><b>E-mail: </b>{props.profile.email}</p>
        <p><b>Default type of sex: </b>{props.profile.default}</p>
        <p><b>Current partners: </b> {props.profile.currentPartners[props.profile.currentPartners.length - 1].nickname}, start make fun at: {props.profile.currentPartners[props.profile.currentPartners.length - 1].startSex}</p>
        <p><b>Popular places: </b>{props.profile.places[0].place.center.lat}, {props.profile.places[0].place.center.lng}</p>
      </div>
    </div>
  )

}
export default ProfileMain

