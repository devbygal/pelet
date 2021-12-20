import './styles/Exercise.css';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Nav, NavDropdown, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";
import { exerciseService } from '../../_services';
import {fillInputs,checkAnswers,addInputs} from "./../functions/FunctionsForPages";


export const Exercise = () => {

    let navigate = useNavigate();
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  // תרגולים
  const [exercises, setExercises] = useState([""]);
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



  // עיצוב משתנה
  const [answerCheck, setAnswerCheck] = useState(false);
  // חלונית בדיקת תשובה
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkAnswer = (b) => {
    setAnswerCheck(b);
    handleShow();
  };

    useEffect(() => {
      exerciseService.getAllExercises().then((data) => {
        setExercises(data)
      })
    }, [])

    return (
        <div>
            <header className='headingCourse p-4'>
            <Link to="#" onClick={() => navigate(-1)}
            style={{
              background: '#000000',
              padding: '4px 24px',
              fontSize: 20,
              borderRadius: '0.33rem'
            }}>
        <RiIcons.RiArrowRightSLine /> חזור</Link>
            <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                <NavDropdown title="תכונות" id="nav-dropdown">
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(1)}}>תרגיל מס' 1</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(2)}}>תרגיל מס' 2</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(3)}}>תרגיל מס' 3</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(4)}}>תרגיל מס' 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="כותרות" id="nav-dropdown">
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(5)}} >תרגיל מס' 1</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(6)}} >תרגיל מס' 2</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(7)}} >תרגיל מס' 3</NavDropdown.Item>
                </NavDropdown>
                    <NavDropdown title="פסקאות" id="nav-dropdown">
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(8)}}      >תרגיל מס' 1</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(9)}}  >תרגיל מס' 2</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(10)}} >תרגיל מס' 3</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(11)}} >תרגיל מס' 3</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setCurrentExercise(12)}} >תרגיל מס' 3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </header>
            <div>
                      {/* חלונית בדיקת פתרון */}
      <Modal className="ModalEx" show={show} onHide={handleClose}>
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
            {exercises[0]!==""?exercises.filter((item) => item.exerciseCode === currentExercise).map((ex,index) =>
          <div key={index}>
            <div className="mainExercise">
              <div className="textEx">
                <h1>תרגיל:</h1>
                <p>{ex.question}</p>
              </div>
              <div className="Exercise">
                <p style={{ paddingTop: "30px", fontSize: "19px" }}>{addInputs(ex.description,input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,setInput1,setInput2,setInput3,setInput4,setInput5,setInput6,setInput7,setInput8,setInput9,setInput10)}</p>
              </div>
            </div>
            <div className="answersEx">
              {/* בודק אם תשובת המשתמש זהה לתשובה במסד הנתונים */}
              <button
                onClick={() => {
                  checkAnswers(ex.answer,input1,input2,input3,input4,input5,input6,input7,input8,input9,input10) ? checkAnswer(true) : checkAnswer(false);
                }}
                className="btnex1"
              >
                {" "}
                שלח תשובה {"\u00A0"} &gt;{" "}
              </button>
              <button
                onClick={() => {
                  fillInputs(ex.answer,setInput1,setInput2,setInput3,setInput4,setInput5,setInput6,setInput7,setInput8,setInput9,setInput10);
                }}
                className="btnex2"
              >
                {" "}
                הצג פתרון {"\u00A0"} &gt;
              </button>
              <p title="par"></p>
            </div>
          </div>
      ):<Spinner animation="border" className="spinnerCenter" />}
    </div>
        </div>
    );
}