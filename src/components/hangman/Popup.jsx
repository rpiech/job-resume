import React, { useEffect } from 'react';
import { winCondition } from '../../helpers/helpers'; 
import './hangman.scss'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if(winCondition(correctLetters, wrongLetters, selectedWord) == 'win' ) {
    finalMessage = "Good job! You've won!";
    playable = false;
  } else if ( winCondition(correctLetters, wrongLetters, selectedWord) == 'lose') {
    finalMessage = "You've lost. Better luck next time!";
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
      </div>
    </div>
  )
}

export default Popup;