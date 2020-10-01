import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ViewStyle,
  FlatList,
  Animated
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Entypo } from '@expo/vector-icons';
import styles from './style';

const exampleData = [...Array(10)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  name: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`
}));

interface TabProps {
  id: string;
  name: string;
}

interface TabActionProps {
  label: string;
  onSelect: object;
}

export interface FlexTabsProps {
  name?: string;
  tabs?: TabProps[];
  enableTabDropdowns?: boolean;
  enableContextMenu?: string;
  tabActions?: TabActionProps[];
  canRename?: boolean;
  canDrag?: boolean;
  overflow?: string;
  canAdd: boolean;
  componentWrapper: object;
  style: ViewStyle;
  tabComponent: object;
  vertical: boolean;
}

export function FlexTabs(props: FlexTabsProps) {
  const {
    name,
    tabs,
    enableTabDropdowns,
    enableContextMenu,
    tabActions,
    canRename,
    canDrag,
    overflow,
    canAdd,
    componentWrapper,
    style,
    tabComponent,
    vertical
  } = props;

  const [tabsData, setTabsData] = useState(tabs);
  const [nSelItem, setNSelItem] = useState(tabs[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [tabTitle, setTabTitle] = useState('');
  const [bEditOrAdd, setEditOrAdd] = useState(false);
  const [testData, setTestData] = useState(exampleData);

  const guidGenerator = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  };

  const renderContextModal = (
    <Modal
      // animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {tabActions &&
            tabActions.map((item, index) => (
              <TouchableHighlight
                key={index.toString()}
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  if (item.label === 'Rename') {
                    if (canRename) {
                      setTimeout(() => {
                        // item.onSelect();
                        setEditOrAdd(false);
                        setEditModalVisible(true);
                      }, 1000);
                    }
                  } else if (item.label === 'Duplicate') {
                    let tmpTabsData = tabsData;
                    var tmp = { id: guidGenerator(), name: nSelItem.name };
                    tmpTabsData.push(tmp);
                    setTabsData(tmpTabsData);
                  } else if (item.label === 'Delete') {
                    let tmpTabsData = tabsData;
                    if (tmpTabsData.length > 1) {
                      var index = tmpTabsData.indexOf(nSelItem);
                      tmpTabsData.splice(index, 1);
                      setNSelItem(tmpTabsData[0]);
                      setTabsData(tmpTabsData);
                    } else {
                      alert('You can remove the last menu');
                    }
                  }
                }}>
                <Text style={styles.textStyle}>{item.label}</Text>
              </TouchableHighlight>
            ))}
        </View>
      </View>
    </Modal>
  );

  const renderEditTabTitle = (
    <Modal
      // animationType="slide"
      transparent
      visible={editModalVisible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>Tab Title</Text>
          <TextInput
            style={{
              width: '100%',
              height: 40,
              borderColor: 'grey',
              borderWidth: 1,
              paddingHorizontal: 10,
              borderRadius: 10
            }}
            onChangeText={(text) => setTabTitle(text)}
            value={tabTitle}
            placeholder='Tab Title'
            maxLength={30}
          />
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              let tmpTabsData = tabsData;
              if (tabTitle !== '') {
                if (bEditOrAdd && canAdd) {
                  var tmp = { id: guidGenerator(), name: tabTitle };
                  tmpTabsData.push(tmp);
                } else if (!bEditOrAdd && canRename) {
                  for (var i = 0; i < tabsData.length; i++) {
                    if (tabsData[i].id === nSelItem.id) {
                      tmpTabsData[i].name = tabTitle;
                      break;
                    }
                  }
                }
              }
              setTabsData(tmpTabsData);
              setEditModalVisible(!editModalVisible);
            }}>
            <Text style={styles.textStyle}>OK</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );

  const renderDragItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        onPress={() => setNSelItem(item)}
        onLongPress={drag}
        style={[
          styles.tabBtn,
          { borderBottomColor: nSelItem.id === item.id ? '#008DD8' : 'white' }
        ]}>
        <Text style={{ color: nSelItem.id === item.id ? '#008DD8' : '#607380' }}>{item.name}</Text>
        {enableTabDropdowns && (
          <TouchableOpacity
            onPress={() => {
              setTabTitle(item.name);
              setModalVisible(true);
            }}
            style={{ width: 20 }}>
            {nSelItem.id === item.id && (
              <Entypo name='chevron-down' color='#008DD8' size={20} style={{ marginLeft: 5 }} />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const renderNormalItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => setNSelItem(item.id)}
        style={[styles.tabBtn, { borderBottomColor: nSelItem === item.id ? '#008DD8' : 'white' }]}>
        <Text style={{ color: nSelItem === item.id ? '#008DD8' : '#607380' }}>{item.name}</Text>
        {enableTabDropdowns && (
          <TouchableOpacity
            onPress={() => {
              setTabTitle(item.name);
              setModalVisible(true);
            }}
            style={{ width: 20 }}>
            {nSelItem === item.id && (
              <Entypo name='chevron-down' color='#008DD8' size={20} style={{ marginLeft: 5 }} />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.container, style]}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15,
            flex: 1
          }}>
          {canDrag ? (
            <DraggableFlatList
              data={tabsData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderDragItem}
              onDragEnd={({ data }) => setTabsData(data)}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          ) : (
            <FlatList
              data={tabsData}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ alignSelf: 'center', flexDirection: 'row' }}
              renderItem={renderNormalItem}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            setTabTitle('');
            setEditOrAdd(true);
            setEditModalVisible(true);
          }}
          style={{ marginHorizontal: 5 }}>
          <Entypo name='dots-three-horizontal' color='#607380' size={25} />
        </TouchableOpacity>
      </View>
      {modalVisible && renderContextModal}
      {editModalVisible && renderEditTabTitle}
      {/* <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={testData}
          renderItem={renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => setTestData(data)}
        />
      </View> */}
    </View>
  );
}

const MyComponentWrapper = ({ children }) => {
  return (
    <View
    // style={{ borderWidth: 2, borderColor: 'green' }}
    >
      {children}
    </View>
  );
};

const MyTabComponent = ({ children }) => {
  return (
    <View
    // style={{ borderWidth: 2, borderColor: 'red' }}
    >
      {children}
    </View>
  );
};

FlexTabs.defaultProps = {
  enableTabDropdowns: true,
  canAdd: true,
  canRename: true,
  canDrag: true,
  componentWrapper: MyComponentWrapper,
  tabComponent: MyTabComponent
};
