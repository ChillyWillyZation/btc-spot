import React, { Component } from 'react';
import Rate from './Rate';
import Totalizator from './Totalizator';
import Results from './Results';

import './App.css';

//import { connect } from 'react-redux';

class App extends Component {
  render() {
    //console.log(this.props.testStore)
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>BTCSpot</h3>
        <Rate />
        <Totalizator />
        <Results />
      </div>
    );
  }
}



export default App;

// export default connect(
//   state => ({
//     testStore: state
//   }),
//   dispatch => ({})
// )(App);
