import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { storiesOf, addDecorator, addParameters } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import knobsWrapper from './Knobs';
import Button from './Button';
// import './Button/Button.stories';
import CenterView from './CenterView';
import Welcome from './Welcome';
// import FancySelector from './FancySelector';
import './FancySelector/Selector.stories';
// import FlexTabs from './FlexTabs';
import './FlexTabs/FlexTabs.stories';
// import SlugField from './SlugField';
import './SlugField/SlugField.stories';
// import ToolBar from './ToolBar';
import './ToolBar/ToolBar.stories';
// import Timeline from './Timeline';
import './Timeline/Timeline.stories';
// import TaskCard from './TaskCard';
import './TaskCard/TaskCard.stories';

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

addDecorator(withBackgrounds);

addParameters({
  backgrounds: [
    { name: 'dark', value: '#222222' },
    { name: 'white', value: '#ffffff', default: true },
  ],
});

storiesOf('Welcome', module)
  .addParameters({
    component: Welcome,
    // docs: {
    //   container: DocsContainer,
    //   page: DocsPage,
    // },
  })
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />, {
    notes: `
# Markdown!\n
* List Item
* [List Item with Link](https://storybook.js.org)
`,
  });

storiesOf('Button', module)
  .addParameters({
    component: Button,
  })
  .addParameters({
    backgrounds: [
      { name: 'dark', value: '#222222' },
      { name: 'light', value: '#eeeeee', default: true },
    ],
    notes: `
              # Custom note\n
              _This component doesn't look right_
            `,
  })
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

// storiesOf('Knobs', module).addDecorator(withKnobs).add('with knobs', knobsWrapper);

// storiesOf('Fancy', module)
//   .add('Selector', () => (
//     <FancySelector
//       items={selectorArray}
//       onChange={() => console.log('onChange clicked')} />),
//     {
//       notes: `
//       # FancySelector\n
//       `
//     }
//   );

// const globalParameter = 'globalParameter';
// const chapterParameter = 'chapterParameter';
// const storyParameter = 'storyParameter';

// addParameters({ globalParameter });

// storiesOf('Core|Parameters', module)
//   .addParameters({ chapterParameter })
//   .add(
//     'passed to story',
//     ({ parameters }) => <Text>Parameters are {JSON.stringify(parameters)}</Text>,
//     {
//       storyParameter,
//     }
//   );


  /*

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

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
  // .add('Selector', () => (
  //   <FancySelector
  //     items={selectorArray}
  //     onChange={() => console.log('onChange clicked')} />
  // ))
  .add('FlexTabs', () => (
    <FlexTabs
      name='flextab'
      tabs={[
        { id: 1, name: 'Builder' },
        { id: 2, name: 'Calendar' },
        { id: 3, name: 'Insights' },
      ]}
      enableTabDropdowns={true}
      tabActions={[
        { label: 'Rename', onSelect: () => alert('onSelect clicked') },
        { label: 'Copy', onSelect: () => console.log('onSelect clicked') },
        { label: 'Duplicate', onSelect: () => console.log('onSelect clicked') },
        { label: 'Delete', onSelect: () => console.log('onSelect clicked') },
      ]}
      canRename={true}
      canAdd={true}
      canDrag={true}
      style={{ marginTop: 0 }} />
  ))
  .add('SlugField', () => (
    <SlugField
      domainPrefix='www.google.com'
      domainPrefixItems={[
        { key: 1, label: 'www.linkedin.com', value: 'www.linkedin.com' },
        { key: 2, label: 'www.google.com', value: 'www.google.com' },
        { key: 3, label: 'www.facebook.com', value: 'www.facebook.com' },
      ]}
      showPrefixDropdown={true}
      placeholder='My-slug-name'
      value=''
      showCopyButton={true}
      showLinkIcon={true}
    />
  ))
  .add('ToolBar', () => (
    <ToolBar
      name='Project Name   >   Object Name'
    />
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
  ));*/
