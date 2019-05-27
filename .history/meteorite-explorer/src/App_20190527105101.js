import React, { Component } from 'react';
import './App.css';

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
          <div className="table">
            <p key={num}>{item.name}</p>
          </div>
        )
      })}
      </div>
    )
  } // render

}

export default App;
