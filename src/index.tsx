import React from 'react';
import { render } from 'react-dom';

const HelloWorld: React.FC = () => {
  return <h1>Hello World</h1>;
};

render(<HelloWorld />, document.getElementById('root'));
