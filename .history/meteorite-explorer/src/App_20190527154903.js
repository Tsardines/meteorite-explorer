import React, { Component } from 'react';
import './App.css';

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

      { items.map((item, num) => {

        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td>
                  <p key={num}>{item.name}</p>
                </td>
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
