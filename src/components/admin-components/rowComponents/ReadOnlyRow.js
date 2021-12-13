import Button from "@restart/ui/esm/Button";
import React from "react";
import ChooseDelete from "./ChooseDelete";

export const ReadOnlyRow = ({ contact, handleEditClick }) => {
 
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.userTypeCode}</td>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.gender}</td>
      <td>{contact.acceptTerms}</td>
      <td>{contact.password}</td>
      <td>
        <Button
          class="btn btn-primary mr-2 btnWdt"
          onClick={(event) => handleEditClick(event, contact)}
        >
          ערוך
        </Button>
        <ChooseDelete id={contact.id}/>
      </td>
    </tr>
  );
};


