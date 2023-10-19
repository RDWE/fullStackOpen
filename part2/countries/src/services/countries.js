import axios from 'axios'; 

const countries_root = "https://studies.cs.helsinki.fi/restcountries/api/"; 

const getAll = () => { 
    const request = axios.get(countries_root + "all")
    return request.then(response => response.data)
}

export default { 
    getAll: getAll, 
}