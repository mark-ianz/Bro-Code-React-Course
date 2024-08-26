import '../css/Student.css'

export default function Student (props) {
  return <>
    <div className="container student">
      <p>
        Name: {props.name}
      </p>
      <p>
        Age: {props.age}
      </p>
      <p>
        Role: {props.isStudent ? "Student" : "Not Student"}
      </p>
    </div>
  </>
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  Role: "Unknown"
}