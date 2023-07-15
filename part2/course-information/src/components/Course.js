import Header from './Header';
import Content from './Content';
import ExerciseSum from './ExerciseSum';

const Course = ({ courses }) => {
    return(
        courses.map(course => (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts} />
            <ExerciseSum parts={course.parts} />
        </div>
      )
    )
  )
}
  
export default Course;   
  