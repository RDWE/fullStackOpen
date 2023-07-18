import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: 1234,
      id: 1,
    }
  ]) 
  const [newName, setNewName] = useState(''); 
  const [newNum, setNewNum] = useState(0); 

  const handleNewName = ( event ) => { 
    setNewName(event.target.value);    
  }
  const handleNewNum = ( e ) => { 
    setNewNum( e.target.value ); 
  }

  const addNewName = ( event ) => { 
    event.preventDefault(); 
    const newPerson = { 
      name: newName,
      number: newNum,
      id: persons.length + 1,
    }
    const exists = persons.map(person => person.name); 
    if (exists.includes(newName)) { 
      const s = `${newName} is already in the phonebook!`; 
      alert(s)
    } else { 
      setPersons(persons.concat(newPerson)); 
      setNewName(''); 
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} -- {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App