import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import StatefulHello from "./components/StatefulHello";


ReactDOM.render(
  <StatefulHello name="Typescript" enthusiasmLevel={1} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
