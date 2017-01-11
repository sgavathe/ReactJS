import React from 'react';
import ReactDOM from 'react-dom';

// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
import App from './mainToApp.jsx';

ReactDOM.render(
  <App />, 
  document.getElementById('main')
);

