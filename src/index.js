/* import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
) */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import App from './App';

import './index.css';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
