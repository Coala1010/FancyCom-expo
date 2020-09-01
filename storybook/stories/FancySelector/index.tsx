import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

interface Props {
  items?: Array<Object>;
  onChange?: () => void;
  style?: ViewStyle;
}

export default function FancySelector(props: Props) {
  const [ value, setValue ] = useState(0);
  const { items, style, onChange } = props;

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
      {items && items.map((item, index) =>
        <TouchableOpacity
          onPress={() => {
            setValue(index);
            onChange();
          }}
          key={item.id}
          style={[styles.alignItemContainer, { backgroundColor: value == index ? '#F4F4F4' : 'white' }]}>
          <View style={styles.alignItemSection}>
            <View style={styles.alignIconSection}>
              {item.icon}
            </View>
            <Text style={{ color: 'black', fontSize: 12, marginTop: 5 }}>{item.label}</Text>
          </View>
        </TouchableOpacity>)
      }
      </ScrollView>
    </View>
  );
}

FancySelector.defaultProps = {
};