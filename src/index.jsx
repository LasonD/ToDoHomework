import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Row, Col } from 'antd';

import { ToDo } from './components/ToDo';
import './index.css';

const { Header, Footer, Content } = Layout;


const App = () => {
  return (
    <ToDo/>
  )
}

ReactDOM.render(<App />, document.getElementById('root'), () => {
  const root = document.getElementById('root');
  root.classList.add('flex');
  root.classList.add('items-center');
  root.classList.add('justify-center');
});