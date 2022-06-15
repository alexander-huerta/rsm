import React from 'react';
import BreweryListEntry from './BreweryListEntry.jsx';

const BreweryList = ({breweryList}) => {
  return (
    <div>

   {breweryList.map((entry) => (
     <BreweryListEntry brewery={entry} key={entry._id}/>
   ))}
  </div>
  )
  }

export default BreweryList;