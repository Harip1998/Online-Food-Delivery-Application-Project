import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main_Reducer from './Reducers/Main_Reducer'
 
const store = createStore(Main_Reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider 
          store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
