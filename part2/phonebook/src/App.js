import { useState, useEffect } from 'react';
// import axios from 'axios'; 
import noteService from './Services/notes'
import PersonEntry from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState(''); 
  const [newNum, setNewNum] = useState(0); 
  const [filterText, setFilterText] = useState(''); 

  // const exists = persons?.map(person => person.name); 
  const showablePeople = persons?.filter((person) => person.name.toLowerCase().includes(filterText.toLowerCase()))

  // Getting all the current names in the server 
  useEffect(() => { 
    noteService
      .getAll()
      .then(entries => { 
        setPersons(entries)
    })}, 
    [])

  const handleNewName = ( event ) => { 
    setNewName(event.target.value);    
  }
  const handleNewNum = ( e ) => { 
    setNewNum( e.target.value ); 
  }

  const deletion = ( persons ) => { 
    if (window.confirm(`Do you really wish to delete ${persons.name}?`)) {
      noteService.deleteEntry(persons.id); 
      window.location.reload();
    }
  }



  const addNewName = ( event ) => { 
    event.preventDefault(); 

    const newPerson = { 
      name: newName,
      number: newNum,
      // id: persons.length + 1,
    };
    
    if (persons.some((person) => person.name === newName)) { 
      const person = persons.find(pers => pers.name === newName);  
      const result = window.confirm(`${person.name} is already in the phonebook, do you want to update the phone number?`);

      if (result) { 
        const changedPerson = { 
          ...person, 
          number: newNum,
        }
        noteService
          .update(person.id, changedPerson)
          .then(returnedPerson => { 
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson)); 
          })
      }
    } else { 
      console.log(persons.length)
      
      noteService
        .create(newPerson)
        .then(returnedPerson => { 
          setPersons(persons.concat(returnedPerson))
          setNewName(''); 
          setNewNum(0); 
        }).catch(error => console.log(error.message) ) 
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} setFilterText={setFilterText}/> 
      <h2>Add New Contact</h2>
      <PersonForm addNewName={addNewName} newName={newName} handleNewName={handleNewName} newNum={newNum} handleNewNum={handleNewNum} /> 
      <h2>Numbers</h2>
      {showablePeople?.map(person => 
        <PersonEntry key={person.id} person={person} deletion={() => deletion(person)} />
      )}
      </div>
  )
}

export default App