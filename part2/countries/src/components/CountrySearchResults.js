// import CountryProfile from './CountryProfile'; 

const CountrySearchResults = ({ search, filteredCountries }) => { 
    if (search) { 
        if (filteredCountries.length === 1) { 
            return filteredCountries.map( (result) => {
                return (
                <>
                    <h2>{result.name.common}</h2>
                    <p>Capital: {result.capital}</p>
                    <p>Area: {result.area}</p>
                    <h4>Languages</h4>
                    {Object.values(result.languages).map(lang => (<li key={lang}>{lang}</li>))}
                    <img src={result.flags.png} alt={result.flags.alt}></img>
                </>
                )
            })
        } else if (filteredCountries.length < 10) {
            return filteredCountries.map(result =>  <li key={result.name.common}>{result.name.common}</li>)
        } else { 
            return "Too many results, please be more specific."
        }
    } else { 
        return <p>Please enter a query.</p>
    }
}

export default CountrySearchResults; 