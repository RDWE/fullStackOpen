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

export default PersonForm; 