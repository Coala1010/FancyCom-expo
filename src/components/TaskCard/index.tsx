import React, { useState } from 'react';
import {
  Linking,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';

export interface Props {
  icon?: string;
  title?: string;
  message?: string;
  color?: string;
  href?: string;
  buttonIsVisible?: Boolean;
  buttonHref?: string;
  buttonLabel?: string;
  buttonComponent: Object;
}

export function TaskCard(props: Props) {
  const { icon, title, message, color, href, buttonIsVisible, buttonHref, buttonLabel, buttonComponent } = props;

  const renderTaskCard = () => {
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(href)}
        disabled={href == null}
        style={styles.container}>
        <View>
          <View style={[styles.leftBar, { backgroundColor: color}]} />
        </View>
        <View style={styles.taskCard}>
          <MaterialCommunityIcons name={icon} size={25} color={color} />
          <View style={styles.textSection}>
            <Text style={styles.titleText}>
              {title}
            </Text>
            <Text style={styles.contentText}>
              {message}
            </Text>
          </View>
          {buttonIsVisible &&
            buttonComponent == null ?
              <TouchableOpacity
                onPress={() => Linking.openURL(buttonHref)}
                disabled={buttonHref == null}
                style={[styles.buttonSection, { backgroundColor: color}]}>
                <Text style={styles.buttonText}>
                  {buttonLabel}
                </Text>
              </TouchableOpacity> :
              buttonComponent
          }
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      {renderTaskCard()}
    </>
  );
}

TaskCard.defaultProps = {
  color: '#81BC7E',
  icon: 'check-circle',
  buttonLabel: 'Button',
};