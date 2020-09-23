import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 15,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  leftBar: {
    flex: 1,
    width: 5,
    backgroundColor: '#81BC7E', 
  },
  taskCard: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EBF0F4',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    // backgroundColor: 'red',
  },
  textSection: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  titleText: {
    color: '#425867',
    fontWeight: 'bold',
    fontSize: 14
  },
  contentText: {
    color: '#4F6272',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 5,
  },
  buttonSection: {
    backgroundColor: '#81BC7E',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
  },
});