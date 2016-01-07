import React from 'react';
import App from './containers/App';

/* Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp  from './reducers';
import { render } from 'react-dom'

let store = createStore(todoApp);
let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
