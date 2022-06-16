import React, {useState} from 'react';
import '../styles.css';
import { FaBeer } from 'react-icons/fa';
import { getBreweryListByCity } from '../../../breweryApi/apiConnection.js'
import BreweryList from './BreweryList.jsx';


const App = () => {

  const [breweryList, setBreweryList] = useState([]);

  const city = 'astoria';

  const handleClick = async () => {
    await getBreweryListByCity(city)
    .then((breweryList) => {
      setBreweryList(breweryList)
    })
  }

  if(breweryList.length === 0) {
    return (
      <div className="App">
        <button onClick={handleClick}>
          Find Breweries <FaBeer/>
        </button>
      </div>
    )
  } else {
    return (
      <div className="App">
        <BreweryList breweryList={breweryList}/>
      </div>
    )
  }
}

export default App;