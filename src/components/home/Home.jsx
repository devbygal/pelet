import './styles/Home.css';
import React from "react";
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <main className='mainHome'>
            <div className="mainContentHome bVrYaT">
                <div style={{ zIndex: 20, opacity: 1, transform: 'none' }}>
                    <h1 className="headerPelet">פ.ל.ת</h1>
                    <h1 className="headerToMain">האם כל אחד יכול להיות מתכנת? כן!</h1>
                    <h2 className="descToMain bottomDesc">למד, תרגל לתכנת קוד צד לקוח עם סרטוני לימוד מובילים ליצירת האפליקציה הבאה שלכם בחינם!</h2>
                    <div style={{ opacity: 1, transform: 'none' }}>
                        <Link style={{ padding: '0.75rem 2rem', marginBottom: '0.5rem', borderRadius: '0.25rem' }} to="simulation" className="LinkToSimulator">
                            <strong>&lt;/&gt;</strong> התחל לתכנת בחינם
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className='titleCourses'>
                    <h2>כל הטכנולוגיות הרלוונטיות לקריירה!</h2>
                </div>
                <div className='containerCourses'>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#fe5533" }}>
                            <i className="devicon-html5-plain-wordmark"></i>
                        </div>
                        <div className="content">
                            <h2>שפת תגיות - Html</h2>
                            <p>בקורס זה תקבלו רקע וארגז כלים ראשוני ליצירת דפי אינטרנט בשפת ה-HTML.</p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#48dc6b" }}>
                            <i className="devicon-javascript-plain"></i>
                        </div>
                        <div className="content">
                            <h2>ג'אווה סקריפט - Javascript</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#61d3fe" }}>
                            <i className="devicon-react-original"></i>
                        </div>
                        <div className="content">
                            <h2>ריאקט - React</h2>
                            <p>בקורס זה </p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#6b71e5" }}>
                            <i className="devicon-jquery-plain"></i>
                        </div>
                        <div className="content">
                            <h2>ג'קורי - Jquery</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#0091ff" }}>
                            <i className="devicon-typescript-plain"></i>
                        </div>
                        <div className="content">
                            <h2>טייפ סקריפט - TypeScript</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#ff4866" }}>
                            <i className="devicon-angularjs-plain"></i>
                        </div>
                        <div className="content">
                            <h2>אנגולר - Angular</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#fe5533" }}>
                            <i className="devicon-microsoftsqlserver-plain-wordmark"></i>
                        </div>
                        <div className="content">
                            <h2>מסד נתונים - SQL Server</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#48dc6b" }}>
                            <i className="devicon-mongodb-plain-wordmark"></i>
                        </div>
                        <div className="content">
                            <h2>מסד נתונים - Mongo DB</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='coursesBox' to="/course">
                        <div className="icon" style={{ background: "#6b71e5" }}>
                            <i className="devicon-bootstrap-plain"></i>
                        </div>
                        <div className="content">
                            <h2>בוטספטראפ - Bootstrap</h2>
                            <p></p>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <div className='titleDevelopmentEnvironments'>
                    <h2>סביבות פיתוח</h2>
                </div>
                <div className='containerDevelopmentEnvironments'>
                    <Link className='DEBox' to="/course">
                        <div className="icon" style={{ background: "#6b71e5" }}>
                            <i className="devicon-visualstudio-plain"></i>
                        </div>
                        <div className="content">
                            <h2>ויזואל סטודיו - Visual Studio</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='DEBox' to="/course">
                        <div className="icon" style={{ background: "#0091ff" }}>
                            <i class="devicon-vscode-plain"></i>
                        </div>
                        <div className="content">
                            <h2>ויזואל סטודיו קוד - VSCode</h2>
                            <p></p>
                        </div>
                    </Link>
                    <Link className='DEBox' to="/course">
                        <div className="icon" style={{ background: "#48dc6b" }}>
                            <i class="devicon-android-plain"></i>
                        </div>
                        <div className="content">
                            <h2>אנדרואיד סטודיו - Android</h2>
                            <p></p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}