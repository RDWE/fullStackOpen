// TODO: Delete this
const CountryProfile = ({ country }) => { 
    return ( 
        <>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <br />
            <h4>Languages</h4>
            {country.languages.map(l => <li key={l.language}>{l.language}</li>)}
            <img src={country.flags.png} alt={country.images.alt}></img>
        </>
    )
}

export default CountryProfile; 