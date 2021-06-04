import React, { useEffect } from 'react';
import { winCondition } from '../../helpers/helpers';
import Stickman from './Stickman'; 
import { Link } from 'react-router-dom';
import './hangman.scss'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if(winCondition(correctLetters, wrongLetters, selectedWord) == 'win' ) {
    finalMessage = "Good job! You've freed Steve and he can code again!";
    playable = false;
  } else if ( winCondition(correctLetters, wrongLetters, selectedWord) == 'lose') {
    finalMessage = "You've lost and Steve will never code again. Better luck next time!";
    finalMessageRevealWord = `the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div className="popup__container" style={finalMessage != '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h3>{finalMessage}</h3>
        <p>{finalMessageRevealWord}</p>
        <button onClick={playAgain}>Play again</button>
        <Link to="/job-resume">
          <button className="return--button">Homepage</button>
        </Link>
        <Stickman />
      </div>
    </div>
  )
}

export default Popup;