import React, {useState} from 'react';
import '../styles.css';
import { FaPlus } from 'react-icons/fa';
import BreweryDetailsModal from './BreweryDetailsModal.jsx'

const BreweryListEntry = ({ brewery }) => {

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  if(!showModal) {
    return (
      <div className="list-entry">

        <div>
        Name: {brewery.name}
        </div>

        <div>
        Type: {brewery.brewery_type}
        </div>

        <div>
        Address: {`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}`}
        </div>

        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
        {brewery.website_url}
        </a>

        <div>
          <button onClick={handleClick}>
          <FaPlus/>
          </button>
        </div>

        {showModal && (
           <div className="breweryDetailsModal">
           Type: {brewery.brewery_type}
           </div>
        )
        }

      </div>
    )
  } else {
    return (
      <div>

        <BreweryDetailsModal
          brewery={brewery}
          setShowModal={setShowModal}/>

      </div>
    )
  }
}

export default BreweryListEntry;


