import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 15,
  },
  container: {
    flexDirection: 'row',
  },
  barSection: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#49A6E9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timelineBar: {
    flex: 1,
    width: 3,
    backgroundColor: '#49A6E9',
  },
  descriptionSection: {
    flexDirection: 'column',
    marginLeft: 7,
  },
  dateText: {
    marginVertical: 5,
    color: 'darkgrey',
  },
  textPart: {
    borderColor: '#F1F1F1',
    borderWidth: 2,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  title: {
    color: 'dimgrey',
    fontWeight: 'bold',
  },
  content: {
    marginTop: 5,
    color: 'darkgrey',
  },
});