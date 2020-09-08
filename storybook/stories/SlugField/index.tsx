import React, { useState } from 'react';
import {
  Clipboard,
  ToastAndroid,
  Alert,
  Linking,
  Picker,
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalSelector from 'react-native-modal-selector';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';

interface Props {
  domainPrefix?: string;
  domainPrefixItems?: Array<string>;
  showPrefixDropdown?: string;
  value?: string;
  showCopyButton?: string;
  showLinkIcon?: Boolean;
  style?: ViewStyle;
  placeholder?: string;
  label: string;
}

export default function SlugField(props: Props) {
  const {
    domainPrefix,
    domainPrefixItems,
    showPrefixDropdown,
    value,
    showCopyButton,
    showLinkIcon,
    style,
    placeholder,
    label,
  } = props;

  const [ slugText, setSlugText ] = useState(value);
  const [ domainPrefixText, setDomainPrefixText ] = useState(domainPrefix);
  const [ timeText, setTimeText ] = useState('');

  const onLinkCopyButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    Clipboard.setString(urlValue);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Copied the url', ToastAndroid.SHORT);
    } else {
      Alert.alert('Copied the url', urlValue);
    }
  }

  const onLinkLaunchButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    Linking.openURL(urlValue);
  }

  return (
    <View style={styles.screen}>
      <View style={[styles.container, style]}>
        <View style={styles.domainHeaderSection}>
          <Text style={styles.domainPrefixColor}>https://</Text>
        </View>
        <View style={styles.domainPrefixSection}>
          <Picker
            style={{width: 300, backgroundColor: '#e1e1e1', flex:1}}
            selectedValue={timeText}
            onValueChange={itemValue => setTimeText(itemValue)}>
            <Picker.Item label="1:00" value="1:00" />
            <Picker.Item label="2:00" value="2:00" />
            <Picker.Item label="3:00" value="3:00" />
            <Picker.Item label="4:00" value="4:00" />
            <Picker.Item label="5:00" value="5:00" />
            <Picker.Item label="6:00" value="6:00" />
            <Picker.Item label="7:00" value="7:00" />
            <Picker.Item label="7:00" value="8:00" />
            <Picker.Item label="9:00" value="9:00" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="11:00" value="11:00" />
            <Picker.Item label="12:00" value="12:00" />
          </Picker>
          {/* <ModalSelector
            data={domainPrefixItems}
            initValue='www.google.com'
            style={{
              backgroundColor: '#F00000',
              borderWidth: 1,
              borderColor: 'grey',
            }}
            onChange={(option) => alert(`${option.label}`)} /> */}
          {/* <DropDownPicker
            items={domainPrefixItems}
            defaultValue={domainPrefixText}
            containerStyle={{ height: 40 }}
            disabled={!showPrefixDropdown}
            style={{
              backgroundColor: '#F00000',
              borderWidth: 1,
              borderColor: 'grey',
            }}
            labelStyle={{
              justifyContent: 'flex-start',
              color: 'white',
              textAlign: 'left',
            }}
            dropDownStyle={{ backgroundColor: 'grey', alignItems: 'flex-start' }}
            arrowColor='white'
            onChangeItem={item => setDomainPrefixText(item.value)}
          /> */}
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
          {showCopyButton &&
            <TouchableOpacity onPress={onLinkCopyButton}>
              <Feather name='copy' color='grey' size={22} style={{ marginHorizontal: 3 }} />
            </TouchableOpacity>}
          {showLinkIcon &&
            <TouchableOpacity onPress={onLinkLaunchButton}>
              <MaterialCommunityIcons name='launch' color='grey' size={25} style={{ marginHorizontal: 3 }} />
            </TouchableOpacity>}
        </View>
      </View>
    </View>
  );
}

SlugField.defaultProps = {
  showCopyButton: true,
  showLinkIcon: true,
};