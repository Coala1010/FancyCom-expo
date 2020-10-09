import React, { useState } from 'react';
import './style.css';

interface ItemProps {
  id: string;
  label: string;
  icon: object;
}

export interface SelectorProps {
  items: ItemProps[];
  onChange: () => void;
}

export const Selector: React.FC<SelectorProps> = ({ items, onChange }) => {
  const [value, setValue] = useState(0);
  return (
    <div className='screen'>
      <div className='container'>
        <div className='scrollContainer'>
          {items &&
            items.map((item, index) => (
              <div
                onClick={() => {
                  setValue(index);
                  onChange();
                }}
                key={item.id}
                className='alignItemContainer'
                style={{ backgroundColor: value === index ? '#F4F4F4' : 'white' }}>
                <div className='alignItemSection'>
                  <div className='alignIconSection'>{item.icon}</div>
                  <p className='alignItemLabel'>{item.label}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
