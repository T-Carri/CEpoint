import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { IconName } from "react-icons/bs";
const containerStyle = {
  width: '40em',
  height: '30em'
};

const center = {
  lat: 19.615715,
  lng: -99.238924
};

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCEmh6F9d4KnDeKK6eVrKqyKOZaZYvFY7s"
  })

  const [map, setMap] = React.useState(null)
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
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap)