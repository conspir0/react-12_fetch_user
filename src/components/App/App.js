import React, { Component } from 'react';
import './App.css';
import ButtonGenerateUser from '../ButtonGenerateUser/ButtonGenerateUser'
import UsersList from '../UsersList/UsersList';


class App extends Component {
  state = {
    users: []
  }

  generateUsersList = (users) => {
    this.setState(prevState => ({
      users: [...users.results, ...prevState.users]
    }))
  }

  handleDataFetch = () => {
    const { api } = this.props;

    fetch(api)
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        this.generateUsersList(data)
      }
      )
      .catch(error => console.log(error))
  }

  handleClick = () => {
    this.handleDataFetch()
  }

  render() {
    console.log(this.state.users)
    const { users } = this.state;

    return (
      <div className="container">
        <ButtonGenerateUser
          click={this.handleClick}
        />
        {users.length > 0 && <UsersList usersList={users} />}
      </div>
    )
  }
}

export default App;
