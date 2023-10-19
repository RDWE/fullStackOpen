import { useState, useEffect } from 'react'; 
import CountrySearch from './components/CountrySearch'; 
import CountrySearchResults from './components/CountrySearchResults'; 
import CountryService from './services/countries';

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [countries, setCountries] = useState([]); 

  // Loading data form the server. 
  useEffect(() => { 
    CountryService
      .getAll()
      .then(data => { 
        setCountries(data)
      })
      .catch(error => console.log(error))
    }, [])

  /* Actually filtering down the array based on the search text. 
  Create an array of common names. 
  If we have the original data somewhere, we can always process it to get data for new props. 
  Use Components to display data, not to do separate processing. 
  Since the App is the common parent in the hierarchy, then it makes sense to process data here, 
  where it's also requested. 
  What we will do is to send the appropriate collections of objects, so that we can then do some 
  conditional rendering in the component. */

  // console.log(countries[0])
  // console.log(countries);  

  const filteredCountries =  Object.values(countries).filter(country => { 
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return ( 
    <>
      { countries
      ? <CountrySearch search={searchTerm} setSearch={setSearchTerm} /> 
      : <p>Loading...</p> }
      <CountrySearchResults search={searchTerm} filteredCountries={filteredCountries}/>
    </>
  )
}

export default App;
