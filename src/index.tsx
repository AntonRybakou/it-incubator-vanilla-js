import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitIntoWords} from "./01-hello-test/01";

const sentence: string = 'Hello my friends!';
const result = splitIntoWords(sentence);

console.log(result[0] === 'Hello');
console.log(result[1] === 'my');
console.log(result[2] === 'friends!');


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
