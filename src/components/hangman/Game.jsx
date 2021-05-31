import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import Figure from './Figure';
import WrongLetters from './wrongLetters';
import Word from './Word';
import Notification from './Notification';
import Popup from './Popup';
import { notificationShow } from '../../helpers/helpers';
import './hangman.scss'

const words = ['interview', 'developer', 'junior', 'frontend', 'javascript', 'typescript', 'kyero'];
let selectedWord = words[Math.floor(Math.random() * words.length)]

function Game() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();

          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              notificationShow(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(currentLetters => [...currentLetters, letter]);
            } else {
              notificationShow(setShowNotification);
            }
          }
        }
      }
      window.addEventListener('keydown', handleKeydown);

      return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable])

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([])

    const random = [Math.floor(Math.random() * words.length)]
    selectedWord = words[random]
  }

  return (
    <>
    <Intro />
      <div className="game__container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup 
        correctLetters={correctLetters}
        wrongLetters={wrongLetters} 
        selectedWord={selectedWord} 
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  )
}

export default Game;