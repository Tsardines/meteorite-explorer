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
                <tr>
                  <td>
                    <p key={num}>{item.id}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p key={num}>{item.nametype}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p key={num}>{item.recclass}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p key={num}>{item.mass}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p key={num}>{item.fall}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p key={num}>{item.year}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p key={num}>{item.reclat}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p key={num}>{item.reclong}</p>
                  </td>
                </tr>
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
