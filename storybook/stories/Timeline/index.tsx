import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import styles from './style';

interface Props {
  type?: String;
  data?: Array<Object>;
  style?: ViewStyle;
  barColor?: String;
  barStyle?: ViewStyle;
  lineColor?: String;
  lineStyle?: ViewStyle;
}

export default function Timeline(props: Props) {
  const { type, data, style, barColor, barStyle, lineColor, lineStyle } = props;

  const renderTimeline = () => {
    return (
      <>
        {data && data.map((item, index) =>
          <View key={index} style={styles.container}>
            <View style={styles.barSection}>
              <View style={[styles.iconCircle, { backgroundColor: barColor }]}>
                {item.icon}
              </View>
              <View style={[styles.timelineBar, { backgroundColor: barColor }]} />
            </View>
            <View style={styles.descriptionSection}>
              <Text style={styles.dateText}>{item.date}</Text>
              <View style={styles.textPart}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.subTitle}</Text>
              </View>
            </View>
          </View>
        )}
      </>
    );
  }

  return (
    <View style={[styles.screen, style]}>
      <ScrollView>
        {type == 'VERTICAL' && renderTimeline()}
      </ScrollView>
    </View>
  );
}

Timeline.defaultProps = {
  type: 'VERTICAL',
};