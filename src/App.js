import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchField: ''
    };
  }

  componentDidMount() {                                                               //lifecycle method
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => console.log(this.setState({ employees: users })))
  }

  handleChange=(e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { employees, searchField } = this.state;
    const filteredemployees = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Employee ICard Database</h1>
        <SearchBox
          placeholder='search employees'
          handleChange={this.handleChange}
        />

        <CardList employees={filteredemployees} />
      </div>
    );
  }
}


export default App;
