import React from "react";
import { ListGroup } from "react-bootstrap";
import "./style/Profile.css";
export const Profile = () => {
   
  //  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
   
 
  return (
    <div className="profBody">
      <div className="headerProfile">
        <h1>דף פרופיל</h1>{" "}
      </div>
      <div className="profContainer">
        <div className="profSide">
          <img
            className="imageProf"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt=""
          />
        </div>
        <div className="fieldContainer">
            <h3 style={{color:'black'}}>ברוך הבא</h3>
            <ListGroup className="fields">
            {/* <ListGroup.Item className="field">שם מלא {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {user.firstName+" "+user.lastName}  </ListGroup.Item>
            <ListGroup.Item className="field">אימייל {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}  {user.email}</ListGroup.Item>
            <ListGroup.Item className="field">סיסמא {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {user.password}</ListGroup.Item>
            <ListGroup.Item className="field">סוג משתמש {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {user.userTypeCode===1?"מנהל":"משתמש רגיל"}</ListGroup.Item> */}
              <ListGroup.Item className="field">שם מלא {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} ירין אלקלעי </ListGroup.Item>
            <ListGroup.Item className="field">אימייל {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}  yarin@gmail.com</ListGroup.Item>
            <ListGroup.Item className="field">סיסמא {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} 123456</ListGroup.Item>
            <ListGroup.Item className="field">מין {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}  זכר</ListGroup.Item>
           </ListGroup>
        </div>
      </div>
    </div>
  );
};
