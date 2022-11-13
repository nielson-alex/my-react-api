import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

    this._isMounted = false;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted === true) {

    }
  }

  handleClick() {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(response => {
        if (response && response.data) {
          this.setState({
            users: [...response.data]
          }, () => {
            console.log("this.state.users:", this.state.users);
          });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click me</button>
        {this.state.users.length > 0
          ? <ul>
            {this.state.users.map(user => <li key={user.name}>{user.name}</li>)}
          </ul>
          : <></>
        }
      </div>
    )
  }
}

export default App;