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
import Timeline from './Timeline';
import TaskCard from './TaskCard';

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

const timelineArray = [
  {
    title: 'Completed profile data',
    titleStyle: null,
    subTitleStyle: null,
    dateStart: null,
    dateEnd: null,
    iconStyle: null,
    contentStyle: null,
    tooltip: null,
    cardContainer: null,
    zIndex: 1,
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <MaterialIcons name='check' size={17} color='white' />,
  },
  {
    title: 'Completed profile data',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <MaterialIcons name='drafts' size={17} color='white' />,
  },
  {
    title: 'Completed profile data',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <MaterialIcons name='edit' size={17} color='white' />,
  },
  {
    title: 'Completed profile data',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <MaterialIcons name='launch' size={17} color='white' />,
  },
  {
    title: 'Completed profile data',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <MaterialIcons name='lock' size={17} color='white' />,
  },
  {
    title: 'Completed profile data',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Jan 25, 2020',
    icon: <MaterialIcons name='notifications-active' size={17} color='white' />,
  },
];

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));

storiesOf('Fancy', module)
  .add('Selector', () => (
    <FancySelector
      items={selectorArray}
      onChange={() => console.log('onChange clicked')} />
  ))
  .add('Timeline', () => (
    <Timeline
      data={timelineArray}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9' />
  ))
  .add('TaskCard', () => (
    <>
      <TaskCard
        icon='check-circle'
        title='Watch Getting Started Video'
        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
        // color='red'
        buttonIsVisible={true}
        // buttonComponent={<View />}
        buttonHref='https://www.google.com'
        buttonLabel='Button' />
      <TaskCard
        icon='apple-icloud'
        title='Publish first funnel'
        message='Donec aliquet ipsum vel vehicula'
        color='#2C8AC8'
        href='https://www.google.com'
        buttonIsVisible={true}
        buttonLabel='Cloud' />
      <TaskCard
        icon='compass-outline'
        title='Blog title goes here'
        message='Lorem ipsum sit dolor amet...'
        color='#E06969'
        buttonIsVisible={false} />
    </>
  ));
