import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '~/App';
import '~/assets/fonts/fontawesome/css/all.min.css';
import './components/GlobalStyle/Base.scss';
import './components/GlobalStyle/Grid.scss';
// import '~/index.scss';
import store from '~/redux/configStore';
import GlobalStyle from './components/GlobalStyle';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
