import React, {useState} from 'react';
import '../styles.css';
import { FaTimes } from 'react-icons/fa';


const BreweryDetailsModal = ({brewery, setShowModal}) => {

  const handleClick = () => {
    console.log('hi')
    setShowModal(false)
  }


    return (
      <div className="brewery-details-modal">
        <div>
          Name: {brewery.name}
        </div>



        <div>
          Address: {`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}`}
        </div>

        <div>
       MAP
        </div>

        <div>
          <button onClick={handleClick}>
            <FaTimes />
          </button>
        </div>

      </div>
    )

}

export default BreweryDetailsModal;


