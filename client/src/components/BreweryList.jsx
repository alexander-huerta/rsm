import React from 'react';
import BreweryListEntry from './BreweryListEntry.jsx';
import '../styles.css';


const BreweryList = ({breweryList}) => {
  return (
    <div className="list-container">
      <h2 className="title">Breweries in Astoria!</h2>
      {breweryList.map((brewery) => (
        <BreweryListEntry brewery={brewery} key={brewery.id}/>
      ))}
  </div>
  )
}

export default BreweryList;