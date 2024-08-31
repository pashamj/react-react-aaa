import React from 'react';
import logo from './logo.svg';
const time = new Date().toLocaleString()

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', {
        src: logo,
        className: 'App-logo',
        alt: 'logo',
      }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
        },
        'Learn React'
      ),
      React.createElement(
        'span',
        {
          id: 'spanForDate' ,

        },time) // Императивный стиль

    )
  );
}

export default App;
