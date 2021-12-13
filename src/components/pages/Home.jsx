import "./style/Home.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="main-app">
      <Button variant="primary" ><Link to="/course">JS</Link></Button>
      <br />
      <br />
      <Button  variant="primary" ><Link to="/course">html</Link></Button>
    </div>
  );
};
// import { Menu } from "electron";
// import React from "react";
// import { Footer } from "../MainJs/Footer";
// import "./style/Home.css";
// import './../pages/style/Home.css';

// export const Home = () => {
//     return (
//         <>
//             <Menu />
//             <main className="layout-main">
//                 <div class="Layout-module-ContainerWrapper-2gGsD">
//                     <div class="Layout-module-Container-UlgWf Layout-module-layoutIgnoreDefault-vTYUg Layout-module-layoutHeading-20Ozo HomepageApp-module-HeadingContainer-3woBs">
//                         <section class="Heading-module-HomepageHeading-u4PRp">
//                             <h1 class="Headings-module-LTHeading-biS66 Headings-module-theme-blue--A-1r Headings-module-screenLg-3y3Z9">
//                                 פ.ל.ת<br />
//                                 הכי מהיר, הכי בטוח<br />
//                                 להפוך מתכנת.
//                             </h1>
//                             <h1 class="Headings-module-LTHeading-biS66 Headings-module-theme-blue--A-1r Headings-module-screenSm-3Hegd">
//                                 פ.ל.ת<br />
//                                 הכי מהיר, הכי בטוח<br />
//                                 להפוך מתכנת.
//                             </h1>
//                             <p class="Heading-module-screenLg-3r01B">
//                                 למד, תרגל לתכנת קוד צד לקוח עם <br />
//                                 <strong> סרטוני לימוד ותרגילים מובילים </strong> <strong> ליצירת האפליקציה הבאה שלכם <span style={{ color: "#1c2b33" }}>בחינם!</span>. </strong>
//                             </p>
//                             <p class="Heading-module-screenSm-_3t4_">למד, תרגל לתכנת קוד צד לקוח עם <br />
//                                 <strong> סרטוני לימוד ותרגילים מובילים </strong> <strong> ליצירת האפליקציה הבאה שלכם <span style={{ color: "#1c2b33" }}>בחינם!</span>. </strong></p>
//                         </section>
//                         <div id="workspaces-start" style={{ position: "absolute", marginTop: "-50px" }}></div>
//                         <section class="Starters-module-WorkspacesWrapper-3z3OA" data-turbolinks="false">
//                             <h2>צד לקוח - לימוד בסיס</h2>
//                             <ul class="Starters-module-WorkspaceWrapper-139Q4" data-aos="fade-up" data-aos-duration="3000">
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/web-platform">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path d="M2.2 13.96L.93 0h14.16l-1.3 13.95-5.8 1.55" fill="#E44D26"></path>
//                                                 <path d="M8 14.31V1.14h5.79l-1.1 11.91" fill="#F16529"></path>
//                                                 <path d="M3.55 2.85H8v1.71H5.5l.16 1.75H8v1.71H4.03l-.48-5.17zm.56 6.03H5.9l.13 1.37 1.98.5v1.8l-3.64-.98" fill="#EBEBEB"></path>
//                                                 <path d="M12.43 2.85H8v1.71h4.28l.16-1.7zm-.32 3.46H7.99v1.71h2.19l-.21 2.23-1.98.5v1.79l3.63-.97" fill="#FFF"></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>שפת תגיות</h3>
//                                                 <p>HTML/CSS</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/js">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path d="M0 0h16v16H0V0z" fill="#F7DF1E"></path>
//                                                 <path
//                                                     d="M4.2 13.37l1.23-.74c.24.42.45.77.97.77.5 0 .8-.19.8-.94V7.35h1.5v5.13c0 1.56-.9 2.27-2.24 2.27-1.2 0-1.9-.63-2.25-1.38zm5.32-.16l1.23-.7c.32.52.74.9 1.48.9.62 0 1.02-.3 1.02-.74 0-.51-.4-.7-1.1-1l-.37-.16c-1.09-.46-1.8-1.04-1.8-2.26 0-1.13.85-1.99 2.2-1.99.95 0 1.64.33 2.13 1.2l-1.17.75c-.25-.46-.53-.64-.96-.64-.44 0-.72.28-.72.64 0 .46.28.64.92.92l.38.16c1.27.55 2 1.1 2 2.36 0 1.35-1.07 2.1-2.5 2.1-1.4 0-2.3-.67-2.74-1.54"
//                                                 ></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>ג'אווה סקריפט</h3>
//                                                 <p>JavaScript</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/typescript">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path
//                                                     d="M0 8v8h16V0H0v8zm12.9-.64a2 2 0 011 .58c.14.16.36.44.38.51 0 .02-.7.49-1.11.75-.02.01-.08-.05-.15-.16-.2-.3-.42-.43-.75-.45-.49-.03-.8.22-.8.65 0 .12.02.2.07.3.11.22.3.35.93.62 1.15.5 1.64.82 1.94 1.28.34.52.42 1.34.19 1.95-.26.67-.89 1.12-1.77 1.27a5 5 0 01-1.22-.01 2.94 2.94 0 01-1.63-.85 2.74 2.74 0 01-.42-.62l.15-.1.6-.34.45-.26.1.14c.13.2.43.49.6.58.52.27 1.22.23 1.56-.08.15-.13.21-.27.21-.48a.58.58 0 00-.12-.4c-.12-.18-.38-.33-1.1-.64a3.97 3.97 0 01-1.5-.93c-.2-.2-.37-.53-.45-.8-.06-.22-.07-.79-.02-1.02.17-.8.77-1.35 1.64-1.52.28-.06.94-.04 1.21.03zm-3.76.67v.66H7.06v5.91H5.59V8.7H3.5v-.65c0-.35.01-.65.02-.66h5.61v.65z"
//                                                     fill="#007ACC"
//                                                 ></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>טייפ סקריפט</h3>
//                                                 <p>TypeScript</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                             <h2>צד לקוח - לימוד מתקדם &amp; ספריות</h2>
//                             <ul class="Starters-module-WorkspaceWrapper-139Q4" data-aos="fade-up" data-aos-duration="3000">
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/angular-ivy">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path d="M8 0L.5 2.59l1.13 9.58L8 15.57l6.37-3.4 1.13-9.58L8 0z" fill="#DD0031"></path>
//                                                 <path d="M8 0v1.73-.02 13.86l6.37-3.4 1.13-9.58L8 0z" fill="#C3002F"></path>
//                                                 <path d="M8 1.71L3.3 11.87h1.76L6 9.6h4l.92 2.27h1.76L8 1.71zm1.37 6.5H6.63L8 5.02l1.37 3.2z" fill="#fff"></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>אנגולר (TS)</h3>
//                                                 <p>TypeScript</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/react">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="#0DB5EA" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path
//                                                     d="M16 8c0-1.06-1.32-2.06-3.36-2.68.46-2.08.26-3.72-.66-4.26a1.5 1.5 0 00-.74-.18v.72c.16 0 .28.02.38.08.44.26.64 1.22.48 2.46l-.16.96a15.5 15.5 0 00-2.08-.36c-.44-.6-.9-1.16-1.36-1.64 1.08-.96 2.08-1.5 2.76-1.5V.88c-.9 0-2.08.64-3.26 1.74C6.8 1.52 5.64.88 4.74.88v.72c.68 0 1.68.54 2.74 1.52-.46.48-.92 1.02-1.34 1.62-.74.08-1.44.2-2.08.36a5.44 5.44 0 01-.16-.94c-.16-1.24.04-2.22.48-2.48.1-.06.22-.08.38-.08V.9c-.28 0-.52.06-.74.18-.92.52-1.12 2.18-.64 4.24C1.32 5.94 0 6.94 0 8s1.32 2.06 3.36 2.68c-.46 2.08-.26 3.72.66 4.26.22.12.46.18.74.18.9 0 2.08-.64 3.26-1.74 1.18 1.1 2.36 1.74 3.26 1.74.28 0 .52-.06.74-.18.92-.52 1.12-2.18.64-4.24C14.68 10.06 16 9.06 16 8zm-4.24-2.18c-.12.42-.28.86-.44 1.28l-.42-.78c-.16-.26-.3-.52-.46-.76.44.08.88.16 1.32.26zm-1.5 3.48c-.26.44-.52.86-.78 1.24a17.94 17.94 0 01-2.94 0A16.05 16.05 0 015.08 8a16.05 16.05 0 011.46-2.54 17.94 17.94 0 012.94 0A16.05 16.05 0 0110.94 8c-.2.44-.44.88-.68 1.3zm1.06-.42c.18.44.32.88.46 1.3-.42.1-.88.2-1.34.26.16-.26.32-.5.46-.78l.42-.78zM8 12.36c-.3-.32-.6-.66-.9-1.04.3.02.6.02.9.02.3 0 .6 0 .9-.02-.28.38-.6.72-.9 1.04zm-2.42-1.92c-.46-.06-.9-.16-1.34-.26.12-.42.28-.86.44-1.28l.42.78.48.76zM8 3.64c.3.32.6.66.9 1.04-.3-.02-.6-.02-.9-.02-.3 0-.6 0-.9.02.28-.38.6-.72.9-1.04zM5.58 5.56c-.16.26-.32.5-.46.78-.16.26-.3.52-.42.78-.18-.44-.32-.88-.46-1.3.42-.1.88-.18 1.34-.26zm-2.96 4.1C1.46 9.16.72 8.52.72 8s.74-1.16 1.9-1.66c.28-.12.58-.22.9-.32.18.64.44 1.3.74 1.98-.3.68-.54 1.34-.72 1.98-.32-.1-.62-.2-.92-.32zm1.76 4.66c-.44-.26-.64-1.22-.48-2.46l.16-.96c.64.16 1.34.28 2.08.36.44.6.9 1.16 1.36 1.64-1.08.96-2.08 1.5-2.74 1.5a.98.98 0 01-.38-.08zm7.74-2.5c.16 1.24-.04 2.22-.48 2.48a.72.72 0 01-.38.08c-.68 0-1.68-.54-2.74-1.52.46-.48.92-1.02 1.34-1.62.74-.08 1.44-.2 2.08-.36.08.32.14.64.18.94zm1.26-2.16c-.28.12-.58.22-.9.32-.18-.64-.44-1.3-.74-1.98.3-.68.54-1.34.72-1.98.32.1.62.22.92.34 1.16.5 1.9 1.14 1.9 1.66 0 .5-.76 1.14-1.9 1.64zM8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
//                                                 ></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>ריאקט (JS)</h3>
//                                                 <p>JavaScript</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/react-ts">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="#3096ff" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path
//                                                     d="M16 8c0-1.06-1.32-2.06-3.36-2.68.46-2.08.26-3.72-.66-4.26a1.5 1.5 0 00-.74-.18v.72c.16 0 .28.02.38.08.44.26.64 1.22.48 2.46l-.16.96a15.5 15.5 0 00-2.08-.36c-.44-.6-.9-1.16-1.36-1.64 1.08-.96 2.08-1.5 2.76-1.5V.88c-.9 0-2.08.64-3.26 1.74C6.8 1.52 5.64.88 4.74.88v.72c.68 0 1.68.54 2.74 1.52-.46.48-.92 1.02-1.34 1.62-.74.08-1.44.2-2.08.36a5.44 5.44 0 01-.16-.94c-.16-1.24.04-2.22.48-2.48.1-.06.22-.08.38-.08V.9c-.28 0-.52.06-.74.18-.92.52-1.12 2.18-.64 4.24C1.32 5.94 0 6.94 0 8s1.32 2.06 3.36 2.68c-.46 2.08-.26 3.72.66 4.26.22.12.46.18.74.18.9 0 2.08-.64 3.26-1.74 1.18 1.1 2.36 1.74 3.26 1.74.28 0 .52-.06.74-.18.92-.52 1.12-2.18.64-4.24C14.68 10.06 16 9.06 16 8zm-4.24-2.18c-.12.42-.28.86-.44 1.28l-.42-.78c-.16-.26-.3-.52-.46-.76.44.08.88.16 1.32.26zm-1.5 3.48c-.26.44-.52.86-.78 1.24a17.94 17.94 0 01-2.94 0A16.05 16.05 0 015.08 8a16.05 16.05 0 011.46-2.54 17.94 17.94 0 012.94 0A16.05 16.05 0 0110.94 8c-.2.44-.44.88-.68 1.3zm1.06-.42c.18.44.32.88.46 1.3-.42.1-.88.2-1.34.26.16-.26.32-.5.46-.78l.42-.78zM8 12.36c-.3-.32-.6-.66-.9-1.04.3.02.6.02.9.02.3 0 .6 0 .9-.02-.28.38-.6.72-.9 1.04zm-2.42-1.92c-.46-.06-.9-.16-1.34-.26.12-.42.28-.86.44-1.28l.42.78.48.76zM8 3.64c.3.32.6.66.9 1.04-.3-.02-.6-.02-.9-.02-.3 0-.6 0-.9.02.28-.38.6-.72.9-1.04zM5.58 5.56c-.16.26-.32.5-.46.78-.16.26-.3.52-.42.78-.18-.44-.32-.88-.46-1.3.42-.1.88-.18 1.34-.26zm-2.96 4.1C1.46 9.16.72 8.52.72 8s.74-1.16 1.9-1.66c.28-.12.58-.22.9-.32.18.64.44 1.3.74 1.98-.3.68-.54 1.34-.72 1.98-.32-.1-.62-.2-.92-.32zm1.76 4.66c-.44-.26-.64-1.22-.48-2.46l.16-.96c.64.16 1.34.28 2.08.36.44.6.9 1.16 1.36 1.64-1.08.96-2.08 1.5-2.74 1.5a.98.98 0 01-.38-.08zm7.74-2.5c.16 1.24-.04 2.22-.48 2.48a.72.72 0 01-.38.08c-.68 0-1.68-.54-2.74-1.52.46-.48.92-1.02 1.34-1.62.74-.08 1.44-.2 2.08-.36.08.32.14.64.18.94zm1.26-2.16c-.28.12-.58.22-.9.32-.18-.64-.44-1.3-.74-1.98.3-.68.54-1.34.72-1.98.32.1.62.22.92.34 1.16.5 1.9 1.14 1.9 1.66 0 .5-.76 1.14-1.9 1.64zM8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
//                                                 ></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>ריאקט (TS)</h3>
//                                                 <p>TypeScript</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/vue">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path d="M9.85 1.07L8 4.27l-1.85-3.2H0l8 13.86 8-13.86H9.85z" fill="#41B883"></path>
//                                                 <path d="M9.85 1.07L8 4.27l-1.85-3.2H3.2L8 9.4l4.8-8.32H9.85z" fill="#34495E"></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>ויו</h3>
//                                                 <p>Vue/JavaScript</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/angularjs">
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path d="M7.98 0L.45 2.65l1.19 9.86L7.99 16l6.37-3.54 1.2-9.86L7.97 0z" fill="#B3B3B3"></path>
//                                                 <path d="M14.8 3.17L7.96.84v14.33l5.74-3.18 1.1-8.82z" fill="#A6120D"></path>
//                                                 <path d="M1.3 3.21l1.01 8.83 5.65 3.13V.84L1.29 3.2z" fill="#DD1B16"></path>
//                                                 <path d="M9.84 8.47l-1.88.88H5.97l-.93 2.33-1.73.03L7.96 1.36l1.88 7.1zm-.18-.45L7.97 4.68 6.6 7.97h1.37l1.7.05z" fill="#F2F2F2"></path>
//                                                 <path d="M7.96 1.36l.01 3.32 1.57 3.29H7.96v1.38h2.19l1.02 2.36 1.66.03L7.96 1.36z" fill="#B3B3B3"></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>אנגולר (JS)</h3>
//                                                 <p>JavaScript</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                             <h2>סביבות פיתוח</h2>
//                             <ul class="Starters-module-WorkspaceWrapper-139Q4" data-aos="fade-left" data-aos-duration="3000">
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/nextjs">
//                                         <span class="Starters-module-LinkBeta-2E6Vb">+הורדה</span>
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg viewBox="0 0 128 128" fill="currentColor" width="1em" height="1em" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path fill="#68217a" d="M95 2.3l30.5 12.3v98.7l-30.7 12.4-49-48.7-31 24.1-12.3-6.2V33.1l12.3-5.9 31 24.3zM14.8 45.7v37.5l18.5-19zm48.1 18.5l31.9 25.1V39z"></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>ויזואל סטודיו</h3>
//                                                 <p>Microsoft</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/github/nuxt/starter/tree/stackblitz">
//                                         <span class="Starters-module-LinkBeta-2E6Vb">+הורדה</span>
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg viewBox="0 0 128 128" width="1em" height="1em" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0" fill="#2489ca"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0" fill="#1070b3"></path><path d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0" fill="#0877b9"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0" fill="#3c99d4"></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>ויזואל סטודיו קוד</h3>
//                                                 <p>Microsoft</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a class="Starters-module-Link-ksywL" href="/fork/graphql">
//                                         <span class="Starters-module-LinkBeta-2E6Vb">+הורדה</span>
//                                         <div class="Starters-module-LinkContent-1dBg-">
//                                             <svg viewBox="0 0 128 128" width="1em" height="1em" class="Starters-module-LinkIcon-3Ozab">
//                                                 <path fill="#A4C439" d="M21.005 43.003c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736a7.338 7.338 0 007.342 7.343 7.33 7.33 0 007.338-7.342V50.34a7.345 7.345 0 00-7.346-7.337m59.193-27.602l5.123-9.355a1.023 1.023 0 00-.401-1.388 1.022 1.022 0 00-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005L44.45 5.075a1.01 1.01 0 00-1.378-.406 1.007 1.007 0 00-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.002-11.351-6.79-21.221-16.845-26.427M48.942 29.858a2.772 2.772 0 01.003-5.545 2.78 2.78 0 012.775 2.774 2.776 2.776 0 01-2.778 2.771m30.106-.005a2.77 2.77 0 01-2.772-2.771 2.793 2.793 0 012.773-2.778 2.79 2.79 0 012.767 2.779 2.767 2.767 0 01-2.768 2.77M31.195 44.39l.011 47.635a7.822 7.822 0 007.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004a7.835 7.835 0 007.836-7.834l-.009-47.635-65.624.011zm83.134 5.943a7.338 7.338 0 00-7.341-7.339c-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738a7.334 7.334 0 007.339 7.339 7.337 7.337 0 007.338-7.343l-.005-30.737z"></path>
//                                             </svg>
//                                             <div>
//                                                 <h3>אנדרואיד סטודיו</h3>
//                                                 <p>Google/JetBrains</p>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </section>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     );
// }
