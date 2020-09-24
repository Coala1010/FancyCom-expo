// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { Selector } from '../';
import { MaterialIcons } from '@expo/vector-icons';

const selectorArray = [
  {
    id: 'none',
    icon: <MaterialIcons name='block' size={30} color='#9D9D9D' />,
    label: 'NONE',
  },
  {
    id: 'border',
    icon: <MaterialIcons name='border-outer' size={30} color='#9D9D9D' />,
    label: 'SOLID',
  },
  {
    id: 'dashed',
    icon: <MaterialIcons name='border-clear' size={30} color='#9D9D9D' />,
    label: 'DASHED',
  },
];

describe('Some component', () => {
  it('Should render the component in the dom', () => {
    const tree = renderer.create(
      <Selector
        items={selectorArray}
        onChange={() => console.log('onChange clicked')} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});