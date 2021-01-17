import React from 'react';
import TestRenderer from 'react-test-renderer';
import CardHeader from './CardHeader.jsx';

const planInfo = {
  index: 0,
  title: 'Plan test',
};
const header = TestRenderer.create(<CardHeader index={planInfo.index} title={planInfo.title} />);
const content = header.toJSON().children;

describe('Test the render of Card Header component', () => {
  // Test render of Icon on card
  it('Render component figure', () => {
    const [componentFigure] = content[0].children;
    expect(componentFigure.props.src).toBe(`assets/img/server-level-${planInfo.index + 1}.svg`);
  });
  // Text render of title of card
  it('Render component title', () => {
    const [componentTitle] = content[1].children;
    expect(componentTitle).toBe(planInfo.title);
  });
});