import React from 'react';
import '../styles.css';

const BreweryListEntry = ({brewery}) => {
  console.log(brewery)
  //create modal to display full data on click
  return (
    <div className="listEntry">

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

    </div>
  )
}

export default BreweryListEntry;


