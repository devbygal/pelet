import './styles/Course.css';
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { lessonService } from '../_services';
import * as RiIcons from "react-icons/ri";

export const Course = () => {
  // משתנה לבחירת סרטון לתצוגה הראשית
  const [videoChosen, setVideoChosen] = useState("vid.com");
  const [videos, setVideos] = useState([]);
  // משתנים לעיצוב 
  const [style, setStyle] = useState("vid");
  const [last, setLast] = useState();
  const [vidNum, setVidNum] = useState("1")
  const { id } = useParams();
  const navigate = useNavigate();
  const [mark,setMark] = useState([])
  


  useEffect(() => {
    getVideos();
  }, [videos]);

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
  };

  const getVideos = async () => {
    await lessonService.getAllLessons().then((data) => {
      setVideos(data)
    })
  };

  const headerForCourse = (id) => {
    switch (id) {
      case 10:
        return "HTML5";
      case 20:
        return "JavaScript";
      case 30:
        return "TypeScript";
      case 40:
        return "Angular";
      case 50:
        return "React";
      case 60:
        return "MS SQL";
      case 70:
        return "סביבת פיתוח - Visual Studio";
      case 80:
        return "סביבת פיתוח - Visual Studio Code";
      case 90:
        return "סביבת פיתוח - Android Studio";
      case 100:
        return "קורס - Bootstrap";
      case 110:
        return "קורס - MongoDB";
      case 120:
        return "קורס - Jquery";
      default:
        return null;
    }
  }

  const AddMarker=(data)=>{

     let item=[data]
     let items =[]
      let arrayOfLessons=[]
      if(localStorage.getItem('lessonMarked')!==null)
     {
      items=[localStorage.getItem('lessonMarked')]
      arrayOfLessons=items[0].toString().split(',')
      console.log(arrayOfLessons)
      console.log(item)
      for (let i = 0; i < arrayOfLessons.length; i++)
       {
      const element = arrayOfLessons[i];
      if(element===data)
      {
        console.log("we are the championsss!!")
       return
      }
    }
     }
    if(localStorage.getItem('lessonMarked')===null)
      {
       console.log("doesn't exist")
       localStorage.setItem('lessonMarked',(item))
      }
      else 
      {
        items.push(data)
        localStorage.removeItem('lessonMarked')
        localStorage.setItem('lessonMarked',(items))
      }
  }



  const lessonWatched=(data)=>{
    let item=[data]
    let items =[]
     let arrayOfLessons=[]
     if(localStorage.getItem('lessonWatched')!==null)
    {
     items=[localStorage.getItem('lessonWatched')]
     arrayOfLessons=items[0].toString().split(',')
     console.log(arrayOfLessons)
     console.log(item)
     for (let i = 0; i < arrayOfLessons.length; i++)
      {
     const element = arrayOfLessons[i];
     if(element===data)
     {
       console.log("we are the championsss!!")
      return
     }
   }
    }
   if(localStorage.getItem('lessonWatched')===null)
     {
      console.log("doesn't exist")
      localStorage.setItem('lessonWatched',(item))
     }
     else 
     {
       items.push(data)
       localStorage.removeItem('lessonWatched')
       localStorage.setItem('lessonWatched',(items))
     }

 }
  return (
    <>
      <div className="mainCourse">
        <header className="headingCourse">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="#" onClick={() => navigate(-1)}><RiIcons.RiArrowRightSLine /> חזור</Link>
            <h1>קורס - <span>{headerForCourse(parseInt(id))}</span></h1>
          </div>
          <Link to="/simulation"><button style={{ padding: '0.75rem 2rem', marginBottom: '0.5rem', borderRadius: '0.25rem' }}>התחל לכתוב קוד!</button></Link>
        </header>
        <div className="containerVids">
          <div className="main-video">
            {/* סרטון שבו צופים בתצוגה ראשית בדף(מתחלפת לפי בחירה) */}
            <div className="video">
              <ReactPlayer
                width="100%"
                height="100%"
                className="video-react"
                url={`${videoChosen}`} controls muted autoPlay></ReactPlayer>
              {/* <h3 className="title">{vidNum}</h3> */}
            </div>
          </div>
        </div>
        <div class="content">
          {videos.map((item, index) =>
            item.studyLanguageCode === parseInt(id) ? (
              <div className='videosBox'>
                <div
                  key={index}
                  className="vid"
                  onClick={(e) => selectVid(item, index, e)}>
                  <ReactPlayer style={{ pointerEvents: 'none' }} width="100%" height="100%" url={`${item.videoName}`} muted></ReactPlayer>
                </div>
                <div className='titleVideo'>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>
                    <h2>{`${item.description}`}</h2>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      fontSize: 24,
                    }}>
                      <Link className='watchVideo'onClick={()=>{lessonWatched(`${item.description} בקורס ${headerForCourse(item.studyLanguageCode)}`)}} to="#" title="צפיתי"><RiIcons.RiEyeLine /></Link>
                      <Link className='markVideo' onClick={()=>{AddMarker(`${item.description} בקורס ${headerForCourse(item.studyLanguageCode)}`)}}  to="#" title="סמן סרטון"><RiIcons.RiErrorWarningLine /></Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
