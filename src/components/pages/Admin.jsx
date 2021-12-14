import React, { Fragment, useEffect, useState } from "react";
import "./style/Admin.css";
// import { EditableRow } from "../admin-components/rowComponents/EditableRow";
import { EditableRowVids } from "../admin-components/rowComponents/EditableRowVids";
// import { ReadOnlyRow } from "../admin-components/rowComponents/ReadOnlyRow";
import {ReadOnlyRowVids} from "../admin-components/rowComponents/ReadOnlyRowVids";
import {ReadOnlyRowEx} from "../admin-components/rowComponents/ReadOnlyRowEx";
import { EditableRowEx } from "../admin-components/rowComponents/EditableRowEx";
import * as FiIcon from "react-icons/fi";
import { Link } from "react-router-dom";
// import { CreateInserts } from "../admin-components/CreateInserts";
import { exerciseService } from "../_services/exercise.service";


export const Admin = () => {
  // יצירת משתנים למשתמשים,וסרטונים
  // const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);
  const [exercises, setExercises] = useState([]);
  // const [editContactId, setEditContactId] = useState(null);
  const [editVideoId, setEditVideoId] = useState(null);
  const [editExerciseId, setEditExerciseId] = useState(null);


  const langsCodes = [10, 20]

  useEffect(() => {
    getVideos();

    return () => {
      console.log("clean-upVids")
      getVideos();
    };
  }, [])

  //    useEffect(()=>{
  //     getUsers();

  //     return () => {
  //         console.log("clean-up")
  //         getUsers();
  //       };
  //  },[users])


  useEffect(() => {
    exerciseService.getAllExercises().then((values) => {
      setExercises(values)
    })
    return () => {
      exerciseService.getAllExercises().then((values) => {
        setExercises(values)
      })

    };
  }, []);
  // פונקציות ללחצנים
  const [searchTerm, setSearchTerm] = useState("");

  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // };
  const handleCancelClick2 = () => {
    setEditVideoId(null);
  };
  // const handleEditClick = (event, contact) => {
  //   console.log(contact.id)
  //   event.preventDefault();
  //   setEditContactId(contact.id);
  // };
  const handleEditClick2 = (event, video) => {
    console.log(video.lessonCode)
    event.preventDefault();
    setEditVideoId(video.lessonCode);
  };
  const handleCancelClick3 = () => {
    setEditExerciseId(null);
  };
  const handleEditClick3 = (event, contact) => {
    console.log(contact.exerciseCode)
    event.preventDefault();
    setEditExerciseId(contact.exerciseCode);
  };

  //  ייבוא מידע נחוץ מהשרת
  // ייבוא משתמשים
  // const getUsers = async () => {
  //   await fetch("http://proj7.ruppin-tech.co.il/api/accounts", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json; charset=UTF-8",
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then((result) => {
  //       if (result) {
  //         setUsers(result);
  //       } else {
  //         console.log("error");
  //       }
  //     });
  // };
  // ייבוא שיעורים
  const getVideos = async () => {
    await fetch("http://proj7.ruppin-tech.co.il/api/Lessons", {
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
          setVideos(result);
        } else {
          console.log("error");
        }
      });
  };

  // ייבוא תרגולים
  // const getExercises = async () => {
  //   await fetch("http://proj7.ruppin-tech.co.il/api/Exercises", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json; charset=UTF-8",
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       if (result) {
  //         setExercises(result);
  //       } else {
  //          console.log("error");
  //       }
  //     });
  // };

  // השמת הנתונים בטבלאות עם פילטר לחיפוש בדף
  return (
    <>
    
    <nav className="admin-nav navbar navbar-expand navbar-dark bg-primary">
        <div className="navbar-nav">
          <Link to="/admin/users" className="nav-item nav-link">משתמשים</Link>
        </div>
      </nav>

    <div className="scroller">
      <div style={{ display: 'flex', background: 'brown', color: 'beige' }}>
        <Link style={{ color: 'beige' }} to="/admin">  <FiIcon.FiEdit style={{ width: '50px', height: '20px', marginRight: '40px' }} /> </Link>
        <h6 style={{ paddingTop: '5px', flexDirection: 'row' }}>  עריכת חומר</h6>
        <Link style={{ color: 'beige' }} to="/addContent">  <FiIcon.FiPlusSquare style={{ width: '50px', height: '30px', marginRight: '40px' }} /> </Link>
        <h6 style={{ paddingTop: '5px', flexDirection: 'row' }}>  הוספת חומר</h6>

      </div>
      <div className="container">
        <h1>דף מנהל - עריכה+מחיקה</h1>
        <input
          type="text"
          placeholder="חפש קוד"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {/* <div className="py-4">
          <h2>טבלת משתמשים</h2>
          <form>
            <table table className="table border shadow table1">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">קוד משתמש</th>
                  <th scope="col">סוג משתמש</th>
                  <th scope="col">שם פרטי</th>
                  <th scope="col"> שם משפחה</th>
                  <th scope="col">אימייל</th>
                  <th scope="col">מין</th>
                  <th scope="col">אישר תקנון</th>
                  <th scope="col">ססמא</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((user) => {
                    if (searchTerm === "") {
                      return user;
                    } else if (user.id === parseInt(searchTerm)) {
                      return user;
                    }
                    else{
                      return null;
                    }
                  })
                  .map((user) => (
                    <Fragment>
                      {editContactId === user.id ? (
                        <EditableRow
                          editFormData={user}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
                          contact={user}
                          handleEditClick={handleEditClick}
                        />
                      )}
                    </Fragment>
                  ))}
              </tbody>
            </table>
          </form>
        </div> */}
      </div>
      {/* טבלאות קורסים */}
      {/* ======================== */}
      {/* מציג טבלאות לשיעורים בקורסים השונים
            לפי קוד קורס */}

      {langsCodes.map((lang,index) => (
        <div className="container" key={index}>
          <div className="py-4">
            <h2 style={{ direction: "rtl" }}> סרטונים - {lang === 10 ? "Html+Css" : "JS"}</h2>
            <form>
              <table className="table border shadow table1">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">קוד שפה</th>
                    <th scope="col">קוד שיעור</th>
                    <th scope="col">כתובת סרטון </th>
                    <th scope="col">תיאור</th>
                  </tr>
                </thead>
                <tbody>
                  {videos
                    .filter((video) => {
                      if (searchTerm === "") {
                        return video;
                      } else if (video.lessonCode === parseInt(searchTerm)) {
                        return video;
                      }
                      else {
                        return null;
                      }
                    })
                    .filter((video) => video.studyLanguageCode === lang).map((video, index) =>

                      <Fragment key={index}>
                        {editVideoId === video.lessonCode ? 
                          <EditableRowVids
                            key={index}
                            editFormData={video}
                            handleCancelClick={handleCancelClick2}
                          />
                         : 
                          <ReadOnlyRowVids
                            key={index}
                            contact={video}
                            handleEditClick={handleEditClick2}
                          // handleDeleteClick={handleDeleteClick}
                          />
                        }
                      </Fragment>

                    )}
                </tbody>
              </table>
            </form>
          </div>
        </div>

      ))}

      {/* טבלאות תרגולים */}
      {/* ======================== */}
      {/* מציג טבלאות לתרגולים בקורסים השונים
לפי קוד קורס */}
      {langsCodes.map((lang, index) => (
        <div className="container" key={index}>
          <div className="py-4">
            <h2 style={{ direction: "rtl" }}> תרגילים - {lang === 10 ? "Html+Css" : "JS"}</h2>
            <form>
              <table  className="table border shadow table1">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">קוד תרגיל</th>
                    <th scope="col">קוד שפת לימוד</th>
                    <th scope="col">קוד שיעור </th>
                    <th scope="col">הוראות</th>
                    <th scope="col">תשובה</th>
                    <th scope="col">תוכן תרגיל</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises
                    .filter((exercise) => {
                      if (searchTerm === "") {
                        return exercise;
                      } else if (exercise.exerciseCode === parseInt(searchTerm)) {
                        return exercise;
                      }
                      else {
                        return null;
                      }
                    })
                    .filter((item) => item.studyLanguageCode === lang).map((exercise, index) =>
                      <Fragment key={index}>
                        {editExerciseId === exercise.exerciseCode ? 
                          <EditableRowEx
                            key={index}
                            editFormData={exercise}
                            handleCancelClick={handleCancelClick3}
                          />
                         : 
                          <ReadOnlyRowEx
                            key={index}
                            contact={exercise}
                            handleEditClick={handleEditClick3}
                          />
                        }
                      </Fragment>
                    )}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      ))}
      {/* <CreateInserts/> */}
    </div>
    </>
  );
};
