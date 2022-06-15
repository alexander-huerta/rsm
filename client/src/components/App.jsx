import React, {useState} from 'react';
import {getBreweryListByCity} from '../../../breweryApi/apiConnection.js'
import BreweryList from './BreweryList.jsx';


const App = () => {

  const [breweryList, setBreweryList] = useState([]);

  const handleClick = async () => {
    await getBreweryListByCity('astoria')
    .then((res) => {
      console.log('appp', res)})
      setBreweryList(res)
  }

  if(breweryList.length === 0) {
    return (
      <div>
        Hello World
        <button onClick={handleClick}>
          Find Breweries </button>
      </div>
    )
  } else {
    <BreweryList breweryList={breweryList}/>
  }
}

export default App;