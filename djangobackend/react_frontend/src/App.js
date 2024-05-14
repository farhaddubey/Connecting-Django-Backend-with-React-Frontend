import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    async function getAllStudent(){
        try{
          const students = await axios.get("http://127.0.0.1:8000/api/student/");
          console.log(students.data);
          setStudents(students.data);
        }
      catch(error){

      }
    }
    getAllStudent();
  }, [])
  return (
    <div className="App">
      <h1>Connecting React JS with Django</h1>
      {
        students.map((student, i)=>{
          return(
            <h2>{student.id}{student.student_name}{student.email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
