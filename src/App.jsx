import React, { Component } from 'react';
import logo from './images/logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MembersTable from './MembersTable/MembersTable.jsx';

//Parent component that manages the necessary "models"
class App extends Component {
  constructor(props) {
    super(props);

    this.AREAS = [
      {id: 1, name: "Science", color: 'blue'},
      {id: 2, name: "Engineering", color: 'red'},
      {id: 3, name: "Command", color: 'yellow'},
    ];

    this.RACES = [
      {id: 1, name: "Human", color: 'blue'},
      {id: 2, name: "Betazoid", color: 'red'},
      {id: 3, name: "Vulcan", color: 'yellow'},
    ];

    this.members = [];

    //random MOCK
    for (var i = 1; i <= 430; i++) {
      let id = i;
      let area = this.AREAS[Math.floor(Math.random() * 3)];
      let race = this.RACES[Math.floor(Math.random() * 3)];
      let multiplier = Math.floor(Math.random() * 3) + 1;

      this.members.push({id, area, race, multiplier});
    }

    this.state = {
      members: this.members,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/"  render={(props) => <MembersTable members={this.state.members} {...props}/>}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
