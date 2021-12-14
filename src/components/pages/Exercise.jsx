import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Container, ListGroup, Modal, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./style/Exercise.css";
import Dropdown from "react-bootstrap/Dropdown";
import {fillInputs,checkAnswers,addInputs} from "./functions/FunctionsForPages";

export const Exercise = () => {
  // תרגולים
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(1);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");
  const [input9, setInput9] = useState("");
  const [input10, setInput10] = useState("");


  
  const [topics] = useState(["תכונות", "כותרות", "פסקאות", "סגנונות", "עיצוב", "הוספת גרשיים", "הערות", "סי אס אס", "לינקים", "תמונות", "טבלאות", "רשימות", "קלאסים", "זהות אישית", "מסגרות", "סקריפטים", "קוד מחשב", "טפסים", "תכונות בטספים", "אלמנטים בטפסים", "סוגי קלטים", "תכונות קלטים"]);

  // עיצוב משתנה
  const [styleEx, setStyleEx] = useState("Exercise");
  const [styleExText, setStyleExText] = useState("textEx");
  const [btn1, setBtn1] = useState("btnex1");
  const [btn2, setBtn2] = useState("btnex2");
  const [containerAnswers, setContainerAnswers] = useState("answersEx");
  const [answerCheck, setAnswerCheck] = useState(false);
  // חלונית בדיקת תשובה
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkAnswer = (b) => {
    setAnswerCheck(b);
    handleShow();
  };

  // useEffect(() => {
  //   getExercises();
  // }, [exercises]);
  
  useEffect(()=>{
    getExercises();

    return () => {
        console.log("clean-upEX")
        
      };
 },[])

  // שינוי עיצוב בעת פתיחת תפריט צד
  const chngeStyleEx = (s1, s2, s3, s4, s5) => {
    setStyleEx(s1);
    setStyleExText(s2);
    setBtn1(s3);
    setBtn2(s4);
    setContainerAnswers(s5);
  };
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

  return (
    <div className="bodyEx">
      {/* חלונית בדיקת פתרון */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ background: "#04AA6D", justifyContent: "center", color: "white" }}>
          <Modal.Title>בדיקה</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: `${answerCheck ? "green" : "#CC0000"}`, justifyContent: "center", textAlign: "center", fontSize: "16px", fontWeight: "bold" }}>{answerCheck ? "כל הכבוד!" : "): טעות נסה שוב"}</Modal.Body>
        <Modal.Footer style={{ justifyContent: "center", background: "#04AA6D" }}>
          <Button style={{ backgroundColor: "#CC0000" }} variant="secondary" onClick={handleClose}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>

      {/* בוטסראפ ניווט צד */}
      <Navbar style={{ background: "#04AA6D" ,direction:'rtl'}} expand={false}>
        <Container fluid>
          <Navbar.Toggle
            onClick={() => {
              chngeStyleEx("ExerciseWithBarOpen", "textExBarOpen", "btnex1Open", "btnex2Open", "answersExOpen");
            }}
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas style={{ width: "258px" }} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header
              onClick={() => {
                chngeStyleEx("Exercise", "textEx", "btnex1", "btnex2", "answersEx");
              }}
              closeButton
            >
              <Offcanvas.Title id="offcanvasNavbarLabel">תרגולים</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ width: "258px", padding: "0", margin: "0", fontSize: "18px" }}>
              <Nav className="justify-content-end flex-grow-1">
                <ListGroup>
                  {/* לקיחת הנתונים לניווט מהשרת */}
                  {topics.map((topic, index) => (
                    <ListGroup.Item key={index}>
                      {/* תרגיל {ex.exerciseCode} */}
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {topic}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {exercises.filter((item) => item.exerciseTopic === topic).map((ex, index) =>
                              <Dropdown.Item
                                key={index}
                                onClick={() => {
                                  setCurrentExercise(ex.exerciseCode);
                                }}
                                href="#/action-1"
                                style={{ textAlign: "center" }}
                              >
                                תרגיל {index+1}
                              </Dropdown.Item>
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* הצגת התרגול עצמו */}
      {exercises.filter((item) => item.exerciseCode === currentExercise).map((ex,index) =>
       
          <div key={index}>
            <div className="mainExercise">
              <div className={styleExText}>
                <h1>תרגיל:</h1>
                <p>{ex.question}</p>
              </div>
              <div className={styleEx}>
                <p style={{ paddingTop: "30px", fontSize: "19px" }}>{addInputs(ex.description,input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,setInput1,setInput2,setInput3,setInput4,setInput5,setInput6,setInput7,setInput8,setInput9,setInput10)}</p>
              </div>
            </div>
            <div className={containerAnswers}>
              {/* בודק אם תשובת המשתמש זהה לתשובה במסד הנתונים */}
              <button
                onClick={() => {
                  checkAnswers(ex.answer,input1,input2,input3,input4,input5,input6,input7,input8,input9,input10) ? checkAnswer(true) : checkAnswer(false);
                }}
                className={btn1}
              >
                {" "}
                שלח תשובה {"\u00A0"} &gt;{" "}
              </button>
              <button
                onClick={() => {
                  fillInputs(ex.answer,setInput1,setInput2,setInput3,setInput4,setInput5,setInput6,setInput7,setInput8,setInput9,setInput10);
                }}
                className={btn2}
              >
                {" "}
                הצג פתרון {"\u00A0"} &gt;
              </button>
              <p title="par"></p>
            </div>
          </div>
        
      )}
    </div>
  );
};
