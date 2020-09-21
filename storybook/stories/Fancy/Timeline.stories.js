import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Timeline } from '../../../components/Timeline';

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

storiesOf('Fancy', module)
  .add('Timeline', () => (
    <Timeline
      data={timelineArray}
      type='VERTICAL'
      barColor='#49A6E9'
      lineColor='#49A6E9' />
  ), {
    notes: `
      # Activity Timeline
      ## Description
        * A custom component for showing activity overlaid on a timeline\n
      ## Screens/States
        * BEAUTIFUL\n
        * VERTICAL\n
      ## Props
        * type:enum\n
          enum(VERTICAL, BEAUTIFUL)
        * data:array
          { title, titleStyle, subTitle, subTitleStyle, dateStart, dateEnd, icon, iconStyle, contentStyle, toolTip, cardContainer, zIndex }
        * style:object
          The style to use for the timeline
        * barColor:string
          The color (hex) of the bar
        * barStyle:object
          The style to use for the bar
        * lineColor:string
          The color (hex) of the line
        * lineStyle:object
          The style to use for the line
      ## Events\n
        * onEventClick()\n
        Triggers when an event is clicked on\n
      ## Hooks
        * onComponentRender()\n
          ActivityTimeline
          Triggers when the ActivityTimeline component is being rendered
        * onListItems()\n
          ActivityTimelineEvents
          Triggers when the list of events are being generated\n
        * onEventTrigger()\n
          ActivityTimelineEventClick
          Triggers when an event is clicked on\n          
      ## Tests
        #### Rendering
          * Should render in the dom
          * Should show the same number of events as there are items in the data prop array
          * Should render each event with a title matching the value in its data array item
          * Should render the title for each event with a style matching the value in its data array item
          * Should render each event with a subtitle matching the value in its data array item
          * Should render the subtitle for each event with a style matching the value in its data array item
          * Should render the start and end dates for each event positioned at a location matching the values in its data array item
          * Should render an icon for each event that matches the value in its data array item
          * Should render the icon for each event with a style matching the iconStyle value in its data array item
          * Should render each activity event with the zIndex order provided in its data array item
          * Should show the timeline using the style provided in the style props
          * Should show the bars in the provided color
          * Should show the bars using the style provided int he style props
          * Should show the lines in the provided color
          * Should show the lines using the style provided int he style props
        #### Events
          * Should trigger the onEventClick() event when an event is clicked on Hooks
        #### Hooks
          * Should trigger the onComponentRender("ActivityTimeline") plugin hook when the component is being rendered in the dom
          * Should trigger the onListItems("ActivityTimelineEvents") plugin hook when the list of events are bieng generated
          * Should trigger the onEventTrigger("ActivityTimeilneEventClick") plugin hook when an event is being clicked on
          
    `
  });
