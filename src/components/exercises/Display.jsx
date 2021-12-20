import './styles/Display.css';
import exercises from '../../asstes/images/exercise.png';
import quiz from '../../asstes/images/quiz.png';
import React from 'react';
import { Link } from 'react-router-dom';

export const Display = () => {
  return (
    <div>
    <div className='mainExercises'>
       <div className="mainContentEx">
                <div style={{ zIndex: 20, opacity: 1, transform: 'none' }}>
                    <h1 className="headerPelet">תרגולים</h1>
                    <h1 className="headerToMain">בחר/י תרגולים ב - HTML או מבחן.</h1>
                </div>
            </div>
        <div className='mainContainer'>
          <Link className='box' to="/exercises/exercise/1" title='תרגילים ב - HTML'>
            <img src={exercises} alt=''/>
          </Link>
          <Link className='box' to="/exercises/quiz" title='מבחן'>
            <img src={quiz} alt=''/>
          </Link>
        </div>
        </div>
    </div>
  );
}