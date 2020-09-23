import React from 'react';

const User = ({ user }) => {
  return (
    <div className="result-box">
      <img
        src={user.picture.thumbnail}
        alt={user.login.username}
        className="avatar"
      />
      <h2 className="title">
        {user.name.first} {user.name.last}
      </h2>
      <p>
        {user.email}
      </p>
    </div>
  )
}

export default User;