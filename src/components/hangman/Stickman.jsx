import React from 'react';
import './hangman.scss';

const Stickman = () => {
  return (
    <div className="stickman__container">
      <svg height="200" width="200" className="stickman">
        {/* table */}
        <line x1="10" y1="120" x2="100" y2="120" />
        <line x1="100" y1="200" x2="100" y2="120" />
        <line x1="10" y1="200" x2="10" y2="120" />
        {/* laptop */}
        <line x1="50" y1="110" x2="50" y2="60" />
        <line x1="90" y1="110" x2="50" y2="110" />
        {/* stickman's head */}
        <circle cx="140" cy="70" r="20" />
        {/* stickman's body */}
        <line x1="140" y1="90" x2="140" y2="150" />
        {/* stickman's arm */}
        <line x1="140" y1="110" x2="100" y2="110" /> 
        {/* stickman's legs */}
        <line x1="140" y1="150" x2="110" y2="150" />
        <line x1="110" y1="150" x2="110" y2="200" />
        {/* chair */}
        <line x1="120" y1="155" x2="120" y2="200" />
        <line x1="145" y1="155" x2="145" y2="200" />
        <line x1="145" y1="155" x2="120" y2="155" />
        <line x1="145" y1="100" x2="145" y2="160" />
      </svg>
    </div>
  )
}

export default Stickman;