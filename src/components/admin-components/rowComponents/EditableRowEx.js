import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { exerciseService } from "../../_services/exercise.service";

export const EditableRowEx = ({
  editFormData,
  handleCancelClick,
}) => {
  const [exercises, setExercises] = useState([]);
  const [exerciseCode, setExerciseCode] = useState(editFormData.exerciseCode);
  const [lang, setLang] = useState(editFormData.studyLanguageCode);
  const [exerciseTopic, setExerciseTopic] = useState(editFormData.exerciseTopic);
  const [question, setQuestion] = useState(editFormData.question);
  const [answer, setAnswer] = useState(editFormData.answer);
  const [description, setDescription] = useState(editFormData.description);


  useEffect(() => {
    getExercises();
  }, [exercises]);

  const getExercises = async () => {
    await fetch("http://proj7.ruppin-tech.co.il/api/Exercises", {
      method: "GET",
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result) {
          
          setExercises(result);
       
        } else {
           console.log("error");
        }
      });
  };

  function updateUser() {
    const body =({
          "exerciseCode": exerciseCode,
          "studyLanguageCode": lang,
          "exerciseTopic": exerciseTopic,
          "answer": answer,
          "description": description})
    exerciseService.updateExercise(editFormData.exerciseCode,body).then(()=>{
      console.log('good')
    }).catch(error => {
      console.log('dam')
  });
  }
  return (
    <tr>
      <td  style={{width:'100px'}}>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.exerciseCode}
          onChange={(e) => {
            setExerciseCode(e.target.value);
          }}
        ></input>
      </td>
      <td  style={{width:'100px'}}>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.studyLanguageCode}
          onChange={(e) => {
            setLang(e.target.value);
          }}
        ></input>
      </td>
      <td  style={{width:'100px'}}>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.exerciseTopic}
          onChange={(e) => {
            setExerciseTopic(e.target.value);
          }}
        ></input>
      </td>
      <td  style={{width:'100px'}}>
        <input
          className="editInput"
          required="required"
          defaultValue={editFormData.question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        ></input>
      </td>
      <td  style={{width:'100px'}}>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        ></input>
      </td>
      <td  style={{width:'100px'}}>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </td>
      <td  style={{width:'140px'}}>
        <Button
          variant="light"
          onClick={() => {
            updateUser();
          }}
        >
          שמור
        </Button>
        <Button variant="success" type="button" onClick={handleCancelClick}>
          חזור
        </Button>
      </td>
    </tr>
  );
};
