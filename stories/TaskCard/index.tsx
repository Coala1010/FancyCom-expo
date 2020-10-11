import React from 'react';
import './style.css';

export interface TaskCardProps {
  icon?: object;
  title?: string;
  message?: string;
  color?: string;
  href?: string;
  buttonIsVisible?: boolean;
  buttonHref?: string;
  buttonLabel?: string;
  buttonComponent?: object;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  icon,
  title,
  message,
  color,
  href,
  buttonIsVisible,
  buttonHref,
  buttonLabel,
  buttonComponent
}) => {
  const renderTaskCard = () => {
    return (
      <div
        onClick={() => {
          if (href !== null) {
            window.open(href, '_black');
          }
        }}
        className='container'>
        <div>
          <div className='leftBar' style={{ backgroundColor: color }} />
        </div>
        <div className='taskCard'>
          <div className='iconSection'>{icon}</div>
          <div className='textSection'>
            <p className='titleText'>{title}</p>
            <p className='contentText'>{message}</p>
          </div>
          {buttonIsVisible && buttonComponent == null ? (
            <div
              onClick={() => {
                if (buttonHref !== null) {
                  window.open(buttonHref, '_black');
                }
              }}
              className='buttonSection'
              style={{ backgroundColor: color }}>
              <p className='buttonText'>{buttonLabel}</p>
            </div>
          ) : (
            buttonComponent
          )}
        </div>
      </div>
    );
  };

  return <div className='screen'>{renderTaskCard()}</div>;
};

TaskCard.defaultProps = {
  color: '#81BC7E',
  buttonLabel: 'Button'
};
