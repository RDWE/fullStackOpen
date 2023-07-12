import { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.handle}> {props.text}</button>
  )
}

const StatisticLine = (props) => { 
  return ( 
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 &&  props.bad === 0) 
    return (
    <div>
      <h1>Statistics</h1>
      No feedback given.
    </div>  
    )
  else 
    return ( 
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <div>
      <StatisticLine text="positive" value={((props.good) / (props.good + props.neutral + props.bad)) * 100 + ' %'} />
      </div>
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