import React, { Component } from 'react';
import './App.css';

// import SearchBar from './SearchBar.js';

class App extends Component {
    constructor(props) {
      super(props);

    this.state = {
      items: [],
      value: ''
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {

    const { items, value } = this.state;

    return (

      
      <div className="wrapper">
        <div className="header">Meteorite Explorer</div>

        {/* <input type="text" placeholder="Enter search terms" value={value} onChange={this.handleChange} /> */}

        <table className="my-table">
          <thead>
            <th>Name</th>
            <th>ID</th>
            <th>Name Type</th>
            <th>Rec Class</th>
            <th>Mass (g)</th>
            <th>Fall</th>
            <th>Year</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </thead>

          <tbody>
          { items.map((item, num) => {
            return (
              <tr>
                <td><p key={num}>{item.name}</p></td>
                <td><p key={num}>{item.id}</p></td>
                <td><p key={num}>{item.nametype}</p></td>
                <td><p key={num}>{item.recclass}</p></td>
                <td><p key={num}>{item.mass}</p></td>
                <td><p key={num}>{item.fall}</p></td>
                <td><p key={num}>{item.year}</p></td>
                <td><p key={num}>{item.reclat}</p></td>
                <td><p key={num}>{item.reclong}</p></td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  } // render

}

export default App;
