import { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.handle}> {props.text}</button>
  )
}

const Statistics = (props) => {
  return ( 
  <div>
    <h1>Statistics</h1>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>All: {props.good + props.neutral + props.bad}</p>
    <p>Average: {(props.good - props.bad) / ( props.good + props.neutral + props.bad ) }</p>
    <p>Positive: {props.good / (props.good + props.neutral + props.bad) * 100 } %</p>
  </div>
  )
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandle = () => setGood(good + 1); 
  const neutralHandle = () => setNeutral(neutral + 1); 
  const badHandle = () => setBad(bad + 1); 

  return (
  <div>
    <h1>Give Feedback</h1>
    <Button handle={goodHandle} text="Good" />
    <Button handle={neutralHandle} text="Neutral" /> 
    <Button handle={badHandle} text="Bad"/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
  </div>
  )
}

export default App;