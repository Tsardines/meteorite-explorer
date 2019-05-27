import React, { Component } from 'react';
import './App.css';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// import Table from 'react-bootstrap/Table';

class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
    items: []
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


  render() {

    const { items } = this.state;

    return (

      <div className="title">
      <table className="theader">
        <th>Name</th>
        <th>ID</th>
        <th>Name Type</th>
        <th>Rec Class</th>
        <th>Mass (g)</th>
        <th>Fall</th>
        <th>Year</th>
        <th>Latitude</th>
        <th>Longitude</th>
      </table>

      { items.map((item, num) => {

        return (
          <table className="table-main">
            <tbody>
              <tr>
                <td><p key={num}>{item.name}</p></td>
                <hr>
                <td><p key={num}>{item.id}</p></td>
                <td><p key={num}>{item.nametype}</p></td>
                <td><p key={num}>{item.recclass}</p></td>
                <td><p key={num}>{item.mass}</p></td>
                <td><p key={num}>{item.fall}</p></td>
                <td><p key={num}>{item.year}</p></td>
                <td><p key={num}>{item.reclat}</p></td>
                <td><p key={num}>{item.reclong}</p></td>
              </tr>
            </tbody>
          </table>
        )
      })}
      </div>
    )
  } // render

}

export default App;
