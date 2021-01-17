import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';

it('Render Nothing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards plans={[]} />, div);
});