import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { TaskCard } from '../../../components/TaskCard';

storiesOf('Fancy', module).add(
  'TaskCard',
  () => (
    <>
      <TaskCard
        icon='check-circle'
        title='Watch Getting Started Video'
        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
        // color='red'
        buttonIsVisible
        // buttonComponent={<View />}
        buttonHref='https://www.google.com'
        buttonLabel='Button'
      />
      <TaskCard
        icon='apple-icloud'
        title='Publish first funnel'
        message='Donec aliquet ipsum vel vehicula'
        color='#2C8AC8'
        href='https://www.google.com'
        buttonIsVisible
        buttonLabel='Cloud'
      />
      <TaskCard
        icon='compass-outline'
        title='Blog title goes here'
        message='Lorem ipsum sit dolor amet...'
        color='#E06969'
        buttonIsVisible={false}
      />
    </>
  ),
  {
    notes: `
      # TaskCard
      ## Description
        * A card designed for showing simple tasks\n
      ## Props
        * icon:string\n
          The icon to use for the card
        * children:element\n
          The inner content to use in the card
        * title:string\n
          The title to use for the card
        * message:string\n
          The content to use in the card
        * color:string\n
          The color of the card's border
        * href:string\n
          The url to link to when the card is clicked
        * buttonIsVisible:bool\n
          Whether or not an action button should show
        * buttonHref:string\n
          The url to link to when the button is clicked
        * buttonLabel:string\n
          The label to use for the button
        * buttonComponent:element\n
          The component to use for a button instead of the default button\n
      ## Events\n
        * onButtonClick()\n
        Triggers when the button is clicked\n
      ## Hooks
        * onComponentRender()\n
          TaskCard
          Triggers when the component renders in the dom
        * onEventTrigger()\n
          TaskCardButtonClick
          Triggers when the button in a Task Card is clicked\n
      ## Tests
        #### Rendering
          * Should render in the dom
          * Should show the icon in the icon props in the dom
          * Should show a title if one is provided in the title props
          * Should show a message if one is provided in the message props
          * Should show the card with the border color that is found in the color prop
          * Should link to the url in the href prop if one is provided
          * Should show a button if the buttonIsVisible prop is true
          * Should link the button to the url in the buttonHref prop
          * Should render the component in the buttonComponent prop instead of the default button if one is provided
        #### Events
          * Should trigger the onButtonClick() event when the button is clicked
        #### Hooks
          * Should trigger the onComponentRender("TaskCard") plugin hook when the
          component renders in the dom
          * Should trigger the onEventTrigger("TaskCardButtonClick") plugin hook when the
          button in the task card is clicked
    `
  }
);
