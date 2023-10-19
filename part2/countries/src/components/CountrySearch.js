const CountrySearch = ({ search, setSearch }) => { 
    return ( 
        <>
            <p>Find countries: <input value={search} onChange={(e) => setSearch(e.target.value)}></input></p>
        </>
    )
}

export default CountrySearch; 