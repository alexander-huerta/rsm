import React, {useState} from 'react';
import '../styles.css';
import { FaBeer } from 'react-icons/fa';
import {getBreweryListByCity} from '../../../breweryApi/apiConnection.js'
import BreweryList from './BreweryList.jsx';


const App = () => {

  const [breweryList, setBreweryList] = useState([]);

  const handleClick = async () => {
    await getBreweryListByCity('astoria')
    .then((res) => {
      setBreweryList(res)
    })
  }

  if(breweryList.length === 0) {
    return (
      //Create a form and allow user to input city
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