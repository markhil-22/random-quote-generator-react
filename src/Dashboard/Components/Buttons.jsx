import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';

function Buttons(props) {
  const [showThumbsUp, setShowThumbsUp] = useState(false);
  const [showThumbsDown, setShowThumbsDown] = useState(false);

  const handleThumbsUpClick = () => {
    if (!showThumbsDown) {
      setShowThumbsUp((prevShowThumbsUp) => !prevShowThumbsUp);
    }
  };

  const handleThumbsDownClick = () => {
    if (!showThumbsUp) {
      setShowThumbsDown((prevShowThumbsDown) => !prevShowThumbsDown);
    }
  };

  return (
    <>
      <div className='buttons'>
        <button
          id={props.id}
          onClick={props.handleClick}
          style={{ color: 'white', backgroundColor: props.color }}
          className='button'
        >
          New Quote
        </button>
      </div>
      <div>
        {showThumbsUp ? (
          <FaThumbsUp className='thumbs-up' onClick={handleThumbsUpClick} />
        ) : (
          <FaRegThumbsUp className='thumbs-up' onClick={handleThumbsUpClick} />
        )}
        {showThumbsDown ? (
          <FaThumbsDown className='thumbs-up' onClick={handleThumbsDownClick} />
        ) : (
          <FaRegThumbsDown
            className='thumbs-up'
            onClick={handleThumbsDownClick}
          />
        )}
      </div>
    </>
  );
}

export default Buttons;
