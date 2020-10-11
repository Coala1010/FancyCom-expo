import React, { useState } from 'react';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LaunchIcon from '@material-ui/icons/Launch';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';

interface domainPrefixProps {
  key: string;
  label: string;
  value: string;
}

export interface SlugFieldProps {
  domainPrefix?: string;
  domainPrefixItems: domainPrefixProps[];
  showPrefixDropdown?: boolean;
  value?: string;
  showCopyButton?: boolean;
  showLinkIcon?: boolean;
  // style?: ViewStyle;
  placeholder?: string;
  label?: string;
}

export const SlugField: React.FC<SlugFieldProps> = ({
  domainPrefix,
  domainPrefixItems,
  showPrefixDropdown,
  value,
  showCopyButton,
  showLinkIcon,
  // style,
  placeholder,
  label
}) => {
  const [slugText, setSlugText] = useState(value);
  const [domainPrefixText, setDomainPrefixText] = useState(domainPrefix);

  const onLinkCopyButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    // Clipboard.setString(urlValue);
    document.execCommand('copy');
    alert('Copied the url ' + urlValue);
  };

  const onLinkLaunchButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    window.open(urlValue, '_black');
  };

  const _onSelect = (option: any) => {
    setDomainPrefixText(option.label);
  }

  return (
    <div className='screen'>
      <div className='container'>
        <div className='domainHeaderSection'>
          <p className='domainPrefixColor'>https://</p>
        </div>
        <div className='domainPrefixSection'>
          <Dropdown
            className='dropdownSection'
            controlClassName='dropdownControlSection'
            options={domainPrefixItems}
            onChange={_onSelect}
            value={domainPrefixItems[0]}
            placeholder='Select an option'
          />
        </div>
        <div className='slashSection'>
          <p className='domainPrefixColor'>/</p>
        </div>
        <input
          type='text'
          className='slugTextSection'
          value={slugText}
          onChange={(
            ev: React.ChangeEvent<HTMLInputElement>,
          ): void => {
            setSlugText(ev.target.value)
          }}
        />
        <div className='buttonsSection'>
          {showCopyButton && (
            <div className='actionButton' onClick={onLinkCopyButton}>
              <FileCopyIcon style={{ color: 'grey', fontSize: 25 }} />
            </div>
          )}
          {showLinkIcon && (
            <div className='actionButton' onClick={onLinkLaunchButton}>
              <LaunchIcon style={{ color: 'grey', fontSize: 25 }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SlugField.defaultProps = {
  showCopyButton: true,
  showLinkIcon: true
};
