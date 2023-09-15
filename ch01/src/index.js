import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';    // 여기서 App.js를 불러오는 역할
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Test4 컴포넌트 추가
root.render(
  <React.StrictMode>
    <App />
    <Test4 />
    <Test5 age="41" addr="가산동" />
    <Test5 irum="오태훈" age="26" addr="가산동"/>
    <Test5 irum="정지승" age="26" addr="부평동"/>
    <Test6 irum="김태균" age="26" addr="가오동"/>
    <Test7 irum="오희민" age="25" addr="봉명동"/>
    <Test8 />
    <Test9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
