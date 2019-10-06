import React from 'react';
import styles from './Friend.module.scss';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { Icon } from '@iconify/react'
import faceAgent from '@iconify/icons-mdi/face-agent';
import heartIcon from '@iconify/icons-mdi/heart';

interface IProps {
  achievement: any
}

const getAchievement = (icon: string) => {
  switch (icon) {
    case 'face-agent': return faceAgent
    case 'favorite': return heartIcon
    default: return faceAgent
  }
}

const Achievement = (props: IProps) =>
{
  const { achievement } = props
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Icon icon={getAchievement(achievement.icon)} />
        <Typography gutterBottom variant="h5" component="h2">
          <b>{achievement.name}</b>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {achievement.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Achievement