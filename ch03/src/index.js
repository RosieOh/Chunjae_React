import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
// import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';


// yarn으로 설치 : D:\oth\react\ch03 yarm add react-bootstrap bootstrap
// npm으로 설치 : D:\oth\react\ch03 npm install react-bootstrap bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test2 />
    <Test3 />
    <Test4 />
    <Test5 />
    <Test6 />
    <Test7 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
