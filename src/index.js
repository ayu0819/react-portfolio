import React from 'react';
import ReactDOM from 'react-dom';
import './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Sns, HeaderBody, Footer, Top, MobileHeader} from './components/Common/index'
ReactDOM.render(
  <React.StrictMode>
    <HeaderBody />
    <MobileHeader />
    <Sns />
    <Top />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
