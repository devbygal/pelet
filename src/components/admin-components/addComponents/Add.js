import React from "react";
import "./../../pages/style/Admin.css";
import * as FiIcon from "react-icons/fi";
import { Link } from "react-router-dom";
import { LessonAdd } from "./LessonAdd";
import { ExerciseAdd } from "./ExercsieAdd";

export const Add = () => {
  // יצירת משתנים למשתמשים,וסרטונים



  // השמת הנתונים בטבלאות עם פילטר לחיפוש בדף
  return (
    // טבלת משתמשים
    <div className="scroller">
       <div style={{display:'flex',background:'brown',color:'beige'}}>
        <Link style={{color:'beige'}} to="/admin">  <FiIcon.FiEdit  style={{width:'50px',height:'20px',marginRight:'40px'}} /> </Link> 
          <h6 style={{paddingTop:'5px',flexDirection:'row'}}>  עריכת חומר</h6>
          <Link style={{color:'beige'}} to="/addContent">  <FiIcon.FiPlusSquare  style={{width:'50px',height:'30px',marginRight:'40px'}} /> </Link> 
          <h6 style={{paddingTop:'5px',flexDirection:'row'}}>  הוספת חומר</h6>
          </div>
         <div className="container">
        <h1>דף מנהל - הוספה</h1>
        {/* הוספת שיעור */}
        <LessonAdd/>
       {/* הוספת תרגיל */}
       <ExerciseAdd/>
      </div>
    </div>
  );
};
