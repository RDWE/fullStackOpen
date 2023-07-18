import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = ( event ) => { 
    setNewName(event.target.value);    
  }

  const addNewName = ( event ) => { 
    event.preventDefault(); 
    const newPerson = { 
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(newPerson)); 
    setNewName(''); 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li id={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App