import React, { Component } from 'react';
import './Rate.css';

import User from './User';

class Rate extends Component {
  constructor() {
    super();
    
    this.state = { rate: '' }
    
    const socket = new WebSocket("wss://api.bitfinex.com/ws");
    
    socket.addEventListener('open', () => {
      //console.log('connection established');
      socket.send(JSON.stringify({
        "event":"subscribe",
        "channel":"book",
        "symbol": "BTCUSD"
      }));
    
    })
    
    socket.addEventListener('message', (msg) => {
      var data = JSON.parse(msg.data);
      if (typeof data[1] === 'number') {
        this.setState({rate: data[1]});
      }
      //console.log(data);
    })

  }
  
  render() {
    return (
      <div className="rate">
        {"BTC/USD: $" + this.state.rate}
        <User />
      </div>
    );
  }
}

export default Rate;
