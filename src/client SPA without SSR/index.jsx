import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import { App } from '../App';

const container = document.createElement('div');
document.body.appendChild(container);
const root = ReactDom.createRoot(container);

window.addEventListener('load', () => {
  root.render(<App />);
});