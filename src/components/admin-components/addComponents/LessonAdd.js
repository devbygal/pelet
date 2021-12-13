import React, { useState } from 'react'
import * as FiIcon from "react-icons/fi";
import './styles.css'
export const LessonAdd=()=>{

    const [studyLanguageCode, setStudyLanguageCode] = useState("");
    const [lessonCode, setLessonCode] = useState((parseInt(localStorage.getItem("latestLessonCode"))+1).toString());
    const [videoName, setVideoName] = useState("");
    const [description, setDescription] = useState("");
  
    function addLesson() {
        const data={lessonCode,studyLanguageCode,videoName,description}
        console.log(data)
        fetch(`http://proj7.ruppin-tech.co.il/api/Lessons`, {
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
        localStorage.setItem("latestLessonCode", lessonCode)
      }

    return(
<div className="py-4">
<h2>הוספת שיעור</h2>
<form>
    <div className="TableAdd">
  <table  className="table border shadow table1">
    <thead className="thead-dark">
      <tr>
        <th scope="col" style={{width:'90px'}}>קוד שיעור</th>
        <th scope="col" style={{width:'90px'}}>קוד שפה</th>
        <th scope="col" style={{width:'778px'}}>כתובת סרטון</th>
        <th scope="col" style={{width:'120px'}}> תיאור</th>
    
      </tr>
    </thead>
  <tbody>
  <td >     <input type="text" value={lessonCode} onChange={(e)=>{setLessonCode(e.target.value)}} style={{width:'90px',color:'white'}} /></td>
        <td><input type="text" value={studyLanguageCode} onChange={(e)=>{setStudyLanguageCode(e.target.value)}} style={{width:'90px',color:'white'}} /></td>
        <td><input type="text" value={videoName} onChange={(e)=>{setVideoName(e.target.value)}} style={{width:'778px',color:'white'}} /> </td>
        <td><input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} style={{width:'120px',color:'white'}} /></td>
    
  </tbody>
  </table>
  </div>
</form>
<div >
 <FiIcon.FiPlusSquare  onClick={()=>{addLesson()}} style={{width:'50px',height:'30px',marginRight:'40px',color:'green',cursor:'pointer'}} /> 
  <u style={{color:'green'}}> הוסף שיעור</u>
 </div>
</div>
    );
}