import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { exerciseService } from '../../_services/exercise.service';

export const List = () => {
  const [exercises, setExercises] = useState(null);
  const [langsCodes] = useState([10, 20]);

  useEffect(() => {
    exerciseService.getAllExercises().then(x => setExercises(x));
  }, []);

  function deleteExercise(exerciseCode) {
    setExercises(exercises.map(x => {
      if (x.exerciseCode === exerciseCode) { x.isDeleting = true; }
      return x;
    }));
    exerciseService.deleteExercise(exerciseCode).then(() => {
        setExercises(exercises => exercises.filter(x => x.exerciseCode !== exerciseCode));
    });
  }

  const headerForExercise=(id)=>{
     switch (id) {
       case 10:
         return "Html & Css";
       case 20:
         return "JavaScript";
       default:
        return null;
     }
  }

  return (
    <div>
      <h1>תרגילים</h1>
      <p>כל התרגילים לניהול בלבד:</p>
        { langsCodes.map((course,index) => 
            <div key={index}>
              <h4>{headerForExercise(course)}</h4>
              <Link to="/admin/exercises/add" className="btn btn-sm btn-success m-1">הוסף תרגיל</Link>
              <Table striped bordered hover variant="dark" responsive="sm">
                <thead className="thead-courses">
                  <tr>
                    <th >קוד תרגיל</th>
                    <th>קוד שפה</th>
                    <th >נושא תרגול </th>
                    <th>שאלה</th>
                    <th>תשובה</th>
                    <th>תוכן</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="tbody-courses">
                  {exercises && exercises.filter((video) => video.studyLanguageCode === course).map((exercise, index) =>
                    <tr key={index}>
                      <td >{exercise.exerciseCode}</td>
                      <td >{exercise.studyLanguageCode}</td>
                      <td >{exercise.exerciseTopic}</td>
                      <td >{exercise.question}</td>
                      <td>{exercise.answer}</td>
                      <td>{exercise.description}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <Link to={`/admin/exercises/edit/${exercise.exerciseCode}`} className="btn btn-sm btn-primary">ערוך</Link>
                        <button onClick={() => deleteExercise(exercise.exerciseCode)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={course.isDeleting}>
                          {course.isDeleting
                            ? <span className="spinner-border spinner-border-sm"></span>
                            : <span>מחיקה</span>
                          }
                        </button>
                      </td>
                    </tr>
                  )}
                  {!exercises &&
                    <tr>
                      <td colSpan={5} className="text-center">
                        <span className="spinner-border spinner-border-lg align-center"></span>
                      </td>
                    </tr>
              }
                </tbody>
              </Table>
            </div>
         )
        }
    </div>
  );
}