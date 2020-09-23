import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';

export interface ToolBarProps {
  name?: string;
  leftItems?: Array<Object>;
  title: string;
  rightItems?: Array<Object>;
}

export function ToolBar(props: ToolBarProps) {
  const {
    name,
    leftItems,
    title,
    rightItems,
  } = props;
  const [ titleModalVisible, setTitleModalVisible ] = useState(false);
  const [ titleText, setTitleText ] = useState(title);

  const renderTitleEditModal = (
    <Modal
      animationType="slide"
      transparent={true}
      visible={titleModalVisible}
      onRequestClose={() => {
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>ToolBar Title</Text>
          <TextInput
            style={styles.modalEdiTitleInput}
            onChangeText={text => setTitleText(text)}
            value={titleText}
            placeholder='Title'
            maxLength={30}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setTitleModalVisible(false)}>
            <Text style={styles.textStyle}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )

  return (
    <View style={styles.screen}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <View style={styles.container}>
            <View style={styles.leftItemsSection}>
              <TouchableOpacity>
                <Feather name='align-justify' size={30} color='#9EA9B1' />
              </TouchableOpacity>
              <Image source={require('./ambid_logo.png')} resizeMode='contain' style={styles.logoImg} />
            </View>
            <Text
              onLongPress={() => setTitleModalVisible(true)}
              style={styles.toolbarTitleText}>
              {titleText}
            </Text>
            <View style={styles.rightItemsSection}>
              <Feather name='search' size={25} color='#9EA9B1' style={styles.rightItemElement} />
              <MaterialCommunityIcons name='account-plus-outline' size={30} color='#9EA9B1' style={styles.rightItemElement} />
              <TouchableOpacity style={styles.publishBtn}>
                <Text style={styles.publishBtnText}>PUBLISH</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userAvatarPart}>
                <Image source={require('./ambid_user.png')} resizeMode='contain' style={styles.userAvatarImg} />
                <Entypo name='chevron-down' size={20} color='#9EA9B1' />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      {renderTitleEditModal}
    </View>
  );
}

ToolBar.defaultProps = {
  showCopyButton: true,
  showLinkIcon: true,
};