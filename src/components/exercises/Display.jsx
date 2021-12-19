import React from 'react';
import { Link } from 'react-router-dom';

export const Display = () => {
  return (
    <div>
      <Link to="/exercises/exercise/1">
        תרגילים html
    </Link>
    <Link to="/exercises/quiz">
        מבחן
    </Link></div>
  );
}