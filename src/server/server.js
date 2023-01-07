import ReactDOM from 'react-dom/server';
import express from 'express';
import { indexTemplate } from './indexTemplate.js';
import { App } from '../App';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});