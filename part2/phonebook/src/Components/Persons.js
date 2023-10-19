const PersonEntry = ({person, deletion}) => {
    return ( 
      <div>
        <ul>
          <li>{person.name} -- {person.number} <button onClick={deletion}>Delete {person.name}?</button></li>
        </ul>
      </div>
    )
} 

export default PersonEntry; 