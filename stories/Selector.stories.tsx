import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { MaterialIcons } from '@expo/vector-icons';

import { FancySelector, SelectorProps } from '../src/components/FancySelector';

export default {
  title: 'Fancy/Selector',
  component: FancySelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SelectorProps> = (args) => <FancySelector {...args} />;

const selectorArray1 = [
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

const selectorArray2 = [
  {
    id: 'align-center',
    icon: <MaterialIcons name='format-align-center' size={30} color='#9D9D9D' />,
    label: 'align-center',
  },
  {
    id: 'align-justify',
    icon: <MaterialIcons name='format-align-justify' size={30} color='#9D9D9D' />,
    label: 'align-justify',
  },
  {
    id: 'align-left',
    icon: <MaterialIcons name='format-align-left' size={30} color='#9D9D9D' />,
    label: 'align-left',
  },
  {
    id: 'align-right',
    icon: <MaterialIcons name='format-align-right' size={30} color='#9D9D9D' />,
    label: 'align-right',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  items: selectorArray1,
  onChange: () => console.log('onChange clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: selectorArray2,
  onChange: () => console.log('onChange clicked'),
};