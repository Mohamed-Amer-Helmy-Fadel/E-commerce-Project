import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './reducx/store';
ReactDOM.render(
  <Provider store={store}>
      {/* <WebfontLoader config={config} onStatus={callback}>
        <App />
      </WebfontLoader> */}
      <App />
  </Provider>,
  document.getElementById('root')
);

