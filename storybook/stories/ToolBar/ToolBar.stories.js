import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ToolBar from './';

storiesOf('Fancy', module)
  .add('ToolBar', () => (
    <ToolBar
      name='Project Name   >   Object Name'
    />
  ), {
    notes: `
      # ToolBar
      ## Description
        * A flexible way to show and customize a toolbar\n
      ## Props
        * name:string
        * leftItems:arrayOfElements
        * title:string
        * children:element
        * rightItems:arrayOfElements\n
      ## Toolbar Components
        * AppBar
        * Logo
        * Avatar
        * RenamableTitle
        * Search
        * Hooks\n
      ## Hooks
        * onComponentRender()\n
          Toolbar
          Triggers when the Toolbar is rendering\n
        * onListItems()\n
          ToolbarLeftItems
          Triggers when the list of Toolbar Left Items are being generated\n
          ToolbarRightItems
          Triggers when the list of Toolbar Right Items are being generated\n
      ## Tests
        #### Rendering
          * Should render the component in the dom
          * Should show the same number of items in the left side of the toolbar as the number of items in the leftItems prop
          * Should show the same number of items in the right side of the toolbar as the number of items in the rightItems prop
          * Should show a title if one is provided
          * Should show a child element if one is provided
        #### Hooks
          * Should trigger the onComponentRender("Toolbar") plugin hook when the Toolbar is rendering
          * Should trigger the onListItems("ToolbarLeftItems") plugin hook when the list of Toolbar Left Items are being generated
          * Should trigger the onListItems("ToolbarRightItems") plugin hook when the list of Toolbar Right Items are being generated
    `
  });
