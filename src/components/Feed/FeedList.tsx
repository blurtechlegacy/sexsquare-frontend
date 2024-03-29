import React from 'react'
import nanoid from 'nanoid'
import AddSexNote from './AddSexNote'
import styles from './FeedList.module.scss'
import moment from 'moment'
import Map from '../Map/Map'
import { INote } from '../models/IFeed'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'

const mockData = [
  {
    nickname: 'Elizabeth',
    partners: ['SrgGrch'],
    timestamp: '1567343304874',
    place: {
      center: {
        lat: 54.986992,
        lng: 82.915095,
      },
      zoom: 14,
    },
    types: ['anal', 'oral'],
    notes: '',
    private: true,
  },
  {
    nickname: 'SrgGrch',
    partners: ['Elizabeth'],
    timestamp: '1567340306874',
    place: {
      center: {
        lat: 54.98666,
        lng: 82.916079,
      },
      zoom: 14,
    },
    tags: ['BDSM', 'Sex with toys'],
    types: ['anal', 'oral'],
    contraceptive: ['Condoms', 'Pills'],
    notes: '',
    private: true,
  },
  {
    nickname: 'Jane',
    partners: ['John', 'Bob', 'Eugene'],
    timestamp: '1567303204874',
    place: {
      center: {
        lat: 54.983992,
        lng: 82.911095,
      },
      zoom: 14,
    },
    types: ['anal'],
    contraceptive: ['Condoms'],
    notes: '',
    private: true,
  },
  {
    nickname: 'Bob',
    partners: ['Eugene', 'Jane'],
    timestamp: '1567043202874',
    place: {
      center: {
        lat: 54.986792,
        lng: 82.915195,
      },
      zoom: 14,
    },
    contraceptive: ['Pills'],
    tags: ['Gay sex', 'Swing'],
    notes: '',
    private: true,
  },
  {
    nickname: 'John',
    partners: [],
    timestamp: '1565000004874',
    place: {
      center: {
        lat: 54.986932,
        lng: 82.925015,
      },
      zoom: 14,
    },
    notes: '',
    private: true,
  },
]

const punches = [
  'knocked n-times into ',
  'had sex with ',
  'investigated some holes of ',
]

const punchesHand = ['free yourself ', 'beated the meat out ']

const withCon = ['Had сontraception: ']

const types = ['Type of sex: ']

const withoutCon = ['Had fun without contraception. Beware! ']

const dateFormat = (date: string) => moment(Number(date)).fromNow()

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

const FeedList = () => {
  const [notes, setNotes] = React.useState<INote[] | undefined>(undefined)
  React.useEffect(() => {
    notes ? setNotes(notes) : setNotes(mockData)
  }, [notes])
  return (
    <div className={styles.feedContainer}>
      <AddSexNote
        add={(newNote: INote) => {
          notes ? setNotes([...notes, newNote]) : setNotes([newNote])
        }}
      />
      <div className={styles.listContainer}>
        {notes &&
          notes
            .sort((a: INote, b: INote) => +b.timestamp - +a.timestamp)
            .map(i => {
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
                      {i.types ? `${
                          types[getRandomInt(0, types.length)]
                        } ${i.types.map(
                        (item, index) => (index ? ' ' : '') + item
                        )}`: ''}
                    </div>
                    <div className={styles.contraceptive}>
                      {i.contraceptive ? `${
                          withCon[getRandomInt(0, withCon.length)]
                        } ${i.contraceptive.map(
                        (item, index) => (index ? ' ' : '') + item
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
                    {i.tags ? `${'#' + i.tags.map(
                      (item, index) => (index ? ' #' : '') + item
                    )}`: ''}
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default FeedList
