import React from 'react';
import User from './../User/User'


const UsersList = ({ usersList }) => {
  const users = usersList.map(user => {
    return <User key={user.login.sha256} user={user} />
  });

  return (
    <div className="result-container">
      {users}
    </div>
  )
}

export default UsersList;