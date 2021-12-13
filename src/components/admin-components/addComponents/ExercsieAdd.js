import React, { useState } from 'react'
import * as FiIcon from "react-icons/fi";
import './styles.css'

export const ExerciseAdd=()=>{
    const [exerciseCode, setExerciseCode] = useState((parseInt(localStorage.getItem("latestExerciseCode"))+1).toString());
    const [studyLanguageCode, setStudyLanguageCode] = useState("");
    const [exerciseTopic, setExerciseTopic] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [description, setDescription] = useState("");

    

    function addExercise() {
        const data={exerciseCode,studyLanguageCode,exerciseTopic,question,answer,description}
        console.log(data)
        fetch(`http://proj7.ruppin-tech.co.il/api/Exercises`, {
          method: 'Post',
          headers: {
            'Accept': 'application/json; charset=UTF-8',
            'Content-type': 'application/json'
          },
          
          body: JSON.stringify(data
     ),
        }).then((result) => {
          result.json().then((resp) => {
        
          });
        });
        localStorage.setItem("latestExerciseCode", exerciseCode)

      }
    return(
      <div className="py-4">
      <h2>הוספת תרגיל</h2>
      <form>
      <div className="TableAdd">
        <table table className="table border shadow table1">
          <thead className="thead-dark">
            <tr>
              <th style={{width:'90px'}} scope="col">קוד תרגיל</th>
              <th style={{width:'150px'}} scope="col">קוד שפת לימוד</th>
              <th style={{width:'150px'}} scope="col">נושא תרגיל</th>
              <th style={{width:'250px'}} scope="col">  הוראות</th>
              <th style={{width:'154px'}} scope="col">תשובה</th>
              <th style={{width:'420px'}} scope="col">תוכן</th>
      
            </tr>
          </thead>
        <tbody>
              <td><input type="text" value={exerciseCode} onChange={(e)=>{setExerciseCode(e.target.value)}} style={{width:'90px',color:'white'}} /></td>
              <td><input type="text" onChange={(e)=>{setStudyLanguageCode(e.target.value)}} style={{width:'150px',color:'white'}} /></td>
              <td><input type="text" onChange={(e)=>{setExerciseTopic(e.target.value)}} style={{width:'150px',color:'white'}} /></td>
              <td><input type="text" onChange={(e)=>{setQuestion(e.target.value)}} style={{width:'250px',color:'white'}} /></td>
              <td><input type="text" onChange={(e)=>{setAnswer(e.target.value)}} style={{direction:'ltr',width:'154px',color:'white'}} /></td>
              <td><textarea type="code" onChange={(e)=>{setDescription(e.target.value)}} style={{direction:"ltr",width:'420px',color:'white',height:'200px'}} /></td>
        </tbody>
        </table>
        </div>

      </form>
      <div >
 <FiIcon.FiPlusSquare  onClick={()=>{addExercise()}} style={{width:'50px',height:'30px',marginRight:'40px',color:'green',cursor:'pointer'}} /> 
  <u style={{color:'green'}}> הוסף תרגיל</u>
 </div>
 
    </div>
    );
}


