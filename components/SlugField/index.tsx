import React, { useState, useRef } from 'react';
import {
  Button,
  Clipboard,
  ToastAndroid,
  Alert,
  Linking,
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import styles from './style';

interface domainPrefixProps {
  key: string;
  label: string;
  value: string;
}

export interface SlugFieldProps {
  domainPrefix?: string;
  domainPrefixItems: domainPrefixProps[];
  showPrefixDropdown?: string;
  value?: string;
  showCopyButton?: string;
  showLinkIcon?: boolean;
  style?: ViewStyle;
  placeholder?: string;
  label: string;
}

export function SlugField(props: SlugFieldProps) {
  const {
    domainPrefix,
    domainPrefixItems,
    showPrefixDropdown,
    value,
    showCopyButton,
    showLinkIcon,
    style,
    placeholder,
    label
  } = props;

  const [slugText, setSlugText] = useState(value);
  const [domainPrefixText, setDomainPrefixText] = useState(domainPrefix);
  const [timeText, setTimeText] = useState('');
  const modalizeRef = useRef<Modalize>(null);
  const [modalToggle, setModalToggle] = useState(true);

  const onLinkCopyButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    Clipboard.setString(urlValue);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Copied the url', ToastAndroid.SHORT);
    } else {
      Alert.alert('Copied the url', urlValue);
    }
  };

  const onLinkLaunchButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    Linking.openURL(urlValue);
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.container, style]}>
        <View style={styles.domainHeaderSection}>
          <Text style={styles.domainPrefixColor}>https://</Text>
        </View>
        <View style={styles.domainPrefixSection}>
          {Platform.OS === 'web' ? (
            <DropDownPicker
              items={domainPrefixItems}
              defaultValue={domainPrefixText}
              containerStyle={{ height: 40, width: '100%' }}
              disabled={!showPrefixDropdown}
              style={{
                backgroundColor: 'grey',
                borderWidth: 1,
                borderColor: 'grey'
              }}
              labelStyle={{
                justifyContent: 'flex-start',
                color: 'white',
                textAlign: 'left'
              }}
              dropDownStyle={{ backgroundColor: 'grey', alignItems: 'flex-start' }}
              arrowColor='white'
              onChangeItem={(item) => setDomainPrefixText(item.value)}
            />
          ) : (
            <TouchableOpacity
              onPress={() => modalizeRef.current?.open()}
              style={{ justifyContent: 'center', height: 40 }}>
              <Text numberOfLines={1} style={{ color: 'white' }}>
                {domainPrefixText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.slashSection}>
          <Text style={styles.domainPrefixColor}>/</Text>
        </View>
        <TextInput
          style={styles.slugTextSection}
          placeholderTextColor='#AAAAAA'
          placeholder={placeholder}
          autoCapitalize='none'
          value={slugText}
          onChangeText={(text) => setSlugText(text)}
        />
        <View style={styles.buttonsSection}>
          {showCopyButton && (
            <TouchableOpacity onPress={onLinkCopyButton}>
              <Feather name='copy' color='grey' size={22} style={{ marginHorizontal: 3 }} />
            </TouchableOpacity>
          )}
          {showLinkIcon && (
            <TouchableOpacity onPress={onLinkLaunchButton}>
              <MaterialCommunityIcons
                name='launch'
                color='grey'
                size={25}
                style={{ marginHorizontal: 3 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Modalize ref={modalizeRef} adjustToContentHeight={modalToggle}>
        <View style={{ padding: 20 }}>
          {domainPrefixItems &&
            domainPrefixItems.map((item, index) => (
              <Button
                key={item.key.toString()}
                title={item.label}
                onPress={() => {
                  setDomainPrefixText(item.value);
                  modalizeRef.current?.close();
                }}
              />
            ))}
        </View>
      </Modalize>
    </View>
  );
}

SlugField.defaultProps = {
  showCopyButton: true,
  showLinkIcon: true
};
