import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from '../App';

const container = document.getElementById('react_root');

window.addEventListener('load', () => {
  if (ReactDom.hydrateRoot) ReactDom.hydrateRoot(container, <App />);
  else ReactDom.render(<App />, container);
});