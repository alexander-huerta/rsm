import React, { useState, useCallback } from 'react';
import '../styles.css';
import { FaTimes } from 'react-icons/fa';
import { GOOGLE_API_KEY } from '../../../config.js'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const BreweryDetailsModal = ({ brewery, setShowModal }) => {

  const [map, setMap] = useState(null)

  const center = {
    lat: Number(brewery.latitude),
    lng: Number(brewery.longitude)
  }

  const containerStyle = {
    height: '400px',
    margin: '10px'
  };

  const handleClick = () => {
    setShowModal(false)
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY
  });


  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, [])


    return (
      <div className="brewery-details-modal">

        <div>
          Name: {brewery.name}
        </div>

        <div>
          Address: {`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}`}
        </div>

       {isLoaded && (
         <div>
           <GoogleMap
             mapContainerStyle={containerStyle}
             center={center}
             zoom={8}
             onLoad={onLoad}
             onUnmount={onUnmount}
           />
        </div>
      )}

        <div>
          <button onClick={handleClick}>
            <FaTimes />
          </button>
        </div>

      </div>
    )
}

export default BreweryDetailsModal;


