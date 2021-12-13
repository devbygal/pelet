import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./style/Course.css";

export const Course = () => {
  // משתנה לבחירת סרטון לתצוגה הראשית
  const [videoChosen, setVideoChosen] = useState(
    "https://www.youtube.com/watch?v=Z55B-PN5Ys0&list=PLP-UKVDk32JhdcvmAFL65Y2GnpWLlCCUE&index=1"
  );
  const [videos, setVideos] = useState([]);
  // משתנים לעיצוב 
  const [style, setStyle] = useState("vid");
  const [last, setLast] = useState();
  const [vidNum, setVidNum] = useState("1")

  useEffect(() => {
    getVideos();
  }, [videos, style]);

  //  פונקציה לבחירת שיעור לצפייה
  const selectVid = (v, i, e) => {
    if (e.target.className !== "title") {
      setStyle("vid");
      setVidNum(v.description)
      if (last !== undefined) last.className = "vid";
      setLast(e.target);
      e.target.className = "vid active";
      setVideoChosen(v.videoName);
    }
    else {

    }
  };

  const getVideos = async () => {
    await fetch("http://proj7.ruppin-tech.co.il/api/Lessons", {
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
          setVideos(result);
        } else {
          console.log("error");
        }
      });
  };

  return (
    <div dir="ltr" className="body2">
      <h3 className="heading">html סרטונים</h3>
      <div className="containerVids">
        <div className="main-video">
          {/* סרטון שבו צופים בתצוגה ראשית בדף(מתחלפת לפי בחירה) */}
          <div className="video">
            <ReactPlayer
              width="800px" height="450px" className="video-react" url={`${videoChosen}`} controls muted autoPlay
            ></ReactPlayer>
            <h3 className="title">{vidNum}</h3>
          </div>
        </div>
        {/* רשימת סרטונים מהשרת */}
        <div className="video-list">
          {videos.map((item, index) =>
            item.studyLanguageCode === 10 ? (
              <div
                className="vid"
                onClick={(e) => selectVid(item, index, e)}>
                <ReactPlayer width="100px" height="70px" className="video-react" url={`${item.videoName}`} muted></ReactPlayer>
                <h3 className="title">{`${item.description}`}</h3>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
