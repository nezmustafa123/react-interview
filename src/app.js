import React {Component} from 'react';
import ReactDOM from 'react-dom';
import Master from './components/Master'
import {BrowserRouter, Route} from "react-router-dom";

const App = () => (
  <div>
    <Master />
  </div>
)

ReactDOM.render(
  <App />, document.getElementById('app')
);


export default App;