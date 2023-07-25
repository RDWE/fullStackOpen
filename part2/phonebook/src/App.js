import { useState, useEffect } from 'react';
import axios from 'axios'; 

const Filter = ({filterText, setFilterText}) => {

  return ( 
    <div>
        filter shown with: <input value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
    </div>
  )
} 

const PersonForm = ({addNewName, newName, handleNewName, newNum, handleNewNum}) => {

  return ( 
  <div>
    <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNum} onChange={handleNewNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
} 

const Persons = ({persons, filterText}) => {

  return ( 
    <div>
      <ul>
        {persons
        .filter((person) => person.name.toLowerCase().includes(filterText.toLowerCase()))
        .map(person => <li key={person.name}>{person.name} -- {person.number}</li>)}
      </ul>
    </div>
  )
} 

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState(''); 
  const [newNum, setNewNum] = useState(0); 
  const [filterText, setFilterText] = useState(''); 

  const handleNewName = ( event ) => { 
    setNewName(event.target.value);    
  }
  const handleNewNum = ( e ) => { 
    setNewNum( e.target.value ); 
  }

  const exists = persons.map(person => person.name); 

  const addNewName = ( event ) => { 
    event.preventDefault(); 
    const newPerson = { 
      name: newName,
      number: newNum,
      id: persons.length + 1,
    }

    if (exists.includes(newName)) { 
      const s = `${newName} is already in the phonebook!`; 
      alert(s)
    } else { 
      setPersons(persons.concat(newPerson)); 
      setNewName(''); 
      setNewNum(0); 
    }
  }

  useEffect(() => { 
    axios
      .get("http://localhost:3001/persons")
      .then( response =>  { 
        const people = response.data; 
        setPersons(people); 
      })
  }, []); 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} setFilterText={setFilterText}/> 
      <h2>add a new</h2>
      <PersonForm addNewName={addNewName} newName={newName} handleNewName={handleNewName} newNum={newNum} handleNewNum={handleNewNum} /> 
      <h2>Numbers</h2>
      <Persons persons={persons} filterText={filterText}/>
    </div>
  )
}

export default App