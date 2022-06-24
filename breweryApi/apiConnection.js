const axios = require('axios');

export const getBreweryListByCity = (city, pagecount = 7) => {

  return axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=${pagecount}`)
    .then(res => res.data)
    .catch(error => console.log(error))

}