import React, { useEffect, useState } from 'react';
import './style/Vocabulary.css'
import Dropdown from "react-bootstrap/Dropdown";
import { Container, ListGroup, Nav, Navbar, Offcanvas } from 'react-bootstrap';

export const Vocabulary = ( ) => {

    const [words, setWords] = useState([]);
    const [letters]=useState(['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת'])
    useEffect(()=>{
        getWords();
        return () => {
            console.log("clean-up")
        };
     },[])

const getWords=async()=>{
   await fetch("http://proj7.ruppin-tech.co.il/api/TechnicalWords",{
    method: 'GET',
    headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Content-type': 'application/json'
    },
   }).then(response=>{
        return response.json()
   }).then(result=>{
       if(result){
        setWords(result);
       }
       else{
           console.log('error')
       }
   })
}
    
    return (
<div style={{backgroundColor:'brown'}}>
    <h1 style={{textAlign:'center',background:'black',color:'white'}}>אוצר מילים טכני</h1>
    <h6 style={{textAign:'center',marginRight:'300px',fontSize:'19px'}}>ברוך הבא לאוצר המילים לחץ על האות כדי לראות  רשימת מילים באות זו</h6>
    <Navbar style={{direction:'rtl',paddingTop:'200px !important',marginTop:'200px !important'}} expand={false} expanded={true}  >
        <Container fluid>
          <Navbar.Toggle
           
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas style={{ width: "258px" }} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
    
    <Offcanvas.Body style={{ width: "258px", padding: "0", margin: "0", fontSize: "18px" }}>
<Nav>
    <ListGroup >

      {letters.map((letter,index)=>(

    <ListGroup.Item key={index} style={{backgroundColor:'#282828'}}>

        <Dropdown  style={{ width: "28px", padding: "0", margin: "0", fontSize: "18px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {letter}
        </Dropdown.Toggle>
      
        <Dropdown.Menu style={{width: "258px",backgroundColor:'#282828'}}>
        {words.filter((word)=>letter===word.letter).map((word, index) => (
          <Dropdown.Item key={index} style={{color:'white', textAlign: "right", width: "258px", padding: "0", margin: "0", fontSize: "18px"}} >{` ${word.translation} - ${word.word} `}</Dropdown.Item>
        ))}
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

      </div>
   
    );
}