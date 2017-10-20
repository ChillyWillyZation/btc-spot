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

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
