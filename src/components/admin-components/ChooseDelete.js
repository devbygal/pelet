import Button from "@restart/ui/esm/Button";
import * as FiIcon from "react-icons/fi";
import React, { useEffect, useState } from "react";

export default function ChooseDelete(data) {
  
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);

 

  useEffect(() => {
    getUsers();
  }, [users]);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal1");
  } else {
    document.body.classList.remove("active-modal1");
  }


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

  function deleteUser() {
    console.log(data.id)
    fetch(`http://proj7.ruppin-tech.co.il/api/accounts/${data.id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function deleteU(){
 
    deleteUser()
    toggleModal()
  }
  return (
    <>
      <Button class="btn btn-danger" onClick={toggleModal}>
        מחק
      </Button>

      {modal && (
        <div className="modal1">
          <div onClick={toggleModal} className="overlay1"></div>
          <div className="modal-content1">
              <FiIcon.FiX className="close-modal1" onClick={toggleModal}/>
            <p style={{paddingRight:'20px'}}>בטוח שתרצה למחוק?</p>
            <Button class="btn btn-primary mr-2 btnWdt" onClick={()=>{ deleteU()}}>כן</Button>
            <br />
            <Button class="btn btn-danger" onClick={toggleModal}>לא</Button>
          </div>
        </div>
      )}
    </>
  );
}
