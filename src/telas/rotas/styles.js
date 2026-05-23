import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FBFF',
  },

  header: {
    minHeight: 250,
    backgroundColor: '#073D8F',
    paddingHorizontal: 28,
    paddingTop: 30,
    paddingBottom: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerCopy: {
    flex: 1,
    paddingRight: 18,
  },

  brand: {
    color: '#8FD8FF',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 20,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '900',
  },

  homeButton: {
    width: 50,
    height: 26,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#001E49',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 18,
  },

  homeButtonText: {
    color: '#082D63',
    fontSize: 14,
    fontWeight: '900',
  },

  content: {
    flex: 1,
    backgroundColor: '#F8FBFF',
    marginTop: -34,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  contentContainer: {
    paddingHorizontal: 22,
    paddingTop: 26,
    paddingBottom: 112,
  },

  driverCard: {
    minHeight: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#0A2A55',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 5,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 18,
    backgroundColor: '#E8F2FF',
    marginRight: 16,
  },

  driverInfo: {
    flex: 1,
  },

  driverEyebrow: {
    color: '#687A95',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 8,
  },

  driverTitle: {
    color: '#082D63',
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '900',
  },

  driverDescription: {
    color: '#687A95',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10,
  },

  cardArrow: {
    color: '#082D63',
    fontSize: 34,
    fontWeight: '300',
    marginLeft: 12,
  },

  sectionTitle: {
    color: '#082D63',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 34,
    marginBottom: 18,
  },

  routesList: {
    gap: 16,
  },

  routeButton: {
    minHeight: 82,
    borderRadius: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  routeDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 24,
  },

  routeButtonText: {
    flex: 1,
    color: '#082D63',
    fontSize: 24,
    fontWeight: '900',
  },

  routeButtonTextActive: {
    color: '#FFFFFF',
  },

  routeArrow: {
    color: '#082D63',
    fontSize: 32,
    fontWeight: '300',
  },

  routeArrowActive: {
    color: '#FFFFFF',
  },

  mapCard: {
    marginTop: 20,
  },

  mapTitle: {
    color: '#082D63',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 16,
  },

  mapContainer: {
    height: 210,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#DCE7F3',
  },

  map: {
    flex: 1,
  },

  mapButton: {
    position: 'absolute',
    left: 18,
    bottom: 18,
    minHeight: 54,
    paddingHorizontal: 20,
    borderRadius: 27,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#0A2A55',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 4,
  },

  mapPin: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#073D8F',
    marginRight: 12,
  },

  mapButtonText: {
    color: '#082D63',
    fontSize: 16,
    fontWeight: '900',
  },

  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 92,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 12,
    shadowColor: '#0A2A55',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  },

  navItem: {
    minWidth: 92,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  navIconActive: {
    backgroundColor: '#E8F2FF',
  },

  navIconText: {
    color: '#758196',
    fontSize: 18,
    fontWeight: '900',
  },

  navIconTextActive: {
    color: '#1D4ED8',
    fontSize: 18,
    fontWeight: '900',
  },

  navText: {
    color: '#758196',
    fontSize: 14,
    fontWeight: '800',
  },

  navTextActive: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: '900',
  },
});

export default styles;
