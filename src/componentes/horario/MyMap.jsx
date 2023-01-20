import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { IconName } from "react-icons/bs";
const containerStyle = {
  width: '40em',
  height: '30em'
};

const center = {
  lat: 19.6158548,
  lng: -99.2392919
};





function MyMap({latitud, longitud}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCEmh6F9d4KnDeKK6eVrKqyKOZaZYvFY7s"
  })

  const [map, setMap] = React.useState(null) 

  const centers = {
    lat: latitud,
    lng: longitud
  }
  


console.log('isLoaded', isLoaded )
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
<Marker  icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
      position={centers}></Marker>
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap)