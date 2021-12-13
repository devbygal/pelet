import Button from "@restart/ui/esm/Button";
import * as FiIcon from "react-icons/fi";
import React, { useEffect, useState } from "react";
import "./admin-styles/chooseDelete.css";

export default function ChooseDeleteVids(data) {
  const [modal, setModal] = useState(false);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [videos]);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal1");
  } else {
    document.body.classList.remove("active-modal1");
  }


  const getVideos = async () => {
    await fetch("http://proj7.ruppin-tech.co.il/api/Lessons", {
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
            setVideos(result);
          //   console.log("works");
        } else {
          //   console.log("error");
        }
      });
  };

  function deleteVideo() {
     console.log(data.id+"code of lesson")
    fetch(`http://proj7.ruppin-tech.co.il/api/Lessons/${data.id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        getVideos()
      })
    })
  }
  function deleteV(){
 
    deleteVideo()
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
            <button className="close-modal1" onClick={toggleModal}>
              <FiIcon.FiX />
            </button>
            <p>בטוח שתרצה למחוק?</p>
            <Button class="btn btn-primary mr-2 btnWdt" onClick={()=>{ deleteV()}}>כן</Button>
            <br />
            <Button class="btn btn-danger" onClick={toggleModal}>לא</Button>
          </div>
        </div>
      )}
    </>
  );
}
