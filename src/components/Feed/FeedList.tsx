import React from 'react'
import nanoid from 'nanoid'
import AddSexNote from './AddSexNote'
import styles from './FeedList.module.scss'
import moment from 'moment'
import Map from '../Map/Map'
import FeedStoreService from '../../classes/services/FeedStoreService'
import {ISexNote} from "../../classes/models/ISexNote";

const punches = [
  'knocked n-times into ',
  'had sex with ',
  'investigated some holes of ',
];

const punchesHand = ['free yourself ', 'beated the meat out '];

const withCon = ['Had сontraception: '];

const types = ['Type of sex: '];

const withoutCon = ['Had fun without contraception. Beware! '];

const dateFormat = (date: string) => moment(Number(date)).fromNow();

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const FeedList = () => {
  const [notes, setNotes] = React.useState<ISexNote[] | undefined>(undefined);

  React.useEffect(() => {
    notes
      ? setNotes(notes)
      : FeedStoreService.getAllSexNote().then((data: any) => {
          setNotes(data.items)
        });
  }, [notes]);

  return (
    <div className={styles.feedContainer}>
      <AddSexNote
        add={(newNote: ISexNote) => {
          notes ? setNotes([...notes, newNote]) : setNotes([newNote])
        }}
      />
      <div className={styles.listContainer}>
        {notes ?
            notes
                .sort((a: ISexNote, b: ISexNote) => +b.timestamp - +a.timestamp)
                .map((i: ISexNote) => {
                    return (
                        <div key={nanoid(8)} className={styles.sexNote}>
                            <div className={styles.note}>
                                <div className={styles.message}>
                                    {i.nickname}{' '}
                                    {i.partners.length > 0
                                        ? `${
                                            punches[getRandomInt(0, punches.length)]
                                        } ${i.partners.map(
                                            (item, index) => (index ? ' ' : '') + item
                                        )}`
                                        : punchesHand[getRandomInt(0, punches.length)]}
                                </div>
                                <div className={styles.types}>
                                    {i.types
                                        ? `${
                                            types[getRandomInt(0, types.length)]
                                        } ${i.types.map(
                                            (item, index) => (index ? ' ' : '') + item
                                        )}`
                                        : ''}
                                </div>
                                <div className={styles.contraceptive}>
                                    {i.contraceptive
                                        ? `${
                                            withCon[getRandomInt(0, withCon.length)]
                                        } ${i.contraceptive.map(
                                            (item: any, index: number) => (index ? ' ' : '') + item
                                        )}`
                                        : withoutCon[getRandomInt(0, withoutCon.length)]}
                                </div>
                                <div className={styles.timestamp}>
                                    {dateFormat(i.timestamp)}
                                </div>
                            </div>
                            <div className={styles.map}>
                                {i.place && (
                                    <Map
                                        points={[
                                            { lat: i.place.center.lat, lng: i.place.center.lng },
                                        ]}
                                        size={{ height: '100px', width: '100%' }}
                                        coordinates={{
                                            center: {
                                                lat: i.place.center.lat,
                                                lng: i.place.center.lng,
                                            },
                                            zoom: i.place.zoom,
                                        }}
                                    />
                                )}
                            </div>
                            <div className={styles.tags}>
                                {i.tags
                                    ? `${'#' +
                                    i.tags.map(
                                        (item: any, index: number) => (index ? ' #' : '') + item
                                    )}`
                                    : ''}
                            </div>
                        </div>
                    )
                }) : <div>Loading</div>}
      </div>
    </div>
  )
}

export default FeedList
