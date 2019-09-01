import React from 'react';
import GoogleMapReact from 'google-map-react';

interface IProps {
    center: {
        lat: number,
        lng: number,
    },
    zoom: number
}

const AVTF = (properties: any) => <h1>{properties.text}</h1>;

const Map = (props: IProps) => {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDVsJx-Hyq6w4laps9vUcA1gbq-mWLtH78' }}
                    defaultCenter={props.center}
                    defaultZoom={props.zoom}
                >
                    <AVTF
                        lat={54.9870497}
                        lng={82.9150887}
                        text="AVE AVE AVTF"
                    />
                </GoogleMapReact>
            </div>
        );
}

export default Map;
