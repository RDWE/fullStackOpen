
const ExerciseSum = ({ parts }) => { 
    const exerciseValues = parts.map( part => part.exercises)
    const sum = exerciseValues.reduce((acc, val) => acc + val);
    
    return (
        <div style={{fontWeight:"bold"}}>
            Total of {sum} exercises. 
        </div>
    )
} 


export default ExerciseSum; 