import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import mapMarker from '@iconify/icons-mdi/map-marker'

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
  manyPoints?: ICoordinates[]
}

const Point = (props: any) => <Icon icon={mapMarker} width={40} height={40} />

const Map = (props: IProps) => {
  let { size } = props
  const { coordinates, points, manyPoints } = props
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
          yesIWantToUseGoogleMapApiInternals
        >
          {manyPoints
            ? manyPoints.map(item => (
                <Point lat={item.center.lat} lng={item.center.lng} />
              ))
            : points &&
              points.map(item => <Point lat={item.lat} lng={item.lng} />)}
        </GoogleMapReact>
      )}
    </div>
  )
}

export default Map
