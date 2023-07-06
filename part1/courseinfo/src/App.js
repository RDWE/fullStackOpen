import React from "react"; 

const Header = (props) => { 
  return ( 
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => { 
  return ( 
    <div>
    <p> {props.part} {props.exercises}</p>
    </div>
  ); 
};

const Content = (props) => { 
  return (
    <div>
      <Part part={props.part1.part} exercises={props.part1.exercises} /> 
      <Part part={props.part2.part} exercises={props.part2.exercises} />
      <Part part={props.part3.part} exercises={props.part3.exercises} />
    </div>
  ); 

};

const Total = (props) => { 
  return (
    <div>
      
      <p>Number of exercises is {props.part1.exercises + 
                              props.part2.exercises + 
                              props.part3.exercises} 
      </p>
    </div>
  );
};

const App = () => { 
  const course = "Half Stack Application Development"; 
  const part1 = {
      part: "Fundamentals of React", 
      exercises: 10, 
    };
  const part2 = { 
      part: "Using props to pass data", 
      exercises: 7, 
    };
  const part3 = {
      part: "State of a component", 
      exercises: 14, 
    };
  
  
  return ( 
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} /> 
      <Total  part1={part1} part2={part2} part3={part3}/>  
    </div>
  );
};
export default App