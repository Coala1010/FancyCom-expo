# &lt;FlexTab /&gt; Component

## Description

An advanced, flexible tabs/tab manager

## Checklist

This component should...

- Should render the component in the dom
- Should render a list of tabs in the dom that number the same as the number of tabs in the tabs array prop
- Should render each tab with a caption that matches the tab item associated with that tab in the tabs array prop
- Should render each tab with an icon (if one is present) that matches the tab item associated with that tab in the tabs array prop
- Should render the tab as "active" it the tab in the tabs array prop has the isActive property set to true
- Should render a dropdown of actions where the number of actions match the number of items in the tabActions prop
- Should render a dropdown of actions on each tab if the enableTabDropdowns prop is set to true
- Should render a dropdown of actions that are activated on right-click if the enableContextMenu prop is set to true
- Should not permit renaming if the canRename prop is false
- Should not permit re-ordering if the canDrag prop is false
- Should not permit adding new tabs if the canAdd prop is false
- Should render the tabs as a carousel when the number of tabs exceed the number that can fit on the screen
- Should render the tabs normally with the overflow tabs hidden if the overflow prop is set to HIDDEN
- Should render the component in the componentWrapper prop if one is provided
- Should render the component in the tabComponent prop if one is provided
- Should render the same number of tabComponent props as the amount of tabs in the tabs array prop
- Should render the tabs as vertical if the vertical prop is set to true
- (Events) Should trigger the onTabSwitch() event when the tab is switched
- (Events) Should trigger the onTabRename() event when the tab is renamed
- (Events) Should trigger the onTabDelete() event when the tab is deleted
- (Events) Should trigger the onTabCreate() event when a tab is created
- (Events) Should trigger the onSelect() action in the tab action prop if the tab dropdown action is selected
- (Methods) Should switch the tab from one to another
- (Hooks) Should trigger the onComponentRender("FlexTabs") plugin hook when the component is being rendered
- (Hooks) Should trigger the onListItems("TabList") when the tab list is being generated
- (Hooks) Should trigger the onListItems("TabActions") plugin hook when the tab actions are being generated
- (Hooks) Should trigger the onEventTrigger("TabSwitch") plugin hook when a tab is switched
- (Hooks) Should trigger the onEventTrigger("TabRename") plugin hook when a tab is renamed
- (Hooks) Should trigger the onEventTrigger("TabDelete") plugin hook when a tab is deleted
- (Hooks) Should trigger the onEventTrigger("TabCreate") plugin hook when a tab is created

## Usage

To install it...

> npm install @sandcastle/components

Add it to your project...

```
import * as React from 'react'
import * as FlexTab from '@sandcastle/components/FlexTab`

export default () => (
  <FlexTab

  />
)
```

## Best Practices

To do: Add any Best Practices here

## Lifecycle Hooks

To do: Add any Lifecycle Hooks here

## Related Components

To do: Add any Related Components here
