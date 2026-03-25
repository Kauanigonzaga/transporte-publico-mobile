import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#7b4d4d',
    padding: 8,
  },

  pageTitle: {
    color: '#d9d9d9',
    fontSize: 16,
    marginBottom: 6,
  },

  panel: {
    flex: 1,
    backgroundColor: '#3b4658',
    overflow: 'hidden',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 58,
  },

  motoristaBox: {
    width: 140,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  motoristaText: {
    fontSize: 17,
    color: '#111',
    fontWeight: '400',
  },

  logoBox: {
    width: 65,
    backgroundColor: '#d7e7ef',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },

  menuBox: {
    flex: 1,
    backgroundColor: '#384255',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
  },

  menuButton: {
    backgroundColor: '#294a9b',
    minWidth: 72,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  menuButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
  },

  mapArea: {
    flex: 1,
    backgroundColor: '#eef3ee',
  },

  map: {
    flex: 1,
  },

  fakeMap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf4ed',
  },

  bottomBar: {
    height: 38,
    backgroundColor: '#384255',
  },
  
});



export default styles;