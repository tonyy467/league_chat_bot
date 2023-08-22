// import React from 'react';;
import { useNavigate } from 'react-router-dom';

function Homescreen () {
  const navigate = useNavigate();
  function handleClick () {
    navigate('./Chatbot')
  }
    return (
      <div>
        <button onClick={handleClick}> Click here to see your BOT! </button>
      </div>
    )
  }
  
  export default Homescreen;