import { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.handle}> {props.text}</button>
  )
}

const Feedback = (props) => {
  return ( 
  <div id="container">
    <Button onClick={props.goodHandle} text={props.text1} />
    <Button onClick={props.neutralHandle} text={props.text2} />
    <Button onClick={props.badHandle} text={props.text3}/>
  </div>
  ) 
}

const Statistics = (props) => {
  return ( 
  <div>
    <h1>Statistics</h1>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
  </div>
  )
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandle = props => setGood(good + 1) 
  const neutralHandle = props => setNeutral(neutral + 1)
  const badHandle = props => setBad(bad + 1)

  return (
  <div>
    <div >
      <h1>Give Feedback</h1> 
      <Button handle={goodHandle} text="Good" />
      <Button handle={neutralHandle} text="Neutral" />
      <Button handle={badHandle} text="Bad" />
    </div>
    <div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  </div>
  )
}

export default App;