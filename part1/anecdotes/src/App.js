import { useState } from 'react'

const Button = (props) =>  { 
    return (
        <div className="button">
        <button onClick={props.handle} style={{"borderRadius": "6px", "backgroundColor": "white", "borderWidth": "1px"}}>
          {props.text}
        </button>
        </div>
    )
}

function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min; 
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(getRandomInt(0, anecdotes.length))
  const [ votes, setVotes ] = useState( Array(anecdotes.length).fill(0) )
  const [ highestVoted, setHighestVoted ] = useState(0)

  const randomNumberGen = () => setSelected(getRandomInt(0, anecdotes.length))
  const handleVote = () => { 
    const updated = [...votes]; 
    updated[selected] += 1; 
    setVotes([...updated])
    const highest = updated.indexOf(Math.max(...updated))
    setHighestVoted( highest )
  }
   

  return (
    <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br></br>
        has {votes[selected]} votes.
        <div style={{display: "flex", }}>
          <Button handle={handleVote} text="Vote!" /> &nbsp;
          <Button handle={randomNumberGen} text="Next anecdote" />
        </div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[highestVoted]}
        <br></br>
        has {(highestVoted === -1) ? 0 : votes[highestVoted]} votes. 
    </div>
    
  )
}

export default App