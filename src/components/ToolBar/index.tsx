import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  SafeAreaView,
} from 'react-native';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';

export interface ToolBarProps {
  name?: string;
  leftItems?: Array<Object>;
  title?: string;
  rightItems?: Array<Object>;
}

export function ToolBar(props: ToolBarProps) {
  const {
    name,
    leftItems,
    title,
    rightItems,
  } = props;

  return (
    <View style={styles.screen}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.leftItemsSection}>
            <TouchableOpacity>
              <Feather name='align-justify' size={30} color='#9EA9B1' />
            </TouchableOpacity>
            <Image source={require('./ambid_logo.png')} resizeMode='contain' style={{ width: 120, height: 60, marginHorizontal: 5 }} />
          </View>
          <Text style={{ color: '#607380' }}>
            {name}
          </Text>
          <View style={styles.rightItemsSection}>
            <Feather name='search' size={25} color='#9EA9B1' style={{ marginHorizontal: 5, }} />
            <MaterialCommunityIcons name='account-plus-outline' size={30} color='#9EA9B1' style={{ marginHorizontal: 5, }} />
            <TouchableOpacity style={styles.publishBtn}>
              <Text style={{ color: 'white' }}>PUBLISH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./ambid_user.png')} resizeMode='contain' style={{ width: 40, height: 40, marginHorizontal: 5, }} />
              <Entypo name='chevron-down' size={20} color='#9EA9B1' />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

ToolBar.defaultProps = {
  showCopyButton: true,
  showLinkIcon: true,
};