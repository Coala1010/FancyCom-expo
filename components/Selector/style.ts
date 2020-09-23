import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alignItemContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  alignItemSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignIconSection: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});