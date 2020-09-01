import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import FancySelector from './FancySelector';

const valueArray = [
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

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('Fancy', module).add('Selector', () => (
  <FancySelector
    items={valueArray}
    onChange={() => console.log('onChange clicked')} />
));
