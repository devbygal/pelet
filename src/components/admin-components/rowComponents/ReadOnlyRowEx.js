import Button from "@restart/ui/esm/Button";
import React from "react";
import {ChooseDeleteEx} from "./ChooseDeleteEx";

export const ReadOnlyRowEx = ({ contact, handleEditClick }) => {
 
  return (
      
    <tr>
      <td style={{width:'100px'}}>{contact.exerciseCode}</td>
      <td style={{width:'100px'}}>{contact.studyLanguageCode}</td>
      <td style={{width:'100px'}}>{contact.lessonCode}</td>
      <td style={{width:'100px'}}>{contact.question}</td>
      <td style={{width:'100px'}}>{contact.answer}</td>
      <td style={{width:'100px',overflow:'hidden'}}>{contact.description}</td>
      <td style={{width:'100px'}}>
        <Button
          className="btn btn-primary mr-2 btnWdt"
          onClick={(event) => handleEditClick(event, contact)}
        >
          ערוך
        </Button>
        <ChooseDeleteEx id={contact.exerciseCode}/>
      </td>
    </tr>
  );
};


