import React from 'react'
import ProfileMainInfo from './Profile/ProfileMain'
import RecentInfo from './Profile/RecentInfo'
import Friends from './Profile/Friends'
import Achievements from './Profile/Achievements'
import styles from './Profile.module.scss'

const profile = {
  nickname: 'MacOSO',
  email: 'macoso@blur.tech',
  currentPartners: [
    {
      startSex: '1565000004874',
      nickname: 'SeagullNina',
      email: 'tny1999@bk.ru',
    },
  ],
  partnersHistory: [
    {
      startSex: '1565000004874',
      nickname: 'SeagullNina',
      email: 'tny1999@bk.ru',
    },
  ],
  default: 'vaginal',
  achievements: [
    {
      name: 'Добрый вечер - я диспетчер',
      description: 'Займитесь сексом с разработчиком этого приложения',
      date: '1565000004874',
      icon: 'face-agent',
    },
    {
      name: 'Вторая половинка',
      description: 'Отметьте в профиле постоянного партнера',
      date: '1565000004874',
      icon: 'favorite',
    },
  ],
  places: [
    {
      nickname: 'MacOSO',
      partners: ['SeagullNina'],
      timestamp: '1567343304874',
      place: {
        center: {
          lat: 54.986992,
          lng: 82.915095,
        },
        zoom: 14,
      },
      types: ['anal', 'oral'],
      contraceptive: [''],
      notes: '',
      private: false,
    },
    {
      nickname: 'MacOSO',
      partners: ['SeagullNina'],
      timestamp: '1565000004874',
      place: {
        center: {
          lat: 54.986992,
          lng: 82.915095,
        },
        zoom: 14,
      },
      types: ['vaginal'],
      contraceptive: ['Pills'],
      notes: '',
      private: false,
    },
  ],
  friends: [
    {
      nickname: 'SeagullNina',
      email: 'tny1999@bk.ru',
    },
    {
      nickname: 'SrgGrch',
      email: 'srg.grch@gmail.com',
    },
    {
      nickname: 'AlexBulatov',
      email: ' ',
    },
    {
      nickname: 'tnnNull',
      email: ' ',
    }
  ],
}

export type IProfile = typeof profile

const Profile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <ProfileMainInfo profile={profile} />
        <Achievements profile={profile}/>
        <Friends profile={profile}/>
        <RecentInfo profile={profile}/>
      </div>
    </div>
  )
}

export default Profile
