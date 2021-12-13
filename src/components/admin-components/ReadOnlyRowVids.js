import Button from "@restart/ui/esm/Button";
import React from "react";
import ChooseDeleteVids from "./ChooseDeleteVids";


const ReadOnlyRowVids = ({ contact, handleEditClick }) => {
  
  return (
    <tr>
      <td>{contact.studyLanguageCode}</td>
      <td>{contact.lessonCode}</td>
      <td>{contact.videoName}</td>
      <td>{contact.description}</td>

      <td>
        <Button
          class="btn btn-primary mr-2 btnWdt"
          onClick={(event) => handleEditClick(event, contact)}
        >
          ערוך
        </Button>
        <ChooseDeleteVids id={contact.lessonCode}/>
      </td>
    </tr>
  );
};

export default ReadOnlyRowVids;
