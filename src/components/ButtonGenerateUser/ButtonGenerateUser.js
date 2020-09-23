import React from 'react';

const ButtonGenerateUser = ({ click }) => {
  return (
    <button
      className="button"
      onClick={click}
    >
      Generate 5 users
    </button>
  )
}

export default ButtonGenerateUser;