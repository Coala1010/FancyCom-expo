import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 10
  },
  scrollViewWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: '#E7EEF2',
    borderTopWidth: 2,
    borderTopColor: '#E7EEF2',
    flexDirection: 'row'
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  leftItemsSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 120,
    height: 60,
    marginHorizontal: 5
  },
  toolbarTitleText: {
    color: '#607380',
    paddingHorizontal: 15
  },
  rightItemsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  publishBtn: {
    backgroundColor: '#F35564',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5
  },
  publishBtnText: {
    color: 'white'
  },
  userAvatarPart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatarImg: {
    width: 40,
    height: 40,
    marginHorizontal: 5
  },
  rightItemElement: {
    marginHorizontal: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: 30
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%'
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '100%',
    marginTop: 15
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  modalEdiTitleInput: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10
  }
});
