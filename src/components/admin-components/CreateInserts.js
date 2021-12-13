import React, { useEffect, useState } from 'react'


export const CreateInserts = () =>{
    const [exercises, setExercises] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      getVideos();
    }, [videos]);

    useEffect(() => {
        getExercises();
      }, [exercises]);
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


return(
<div>
  <h1>תרגילים</h1>
 {exercises.map((e)=>(
     <p style={{width:'1900px',direction:'ltr'}}>
         Insert exercises(exercise_code,Study_language_code,exercise_topic,question,answer,description)  values ({e.exerciseCode},{e.studyLanguageCode},N'{e.exerciseTopic}',N'{e.question}','{e.answer}','{e.description}')
     </p>
 )
 )}
   <h1>סרטונים</h1>
   {videos.map((l)=>(
     <p style={{width:'1900px',direction:'ltr'}}>
         Insert Lessons(lesson_code,study_language_code,video_name,description)  values ({l.lessonCode},{l.studyLanguageCode},N'{l.videoName}',N'{l.description}')
     </p>
 )
 )}
</div>
);
}
