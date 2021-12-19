import './styles/Details.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { accountService } from '../_services';

export const Details = () => {
  const user = accountService.userValue;
  const [markers] = useState([localStorage.getItem("lessonMarked")!==null?localStorage.getItem("lessonMarked"):""])
  const [watched] = useState([localStorage.getItem("lessonWatched")!==null?localStorage.getItem("lessonWatched"):""])
  console.log(markers)
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
                  {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" /> */}
                  <img src='https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png' alt="Admin" class="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>שלום {user.firstName}</h4>
                    <p className="text-secondary mb-1">ברוך הבא </p>
                    <p className="text-muted font-size-sm">לרשותך עריכת פרטים וצפייה בנתונים</p>
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
                    <h5 className="mb-0"> שם פרטי</h5>
                  </div>
                  <div className="col-sm-9" style={{fontSize:'18px'}}>
                    {user.firstName}
                  </div>
                </div>
                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                <div class="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">שם משפחה</h5>
                  </div>
                  <div className="col-sm-9" style={{fontSize:'18px'}}>
                    {user.lastName}
                  </div>
                </div>
                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">אימייל</h5>
                  </div>
                  <div className="col-sm-9" style={{fontSize:'18px'}}>
                    {user.email}
                  </div>
                </div>
             
                <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
                <div className="row">
                  <div className="col-sm-12">
                    <Link className="btn btn-info " style={{ backgroundColor: 'red !important',marginLeft:"500px" }} to="/profile/update"><div style={{ color: 'black' }}>עדכון פרופיל</div></Link>
                    {/* <br /> */}
                    <Button variant='danger'><Link to="#" onClick={accountService.logout} ><div style={{ color: 'black' }}>התנתק</div></Link></Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">שיעורים שסומנו</i></h5>
                    {markers[0].split(',').map((m, i) => {
                      return (
                        <div key={i}>
                          <p > {m} </p>
                          <br />
                        </div>
                      )
                    })}
                             <Button onClick={()=>{localStorage.removeItem('lessonMarked');
                    window.location.reload();
                  }}>נקה רשימה</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">שיעורים שנצפו</i> </h5>
                    {watched[0].split(',').map((m, i) => {
                      return (
                        <div key={i}>
                          <p > {m} </p>
                          <br />
                        </div>
                      )
                    })}
                    <Button onClick={()=>{localStorage.removeItem('lessonWatched');
                    window.location.reload();
                  }}>נקה רשימה</Button>
                    <div>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
                      </div>
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