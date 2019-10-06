import React from 'react';
import styles from './Friend.module.scss';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import md5 from 'crypto-js/md5'
import Gravatar from 'react-gravatar'

interface IProps {
  profile: any
}

const Friend = (props: IProps) =>
{
  const { profile } = props
  return (
    <Card className={styles.card}>
    <CardContent className={styles.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
      {profile.nickname}
      </Typography>
      <Gravatar md5={String(md5(profile.email))} default="wavatar" className={styles.avatar}/>
    </CardContent>
    </Card>
  )
}

export default Friend