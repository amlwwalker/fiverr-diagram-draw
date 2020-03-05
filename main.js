import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Diagram from "./components/flowchart/sidebar"
const title = 'The Plugin based website builder!';


ReactDOM.render(
  <Diagram title={title} />,
  document.getElementById('app')
);

module.hot.accept();