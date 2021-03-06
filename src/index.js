import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
//import Logo from './images/logo/sachomes-white-logo.svg';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <Router>
    <Suspense
      fallback={
        <div className='flex items-center justify-center min-h-screen text-2xl'>
          {/* <img src={Logo} alt='' /> */}
          Sachome ...
        </div>
      }>
      <App />
    </Suspense>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
