import React from 'react'
import nanoid from 'nanoid'
import AddSexNote from './AddSexNote'
import styles from './Feed.module.scss'
import moment from 'moment'
import Map from '../Map/Map'
import { ICoordinates } from '../Places'

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
    types: ['Anal', 'oral'],
    contraceptive: [' '],
    notes: '',
    private: true
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
    types: ['anal', 'oral'],
    contraceptive: ['Condoms'],
    notes: '',
    private: true
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
    private: true
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
    types: [''],
    contraceptive: [''],
    notes: '',
    private: true
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
    types: ['vaginal', 'oral'],
    contraceptive: ['Pills'],
    notes: '',
    private: true
  },
]

const punches = [
  'knocked n-times into',
  'had sex with',
  'investigated some holes of',
]

const punchesHand = ['free yourself', 'beated the meat out']

const dateFormat = (date: string) => moment(Number(date)).fromNow()

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

export interface INote {
  nickname: string
  partners: string[]
  timestamp: string
  place: ICoordinates
  private: boolean
  types?: string[]
  contraceptive?: string[]
  tags?: string[]
  notes?: string
}
const Feed = () => {
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
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default Feed
