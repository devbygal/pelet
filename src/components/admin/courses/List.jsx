import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { lessonService } from '../../_services/lessons.service';
import './styles/List.css';

export const List = () => {
  const [courses, setCourses] = useState(null);
  const [langsCodes] = useState([10, 20,30,40,50,60,70,80,90,100,110,120]);

  useEffect(() => {
    lessonService.getAllLessons().then(x => setCourses(x));
  }, []);

  function deleteCourse(lessonCode) {
    setCourses(courses.map(x => {
      if (x.lessonCode === lessonCode) { x.isDeleting = true; }
      return x;
    }));
    lessonService.deleteLesson(lessonCode).then(() => {
      setCourses(courses => courses.filter(x => x.lessonCode !== lessonCode));
    });
  }

  const headerForCourse = (id) => {
    switch (id) {
      case 10:
        return "Html & Css";
      case 20:
        return "JavaScript";
      case 30:
        return "TypeScript";
      case 40:
        return "Angular";
      case 50:
        return "React";
      case 60:
        return "Sql";
      case 70:
        return "VisualStudio";
      case 80:
        return "VisualStudioCode";
      case 90:
        return "AndroidStudio";
      case 100:
        return "BootStrap";
      case 110:
        return "MongoDB";
      case 120:
        return "JQUERY";
      default:
        return null;
    }
  }

  return (
    <div>
      <h1>קורסים</h1>
      <p>כל הקורסים לניהול בלבד:</p>
        { langsCodes.map((course,index) => 
            <div key={index}>
              <h4>{headerForCourse(course)}</h4>
              <Link to="/admin/courses/add" className="btn btn-sm btn-success m-1">הוסף שיעור</Link>
              <Table striped bordered hover variant="dark" responsive="sm">
                <thead className="thead-courses">
                  <tr>
                    <th >קוד שיעור</th>
                    <th>קוד שפה</th>
                    <th >נתיב סרטון</th>
                    <th>תיאור</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="tbody-courses">
                  {courses && courses.filter((video) => video.studyLanguageCode === course).map((course, index) =>
                    <tr key={index}>
                      <td >{course.lessonCode}</td>
                      <td >{course.studyLanguageCode}</td>
                      <td >{course.videoName}</td>
                      <td>{course.description}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <Link to={`/admin/courses/edit/${course.lessonCode}`} className="btn btn-sm btn-primary">ערוך</Link>
                        <button onClick={() => deleteCourse(course.lessonCode)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={course.isDeleting}>
                          {course.isDeleting
                            ? <span className="spinner-border spinner-border-sm"></span>
                            : <span>מחיקה</span>
                          }
                        </button>
                      </td>
                    </tr>
                  )}
                  {!courses &&
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