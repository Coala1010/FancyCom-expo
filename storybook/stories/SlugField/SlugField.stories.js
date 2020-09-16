import React from 'react';
import { storiesOf } from '@storybook/react-native';

import SlugField from './';

storiesOf('Fancy', module)
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
  ), {
    notes: `
      # SlugField
      ## Description
        * A custom, user-friendly input field for collecting url slugs\n
      ## User Stories
        * As a user I would like to see a list of tabs so I can toggle between content
        * As a user I would like the option to rename a tab
        * As a user I would like the option to re-order the tabs using drag/drop
        * As a user I would like the option to add new tabs to the list
        * As a user I would like the option to have a dropdown menu on my tabs so I can perform custom actions about that tab
        * As a user if I have more tabs than the container can fit, I would like my tabs to be a small carousel that I can use to toggle left/right to see hidden tabs
        * As a developer I would like to style my tabs
        * As a developer I would like to replace my tab containers\n
      ## Props
        * domainPrefix:string\n
          The domain prefix to use for the slug\n
        * domainPrefixItems:array\n
          The list of domain prefixes that the user can choose from\n
        * showPrefixDropdown:bool\n
          Whether or not the prefix dropdowns should be enabled\n
        * value:string\n
          The value of the slug\n
        * showCopyButton:bool\n
          Whether or not a [copy] to clipboard button is showing\n
        * showLinkIcon:bool\n
          Whether or not a [link] icon is showing\n
        * style:object\n
          The style to use for the container\n
        * placeholder:string\n
          The placeholder to use for the slug text field\n
        * label:string\n
          The label to use for the input field\n
      ## Events\n
        * onChange()\n
          Triggers when the slug text field changes\n
        * onFocus()\n
          Triggers when the slug text field is focused on\n
        * onBlur()\n
          Triggers when the slug text field gets a blur event\n
      ## Tests
        #### Rendering
          * Should render in the dom
          * Should show the domainPrefix value in the dom
          * Should show a list of domain prefixes in a dropdown with the number matching the number of items in the domainPrefixItems prop
          * Should not render a dropdown when the showPrefixDropdown prop is false
          * Should show a [copy] button if the showCopyButton prop is true
          * Should link the chosen domain prefix and slug value if provided (link icon href should match prop)
          * Should render the label prop in the dom if provided
        #### Actions
          * Should copy the slug value to the clipboard if the [copy] button is clicked
        #### Events
          * Should trigger the onChange() event when the slug text field changes
          * Should trigger the onFocus() event when the slug text field is focused on
          * Should trigger the onBlur() event when the slug text field gets a blur event
    `
  });
