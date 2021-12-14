import Button from "@restart/ui/esm/Button";
import * as FiIcon from "react-icons/fi";
import React, { useEffect, useState } from "react";


export const ChooseDeleteEx=(data)=>{
  
  const [modal, setModal] = useState(false);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getExercises();

    return () => {
      console.log("clean-upVids")
      getExercises();
    };
  }, [])

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal1");
  } else {
    document.body.classList.remove("active-modal1");
  }


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

  function deleteExercise() {
    console.log(data.id)
    fetch(`http://proj7.ruppin-tech.co.il/api/Exercises/${data.id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getExercises()
      })
    })
  }
  function deleteEx(){
 
    deleteExercise()
    toggleModal()
  }
  return (
    <>
      <Button className="btn btn-danger" onClick={toggleModal}>
        מחק
      </Button>

      {modal && (
        <div className="modal1">
          <div onClick={toggleModal} className="overlay1"></div>
          <div className="modal-content1">
              <FiIcon.FiX className="close-modal1" onClick={toggleModal}/>
            <p style={{paddingRight:'20px'}}>בטוח שתרצה למחוק?</p>
            <Button className="btn btn-primary mr-2 btnWdt" onClick={()=>{ deleteEx()}}>כן</Button>
            <br />
            <Button class="btn btn-danger" onClick={toggleModal}>לא</Button>
          </div>
        </div>
      )}
    </>
  );
}
