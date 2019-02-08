import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { incrementAlfa, incrementBravo, incrementCharlie, incrementDelta } from '../../actions';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("handle increment alfa");
    setTimeout( () => console.log('handle increment alfa after 0'), 0);
    this.props.incrementAlfa();
    console.log("handle increment bravo");
    setTimeout( () => console.log('handle increment bravo after 0'), 0);
    this.props.incrementBravo();
    console.log("all increments handled");
    setTimeout( () => console.log('all increments handled after 0'), 0);
  }

  render() {

    const { bucket } = this.props;

    return (
      <div className="App">
        <button onClick = { this.handleClick }>BIG RED BUTTON</button>
        <div>
          <p>Just open up the console and then click the big red button.</p>
          <ul>
            <li>Alfa : { bucket.alfa }</li>
            <li>Bravo : { bucket.bravo }</li>
            <li>Charlie : { bucket.charlie }</li>
            <li>Delta : { bucket.delta }</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({bucket}) => {
  return {
    bucket
  }
};

export default connect(mapStateToProps, { incrementAlfa, incrementBravo, incrementCharlie, incrementDelta })(App);
