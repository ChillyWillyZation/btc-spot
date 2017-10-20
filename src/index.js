import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers/index';

import { AppContainer } from 'react-hot-loader';

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

// вебсокет с экспрессом
const sock = new WebSocket('ws://localhost:5000/');
sock.onmessage = function(msg) {
  console.log(msg.data);
}
//

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App) });
}
