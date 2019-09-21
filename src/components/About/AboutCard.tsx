import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './AboutCard.module.scss';

interface IProps {
  person: any
}

const AboutCard = (props: IProps) => {
  const { person } = props

  return (
    <Card className={styles.card}>
        <CardMedia
          component="img"
          alt={person.nickname}
          image={person.image}
          title={person.nickname}
          height={300}
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {person.firstname} <b>{person.nickname}</b> {person.lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {person.info}
          </Typography>
        </CardContent>
    </Card>
  );
}

export default AboutCard
