import './styles/Quiz.css';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";

// יצירת מערך והעברת המספר, השאלות, האפשרויות והתשובות
let questions = [
  {
    numb: 1,
    question: "מה מסמל HTML?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "מה מייצג CSS?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "מה מייצג PHP?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "מה מייצג SQL?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "מה מייצג XML?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
];

export const Ouiz = () => {

  let navigate = useNavigate();

  useEffect(() => {
    onInit();
  }, [])

  const onInit = () => {
    if (!sessionStorage.getItem('isPageRefreshed')) {
      sessionStorage.setItem('isPageRefreshed', 'true');
      // זה יטען מחדש את הדף פעם אחת ימנע טעינה מחדש של הדף שוב עבור אותה הפעלה.
      window.location.reload();
    } else {
      sessionStorage.clear();
    }
  }

  const info_box = document.querySelector(".info_box");
  const quiz_box = document.querySelector(".quiz_box");
  const result_box = document.querySelector(".result_box");
  const option_list = document.querySelector(".option_list");
  const time_line = document.querySelector("header .time_line");
  const timeText = document.querySelector(".timer .time_left_txt");
  const timeCount = document.querySelector(".timer .timer_sec");
  const next_btn = document.querySelector("footer .next_btn");
  const bottom_ques_counter = document.querySelector("footer .total_que");

  let timeValue = 15;
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter;
  let counterLine;
  let widthValue = 0;

  
// אם לחצו על לחצן startQuiz
  const startQuiz = () => {
    document.querySelector(".info_box").classList.add("activeInfo"); //הצג תיבת מידע;
    console.log('startQuiz')
  }


// אם לחצו על לחצן exitQuiz
  const exitQuiz = () => {
    document.querySelector(".info_box").classList.remove("activeInfo"); //הסתר תיבת מידע
    console.log('exitQuiz')
  }

  // אם לחצו על לחצן ההמשך Quiz
  const continueQuiz = () => {
    document.querySelector(".info_box").classList.remove("activeInfo"); //הסתר תיבת מידע
    document.querySelector(".quiz_box").classList.add("activeQuiz"); //הצג תיבת מבחן
    showQuetions(0); //קורא לפונקציית showQuestions
    queCounter(1); //מעביר פרמטר אחד ל-queCounter
    startTimer(15); // מתקשר לפונקציית startTimer
    startTimerLine(0); //קורא לפונקציית startTimerLine
    console.log('continueQuiz')
  }

  // אם לחצו על לחצן ההפעלה מחדש של Quiz
  const restQuiz = () => {
    document.querySelector(".quiz_box").classList.add("activeQuiz"); //הצג תיבת מבחן
    document.querySelector(".result_box").classList.remove("activeResult"); //הסתר תיבת תוצאה
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //קורא לפונקציית showQuestions
    queCounter(que_numb); //העברת ערך que_numb ל-queCounter
    clearInterval(counter); //נקה מונה
    clearInterval(counterLine); //נקה קו נגד
    startTimer(timeValue); // מתקשר לפונקציית startTimer
    startTimerLine(widthValue); //קורא לפונקציית startTimerLine
    timeText.textContent = "הזמן שנותר"; //c//שנה את הטקסט של timeText לזמן שנותר
    document.querySelector("footer .next_btn").classList.remove("show"); //הסתיר את הכפתור הבא
    console.log('restQuiz')
  }

  
// אם לחצן quitQuiz נלחץ
  const quitQuiz = () => {
    window.location.reload();
    console.log('quitQuiz')
  }


// אם הלחצן Next Que נלחץ
  const nextQuiz = () => {
    if (que_count < questions.length - 1) { //אם ספירת השאלות קטנה מאורך השאלות הכולל
      que_count++; //הגדל את הערך que_count
      que_numb++; //הגדל את הערך que_numb
      showQuetions(que_count); //קורא לפונקציית showQuestions
      queCounter(que_numb); //העברת ערך que_numb ל-queCounter
      clearInterval(counter); //נקה מונה
      clearInterval(counterLine); //נקה קו נגד
      startTimer(timeValue); // מתקשר לפונקציית startTimer
      startTimerLine(widthValue); //קורא לפונקציית startTimerLine
      timeText.textContent = "הזמן שנותר"; //c//שנה את TimeText לזמן שנותר
      document.querySelector("footer .next_btn").classList.remove("show"); //הסתיר את הכפתור הבא
    } else {
      clearInterval(counter); //נקה מונה
      clearInterval(counterLine); //נקה קו נגד
      showResult(); //קורא לפונקציית showResult
    }
    console.log('nextQuiz')
  }

// קבלת שאלות ואפשרויות ממערך
function showQuetions(index){
  const que_text = document.querySelector(".que_text");

// יצירת תג חדש עבור שאלה ואפשרות והעברת הערך באמצעות אינדקס מערךspan ו-div
  let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; //הוספת תג span חדש בתוך que_tag
  option_list.innerHTML = option_tag; //הוספת תג div חדש בתוך option_tag

  const option = option_list.querySelectorAll(".option");

 // הגדר את תכונת onclick לכל האפשרויות הזמינות
  for(let i=0; i < option.length; i++){
      option[i].onclick = function() {
        optionSelected(this);
     };
  }
}

// יצירת תגיות ה-div החדשות עבור אייקונים
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//אם המשתמש לחץ על האפשרות
function optionSelected(answer){
  clearInterval(counter); //נקה מונה
  clearInterval(counterLine); //נקה קו נגד
  let userAns = answer.textContent; //קבלת אפשרות בחירת משתמש
  let correcAns = questions[que_count].answer; //קבלת תשובה נכונה ממערך
  const allOptions = option_list.children.length; //מקבל את כל פריטי האפשרויות
  
  if(userAns === correcAns){ //אם האפשרות שנבחרה על ידי המשתמש שווה לתשובה הנכונה של המערך
      userScore += 1; //שדרוג ערך הציון עם 1
      answer.classList.add("correct"); //הוספת צבע ירוק לתיקון האפשרות שנבחרה
      answer.insertAdjacentHTML("beforeend", tickIconTag); //הוספת סמל סימון לתיקון האפשרות שנבחרה
      console.log("תשובה נכונה");
      console.log("התשובות הנכונות שלך = " + userScore);
  }else{
      answer.classList.add("incorrect"); //הוספת צבע אדום לתיקון האפשרות שנבחרה
      answer.insertAdjacentHTML("beforeend", crossIconTag); //הוספת סמל צלב לתיקון האפשרות שנבחרה
      console.log("תשובה לא נכונה");

      for(let i=0; i < allOptions; i++){
          if(option_list.children[i].textContent === correcAns){ //אם יש אפשרות אשר מותאמת לתשובה של מערך 
              option_list.children[i].setAttribute("class", "option correct"); //הוספת צבע ירוק לאפשרות המתאימה
              option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //הוספת סמל סימון לאפשרות מותאמת
              console.log("תשובה נכונה נבחרה אוטומטית.");
          }
      }
  }
  for(let i=0; i < allOptions; i++){
      option_list.children[i].classList.add("disabled"); //ברגע שהמשתמש בחר אפשרות ואז השבית את כל האפשרויות
  }
  next_btn.classList.add("show"); //הצג את הלחצן הבא אם המשתמש בחר באפשרות כלשהי
}

function showResult(){
  info_box.classList.remove("activeInfo"); //הסתר תיבת מידע
  quiz_box.classList.remove("activeQuiz"); //הסתר תיבת מבנה
  result_box.classList.add("activeResult"); //הצג תיבת תוצאות
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3){ // אם המשתמש קיבל ציון של יותר מ-3
      //יצירת תג span חדש והעברת מספר ציון המשתמש ומספר השאלה הכולל
      let scoreTag = '<span>וברכותינו! 🎉, קיבלת <p>'+ userScore +'</p> מתוך <p>'+ questions.length +'</p></span>';
      scoreText.innerHTML = scoreTag;  //הוספת תג span חדש בתוך score_Text
  }
  else if(userScore > 1){ // אם המשתמש קיבל ציון גבוה מ-1
      let scoreTag = '<span>כל הכבוד!!! 😎, קיבלת <p>'+ userScore +'</p> מתוך <p>'+ questions.length +'</p></span>';
      scoreText.innerHTML = scoreTag;
  }
  else{ // אם המשתמש קיבל ציון נמוך מ-1
      let scoreTag = '<span>מצטערים 😐, קיבלת רק <p>'+ userScore +'</p> מתוך <p>'+ questions.length +'</p></span>';
      scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time){
  counter = setInterval(timer, 1000);
  function timer(){
      timeCount.textContent = time; //שינוי הערך של timeCount עם ערך הזמן
      time--; //הקטין את ערך הזמן
      if(time < 9){ //אם הטיימר קטן מ-9
          let addZero = timeCount.textContent; 
          timeCount.textContent = "0" + addZero; //הוסף 0 לפני ערך הזמן
      }
      if(time < 0){ //אם הטיימר קטן מ-0
          clearInterval(counter); //נקה מונה
          timeText.textContent = "פסק זמן"; //c//שנה את טקסט הזמן לפסק זמן
          const allOptions = option_list.children.length;//מקבל את כל פריטי האפשרויות
          let correcAns = questions[que_count].answer; //קבלת תשובה נכונה ממערך
          for(let i=0; i < allOptions; i++){
              if(option_list.children[i].textContent === correcAns){ //אם יש אפשרות אשר מותאמת לתשובה של מערך
                  option_list.children[i].setAttribute("class", "option correct"); //הוספת צבע ירוק לאפשרות המתאימה
                  option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //הוספת סמל סימון לאפשרות מותאמת
                  console.log("פסק זמן: תשובה נכונה נבחרה אוטומטית.");
              }
          }
          for(let i=0; i < allOptions; i++){
              option_list.children[i].classList.add("disabled"); //ברגע שהמשתמש בחר אפשרות ואז השבית את כל האפשרויות
          }
          next_btn.classList.add("show"); //הצג את הלחצן הבא אם המשתמש בחר באפשרות כלשהי
      }
  }
}

function startTimerLine(time){
  counterLine = setInterval(timer, 29);
  function timer(){
      time += 1; //שדרוג ערך זמן עם 1
      time_line.style.width = time + "px"; //הגדלת רוחב קו הזמן עם פיקסלים לפי ערך זמן
      if(time > 549){ //אם ערך הזמן גדול מ-549
          clearInterval(counterLine); //נקה קו נגד
      }
  }
}

function queCounter(index){

//יצירת תג span חדש והעברת מספר השאלה והשאלה הכוללת
  let totalQueCounTag = '<span><p>'+ index +'</p> מתוך <p>'+ questions.length +'</p> שאלות</span>';
  bottom_ques_counter.innerHTML = totalQueCounTag; //הוספת תג span חדש בתוך bottom_ques_counter
}

  return (
    <div className='quizContainer'>
      <header className='headingCourse'>
      <div style={{ display: 'flex', flexDirection: 'column', padding: 4 }}>
      <Link to="#" onClick={() => navigate(-1)}
            style={{
              background: '#000000',
              padding: '4px 24px',
              borderRadius: '0.33rem'
            }}>
        <RiIcons.RiArrowRightSLine /> חזור</Link>
      </div>
      </header>
      <div className="start_btn"><button onClick={() => startQuiz()}>התחל מבחן</button></div>
      <div className="info_box">
        <div className="info-title"><span>כמה כללים של המבחן הזה</span></div>
        <div className="info-list">
          <div className="info">1. יהיו לך רק <span>15 שניות</span> לכל שאלה.</div>
          <div className="info">2. לאחר שתבחר את התשובה שלך, לא ניתן לבטל אותה.</div>
          <div className="info">3. אתה לא יכול לבחור שום אפשרות ברגע שהזמן עובר.</div>
          <div className="info">4. אתה לא יכול לצאת מהמבחן בזמן שאתה נבחן.</div>
          <div className="info">5. תקבל נקודות על בסיס התשובות הנכונות שלך.</div>
        </div>
        <div className="buttons">
          <button className="quit" onClick={() => exitQuiz()}>צא מהמבחן</button>
          <button className="restart" onClick={() => continueQuiz()}>המשך</button>
        </div>
      </div>

      <div className="quiz_box">
        <header>
          <div className="title">פ.ל.ת מציג מבחן 15 שניות</div>
          <div className="timer">
            <div className="time_left_txt">הזמן שנותר</div>
            <div className="timer_sec">15</div>
          </div>
          <div className="time_line"></div>
        </header>
        <section>
          <div className="que_text">
            {/* <!-- Here I've inserted question from JavaScript --> */}
          </div>
          <div className="option_list">
            {/* <!-- Here I've inserted options from JavaScript --> */}
          </div>
        </section>

        <footer>
          <div className="total_que">
            {/* <!-- Here I've inserted question from JavaScript --> */}
          </div>
          <button className="next_btn" onClick={() => nextQuiz()}>הבא</button>
        </footer>
      </div>

      <div className="result_box">
        <div className="icon">
          <i className="fas fa-crown"></i>
        </div>
        <div className="complete_text">סיימת את המבחן!</div>
        <div className="score_text">
          {/* <!-- Here I've inserted question from JavaScript --> */}
        </div>
        <div className="buttons">
          <button className="restart" onClick={() => restQuiz()}>מבחן חוזר</button>
          <button className="quit" onClick={() => quitQuiz()}>עזוב את המבחן</button>
        </div>
      </div>
    </div>
  );
}