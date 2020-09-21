import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { FlexTabs } from '../../../src/components/FlexTabs';

storiesOf('Fancy', module)
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
  ), {
    notes: `
      # FlexTabs
      ## Description
        * An advanced, flexible tabs/tab manager\n
      ## User Stories
        * As a user I would like to see a list of tabs so I can toggle between content
        * As a user I would like the option to rename a tab
        * As a user I would like the option to re-order the tabs using drag/drop
        * As a user I would like the option to add new tabs to the list
        * As a user I would like the option to have a dropdown menu on my tabs so I can perform custom actions about that tab
        * As a user if I have more tabs than the container can fit, I would like my tabs to be a small carousel that I can use to toggle left/right to see hidden tabs
        * As a developer I would like to style my tabs
        * As a developer I would like to replace my tab containers
      ## Props
        * name:string\n
          The name of the tab list
        * tabs:array
          The list of tabs to show 
          { id, name, caption, icon, isActive, customAction, style }
        * enableTabDropdowns:bool
          Whether or not the tabs have a dropdown menu of actions
        * enableContextMenu:bool
          Whether or not the user can trigger the tab action dropdown via right-click
        * tabActions:array
          The list of actions that are avaiable for each tab to take (will show in the dropdown)
          { id, label, icon, onSelect }
        * canRename:bool
          Whether or not the tabs can be renamed
        * canDrag:bool
          Whether or not the tabs can be dragged/re-ordered
        * overflow:enum
          The action to take when there are more tabs than the container permits
          enum(HIDDEN, CAROUSEL)
        * canAdd:bool
          Whether or not an add button is showing that allows the creation of more tabs
          componentWrapper:element
          The component to use (instead of the default) to wrap each tab item
        * style:object
          The style to apply to the tab container
        * tabComponent:element
          The component to use (instead of the default) to replace each tab item
        * vertical:bool
          Whether the tabs should appear vertically or not
      ## Events\n
        * onTabSwitch()\n
          Triggers when the tab is switched\n
        * onTabRename()
          Triggers when the tab is renamed\n
        * onTabDelete()
          Triggers when the tab is deleted\n
        * onTabCreate()
          Triggers when a tab is created\n
      ## Methods
        * switchTab()
          Switches the tab from one to another\n
      ## Hooks
        * onComponentRender()\n
          FlexTabs
          Triggers when the tabs are being rendered
        * onListItems()\n
          TabList\n
          Triggers when the tab list is being generated\n
          TabActions\n
          Triggers when the list of tab actions are being generated\n
        * onEventTrigger()\n
          TabSwitch
          Triggers when a tab is switched\n
          TabRename
          Triggers when a tab is renamed\n
          TabDelete
          Triggers when a tab is deleted\n
          TabCreate
          Triggers when a tab is created\n
      ## Tests
        #### Rendering
          * Should render the component in the dom
          * Should render a list of tabs in the dom that number the same as the number of tabs in the tabs array prop
          * Should render each tab with a caption that matches the tab item associated with that tab in the tabs array prop
          * Should render each tab with an icon (if one is present) that matches the tab item associated with that tab in the tabs array prop
          * Should render the tab as "active" it the tab in the tabs array prop has the isActive property set to true
          * Should render a dropdown of actions where the number of actions match the number of items in the tabActions prop
          * Should render a dropdown of actions on each tab if the enableTabDropdowns prop is set to true
          * Should render a dropdown of actions that are activated on right-click if the enableContextMenu prop is set to true
          * Should not permit renaming if the canRename prop is false
          * Should not permit re-ordering if the canDrag prop is false
          * Should not permit adding new tabs if the canAdd prop is false
          * Should render the tabs as a carousel when the number of tabs exceed the number that can fit on the screen
          * Should render the tabs normally with the overflow tabs hidden if the overflow prop is set to HIDDEN
          * Should render the component in the componentWrapper prop if one is provided
          * Should render the component in the tabComponent prop if one is provided
          * Should render the same number of tabComponent props as the amount of tabs in the tabs array prop
          * Should render the tabs as vertical if the vertical prop is set to true
        #### Events
          * Triggers the onTabSwitch() event when the tab is switched
          * Triggers the onTabRename() event when the tab is renamed
          * Triggers the onTabDelete() event when the tab is deleted
          * Triggers the onTabCreate() event when a tab is created
          * Triggers the onSelect() action in the tab action prop if the tab dropdown action is selected
        #### Methods
          * Should switch the tab from one to another
        #### Hooks
          * Triggers the onComponentRender("FlexTabs") plugin hook when the component is being rendered
          * Triggers the onListItems("TabList") when the tab list is being generated
          * Triggers the onListItems("TabActions") plugin hook when the tab actions are being generated
          * Triggers the onEventTrigger("TabSwitch") plugin hook when a tab is switched
          * Triggers the onEventTrigger("TabRename") plugin hook when a tab is renamed
          * Triggers the onEventTrigger("TabDelete") plugin hook when a tab is deleted
          * Triggers the onEventTrigger("TabCreate") plugin hook when a tab is created
    `
  });
