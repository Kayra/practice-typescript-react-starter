import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Hello from "./containers/Hello";
import { enthusiasm } from "./reducers/index";
// import { StoreState } from "./types/index";


const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "Typescript"
});


ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
