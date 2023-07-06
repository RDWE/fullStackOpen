import React from "react"; 

const Header = (props) => { 
  return ( 
    <div>
      <h1>{props.course.name}</h1>
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
      <Part part={props.bits[0].part} exercises={props.bits[0].exercises} />
      <Part part={props.bits[1].part} exercises={props.bits[1].exercises} />
      <Part part={props.bits[2].part} exercises={props.bits[2].exercises} />
    </div>
  );
};

const Total = (props) => { 
  return (
    <div>
      <p>Number of exercises {props.bits[0].exercises +
                              props.bits[1].exercises + 
                              props.bits[2].exercises }
      </p>
    </div>
  );
};

const App = () => { 
  const course = { 
    name: "Half Stack Application Development", 
    bits: [ 
      {
        part: "Fundamentals of React", 
        exercises: 10, 
      },
      { 
        part: "Using props to pass data", 
        exercises: 7, 
      }, 
      { 
        part: "State of a component", 
        exercises: 14, 
      },
    ],
  }; 
  
  return ( 
    <div>
      <Header course={course}/>
      <Content bits={course.bits}/>
      <Total  bits={course.bits}/> 
    </div>
  );
};
export default App