import React from 'react';
import TestRenderer from 'react-test-renderer';
import CardFooter from './CardFooter.jsx';


describe('Should test the Card footer', () => {
  const footerRendered = TestRenderer.create(<CardFooter><p>Children</p></CardFooter>).toJSON();
  // Test if the component rendered is type footer
  it('Should render type footer', () => {
    expect(footerRendered.type).toBe('footer');
  });

  // Test if children prop is type p
  it('Should return children type p', () => {
    const [content] = footerRendered.children;
    expect(content.type).toBe('p');
  });

  // Test the children content of component
  it('Should test the children content of the component', () => {
    const [ content ] = footerRendered.children;
    const [ childrenRendered ] = content.children;
    expect(childrenRendered).toBe('Children');
   })
});