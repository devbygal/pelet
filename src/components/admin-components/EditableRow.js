import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";


export const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(editFormData.id);
  const [code, setCode] = useState(editFormData.userTypeCode);
  const [firstName, setFirstName] = useState(editFormData.firstName);
  const [lastName, setLastName] = useState(editFormData.lastName);
  const [email, setEmail] = useState(editFormData.email);
  const [gender, setGender] = useState(editFormData.gender);
  const [acceptTerms, setAcceptTerms] = useState(editFormData.acceptTerms);
  const [password, setPassword] = useState(editFormData.password);


  useEffect(() => {
    getUsers();
  }, [users]);

  const getUsers = async () => {
    await fetch("http://proj7.ruppin-tech.co.il/api/accounts", {
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
          setUsers(result);
          //   console.log("works");
        } else {
          //   console.log("error");
        }
      });
  };

  function updateUser() {
    fetch(`http://proj7.ruppin-tech.co.il/api/accounts/${editFormData.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(   {
        "id": id,
        "userTypeCode": code,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "gender": gender,
        "acceptTerms": true,
        "password": password
    }),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
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
          defaultValue={editFormData.id}
          name="firstName"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.userTypeCode}
          name="address"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.firstName}
          name="phoneNumber"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="email"
          required="required"
          defaultValue={editFormData.lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.email}
          name="address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.gender}
          name="address"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.acceptTerms}
          name="address"
          onChange={(e) => {
            setAcceptTerms(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <input
          className="editInput"
          type="text"
          required="required"
          defaultValue={editFormData.password}
          name="address"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </td>
      <td>
        <Button
          variant="light"
          onClick={() => {
            updateUser();
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
