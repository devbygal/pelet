import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

export const EditableRowVids = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const [lessons, setLessons] = useState([]);
  const [studyLanguageCode, setStudyLanguageCode] = useState(editFormData.studyLanguageCode);
  const [lessonCode, setLessonCode] = useState(editFormData.lessonCode);
  const [videoName, setVideoName] = useState(editFormData.videoName);
  const [description, setDescription] = useState(editFormData.description);

  useEffect(() => {
    getLessons();
  }, [lessons]);

  const getLessons = async () => {
    await fetch("http://proj7.ruppin-tech.co.il/api/Lessons", {
      method: "GET",
      headers: {
        Accept: "application/json; charset=UTF-8",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        // console.log("res.status", response.status);
        return response.json();
      })
      .then((result) => {
        if (result) {
          setLessons(result);
          //   console.log("works");
        } else {
          //   console.log("error");
        }
      });
  };

  function updateLesson() {
    fetch(`http://proj7.ruppin-tech.co.il/api/Lessons/${editFormData.lessonCode}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(   {
        "studyLanguageCode": studyLanguageCode,
        "lessonCode": lessonCode,
        "videoName": videoName,
        "description": description,
  
    }),
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp);
        getLessons();
      });
    });
  }
  return (
    <tr>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.studyLanguageCode}
          name="studyLanguageCode"
          onChange={(e) => {
            setStudyLanguageCode(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.lessonCode}
          name="lessonCode"
          onChange={(e) => {
            setLessonCode(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.videoName}
          name="videoName"
          onChange={(e) => {
            setVideoName(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="email"
          required="required"
          defaultValue={editFormData.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </td>
   
      <td>
        <Button
          variant="light"
          onClick={() => {
       updateLesson();
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
