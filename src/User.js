import React, { Component } from 'react';
import './User.css';

import { connect } from 'react-redux';

class User extends Component {
  constructor(props) {
    super(props)
//     this.state = {
//       username: 'Harry Houdini',
//       cash: 0.123,
//       resereved: 0
//     }
    this.state = this.props.userInfo
  }
  
  render() {
    console.log(this.props.userInfo)
    return (
      <span className="user">
        Cash: {this.state.cash}BTC   Reserved: {this.state.resereved}BTC   {this.state.username}
      </span>
    );
  }
}


export default connect(
  state => ({
    userInfo: state.user
  }),
  dispatch => ({})
)(User);


//export default User;
