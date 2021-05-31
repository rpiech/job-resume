import React from 'react';
import './hangman.scss'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification__container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter. Try other!</p>
    </div>
  )
}

export default Notification;