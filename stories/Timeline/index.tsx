import React from 'react';
import './style.css';

interface dataProps {
  title: string;
  subTitle: string;
  date: string;
  icon: object;
}

export interface TimelineProps {
  type?: string;
  data?: dataProps[];
  // style?: ViewStyle;
  barColor?: string;
  // barStyle?: ViewStyle;
  lineColor?: string;
  // lineStyle?: ViewStyle;
}

export const Timeline: React.FC<TimelineProps> = ({
  type,
  data,
  // style,
  barColor,
  // barStyle,
  lineColor
  // lineStyle
}) => {
  const renderTimeline = () => {
    return (
      <>
        {data &&
          data.map((item, index) => (
            <div key={index} className='scheduleItemContainer'>
              <div className='barSection'>
                <div className='iconCircle' style={{ backgroundColor: barColor }}>
                  {item.icon}
                </div>
                <div className='timelineBar' style={{ backgroundColor: barColor }} />
              </div>
              <div className='descriptionSection'>
                <p className='dateText'>{item.date}</p>
                <div className='textPart'>
                  <p className='title'>{item.title}</p>
                  <p className='content'>{item.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className='screen'>
      <div className='timelineContainer'>{type === 'VERTICAL' && renderTimeline()}</div>
    </div>
  );
};

Timeline.defaultProps = {
  type: 'VERTICAL'
};
