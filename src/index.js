import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';

import {UserSingupPage} from './pages/UserSingupPage';
import { LoginPage } from './pages/LoginPage';
import * as apiCalls from './api/apiCalls';
import { act } from 'react-dom/test-utils';

const actions = {
postSignup: apiCalls.login
};

/* const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
 root.render(<UserSingupPage actions={actions}/> ,
); */

ReactDOM.render(<LoginPage actions = {actions} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
