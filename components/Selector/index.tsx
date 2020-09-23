import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './style';

export interface SelectorProps {
  items?: Array<Object>;
  onChange: () => void;
  style?: ViewStyle;
}

export function Selector(props: SelectorProps) {
  const [ value, setValue ] = useState(0);
  const { items, style, onChange } = props;

  return (
    <View style={styles.screen}>
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
    </View>
  );
}

Selector.defaultProps = {
};