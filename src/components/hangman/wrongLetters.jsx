import React from 'react';
import './hangman.scss'

const WrongLetters = ({wrongLetters}) => {
  return (
    <div className="wrong-letters__container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong letters:</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev == null ? [curr] : [prev, ', ', curr], null)
        }
      </div>
    </div>
  )
}
export default WrongLetters;