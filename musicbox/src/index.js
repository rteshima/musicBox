import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import TitleText from './TitleText';
import Recorder from './Recorder';
import * as serviceWorker from './serviceWorker';
import MediaPool from './MediaPool';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TitleText />
    <MediaPool />
    <Recorder name="Ryan" live={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
