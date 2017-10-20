import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Results.css';

class Results extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.testStore.slice().reverse().map((round, index) =>
            <li key={index}>{round}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state.horseraces
  }),
  dispatch => ({})
)(Results);
