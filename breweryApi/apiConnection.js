const axios = require('axios');

export const getBreweryListByCity = (city, pagecount) => {
  //look into default parameters
  let pageCount;
  pageCount = pageCount || 5;

  //url encode input cities

  return axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    .then(res => res.data)
    .catch(error => console.log(error))

}