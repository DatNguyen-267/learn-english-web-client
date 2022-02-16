import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './constants/Scss/Base.scss'
import './constants/Scss/Grid.scss'
import './assets/fonts/fontawesome/css/all.min.css'
import App from './App';
import {Provider } from 'react-redux'
import store from './redux/configStore';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode >
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


