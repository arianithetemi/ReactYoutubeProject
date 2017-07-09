import React from 'react';
import ReactDOM from 'react-dom';

// Create new component
const App = () => {
  // Produce HTML
  return <div>Hi!</div>;
}


// Render HTML component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
