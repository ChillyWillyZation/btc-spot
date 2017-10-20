import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './Totalizator.css';

class Totalizator extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      now: Date.now(),
      next: Date.now()
    }
    
    setInterval(() => {
      this.setState({
        now: Date.now(),
        next: this.nextRate()
      });
      
      let ddd = new Date(this.state.now);
      
      if (ddd.getMinutes() % 10 === 0 && ddd.getSeconds() === 0) {
        //console.log(new Date(this.state.now))
        this.props.racesClosed(moment(this.state.now + 20*60*1000).format('hh:mm:ss'));
      }
      
    }, 1000)
    
  }
  
  nextRate() {
    let next = new Date(this.state.now);
    let minutes = next.getMinutes();
    minutes = 30 + minutes - minutes % 10;
    next.setMinutes(minutes);
    next.setSeconds(0);
    return +next;
  }
  
  render() {
    return (
      <div className="totalizator">
        <p><b>Принимаются ставки на: {moment(this.state.next).format('hh:mm:ss')}</b></p>
        <p>Текущее время: {moment(this.state.now).format('hh:mm:ss')}</p>
        <p>Осталось: {moment(this.state.next - this.state.now - 20*60*1000).format('mm:ss')}</p>
        <input type="text" placeholder="ставка не может превышать суммы на вашем счете" />
        <input type="button" value="играть на повышение" />
        <input type="button" value="играть на понижение" />
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    racesClosed: (date) => {
      dispatch({
        type: "CLOSED",
        payload: date
      })
    }
  })
)(Totalizator);
