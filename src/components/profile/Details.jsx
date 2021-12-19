import './styles/Details.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { accountService } from '../_services';

export const Details = () => {
    const user = accountService.userValue;
    return (
        // <div>
        //     <h1>My Profile</h1>
        //     <p>
        //         <strong>שם: </strong> {user.firstName} {user.lastName}<br />
        //         <strong>דואר אלקטרוני: </strong> {user.email}
        //     </p>
        //     <p><Link to="/profile/update">עדכון פרופיל</Link></p>
        //     <p><Link to="#" onClick={accountService.logout} className="nav-item nav-link">התנתק</Link></p>
        // </div>
        <div className="container">
            <div className="mainProfile">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4>שלום {user.firstName}</h4>
                                        <p className="text-secondary mb-1">מתכנת פסיכי</p>
                                        <p className="text-muted font-size-sm">מדינה:ישראל</p>
                                        <button className="btn btn-primary">עקוב</button>
                                        <button className="btn btn-outline-primary">הודעה</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> שם פרטי</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user.firstName}
                                    </div>
                                </div>
                                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                                <div class="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">שם משפחה</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.lastName}
                                    </div>
                                </div>
                                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">אימייל</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {user.email}
                                    </div>
                                </div>
                                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">תחביבים</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        לנגן בחליל
                                    </div>
                                </div>
                                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">כתובת</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        קדימה-צורן
                                    </div>
                                </div>
                                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p><Link className="btn btn-info " style={{ backgroundColor: 'red !important' }} to="/profile/update"><div style={{ color: 'black' }}>עדכון פרופיל</div></Link></p>
                                        <br />
                                        <Button variant='danger'><Link to="#" onClick={accountService.logout} ><div style={{ color: 'black' }}>התנתק</div></Link></Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row gutters-sm">
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">שיעורים שסומנו</i></h6>
                                        <small>שיעור {localStorage.getItem("markLessonCode")} </small>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                        <small>Web Design</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Website Markup</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>One Page</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Mobile Template</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Backend API</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}