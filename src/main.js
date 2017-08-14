import './style/main.scss';
// npm modules
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux';
import storeCreate from './lib/store-create';


let AppContainer = () => (
  <Provider store={storeCreate()}>
    <p>app</p>
    <App />
  </Provider>
);

ReactDom.render ( <AppContainer />, document.getElementById('root'));
