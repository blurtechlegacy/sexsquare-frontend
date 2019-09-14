import React from 'react'
import Header from './Header/Header'
import Map from './Map/Map'
import { GeolocatedProps, geolocated } from 'react-geolocated'

export interface ICoordinates {
  center: {
    lat: number
    lng: number
  }
  zoom: number
}

const Places: React.FC = (props: GeolocatedProps | any) => {
  const [currentCoords, setCurrentCoords] = React.useState<
    ICoordinates | undefined
  >(undefined)
  React.useEffect(() => {
    setCurrentCoords({
      center: {
        lat: props.coords.latitude,
        lng: props.coords.longitude,
      },
      zoom: props.coords.altitude,
    })
  }, [props.coords, props.isGeolocationAvailable, props.isGeolocationEnabled])

  return (
    <div className="App">
      <Header />
      !props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>) :
      !props.isGeolocationEnabled ? (<div>Geolocation is not enabled</div>
      ) : currentCoords ? (
      <Map
        coordinates={currentCoords}
        points={currentCoords && Array.of(currentCoords.center)}
      />
      : (<div>Getting the location data&hellip; </div>
      );
    </div>
  )
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(Places)
