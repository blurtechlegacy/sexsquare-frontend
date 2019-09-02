import React from 'react'
import GoogleMapReact from 'google-map-react'

interface ISizeProps {
  height: string
  width: string
}

interface IPoints {
  lat: number
  lng: number
}

interface ICoordinates {
  center: {
    lat: number
    lng: number
  }
  zoom: number
}

interface IProps {
  points?: IPoints[]
  coordinates?: ICoordinates
  size?: ISizeProps
}

const Point = (props: any) => <h1>THIS</h1>

const Map = (props: IProps) => {
  let { size } = props
  const { coordinates, points } = props
  if (!size) {
    size = {
      height: '100vh',
      width: '100vh',
    }
  }
  return (
    <div
      style={{
        height: size.height,
        width: size.width,
      }}
    >
      {coordinates && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDVsJx-Hyq6w4laps9vUcA1gbq-mWLtH78',
          }}
          defaultCenter={coordinates.center}
          defaultZoom={coordinates.zoom}
        >
          {points &&
            points.map(item => <Point lat={item.lat} lng={item.lng} />)}
        </GoogleMapReact>
      )}
    </div>
  )
}

export default Map
