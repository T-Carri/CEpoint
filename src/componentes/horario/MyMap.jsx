
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { Card } from 'react-bootstrap';
const containerStyle = {
  width: '40em',
  height: '30em'
};






const MyMap=({latitud, longitud})=> {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCEmh6F9d4KnDeKK6eVrKqyKOZaZYvFY7s"
  })

  const [map, setMap] = React.useState(null) 

//console.log('MAPA', latitud?latitud:null)
 const position = {
    lat:parseFloat(latitud?latitud:null),
    lng:parseFloat(longitud?longitud:null) 
  }
   


//console.log('isLoaded', isLoaded )
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(position);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []) 

  return isLoaded ? (
    <Card>

    </Card>,
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      
        <>
<Marker  icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
      position={position}></Marker>
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap) 




