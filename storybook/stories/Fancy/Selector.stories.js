import React from 'react';
import { storiesOf, addParameters } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { MaterialIcons } from '@expo/vector-icons';

import { Selector } from '../../../components/Selector';

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

storiesOf('Fancy', module)
  .add('Selector', () => (
    <Selector
      items={selectorArray}
      onChange={() => console.log('onChange clicked')} />),
    {
      notes: `
      # FancySelector\n
      ## Description
        * A tool that lets users select from a collection of items
        * Can add a series of icons/labels or custom components that can be selected\n
      ## Props
        ##### items:array
        * An array items (label, component) to show
        * the "component" used is often the <Icon /> component\n
      ## Events
        * onChange\n
        Triggers when one of the items is selected\n
      ## Icon
        ##### Props
          * icon:string
            The name of the icon to render
          * caption:string
            The caption to show
          * highlighted:bool
            > Whether or not the Icon should be highlighted\n
            > Useful for indicating that an item has already been selected\n
        ##### Tests
          * The component should render in the dom
          * The component should show the icon provided in the props
          * The component should show the caption provided in the props
          * The component should be highlighted if the highlighted prop is true\n
      ## Hooks
        * onFancySelectorRender()
          Triggers the plugin hook when the FancySelector component is rendering\n
        * onFancySelectorChange()
          Triggers this plugin hook when an item is selected\n
      ## Tests
        * Should render the component in the dom
        * Should show a list of items. The number of items should match the number of items in the array prop
        * Should trigger the onChange() event when one of the items is selected
        * Should trigger the "onFancySelectorRender" plugin hook when the FancySelector component is rendering
        * Should trigger the "onFancySelectorChange" plugin hook when an item is selected
      `
    }
  );
