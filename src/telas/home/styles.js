import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#06142E',
  },

  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(6, 20, 46, 0.82)',
  },

  safeArea: {
    flex: 1,
  },

  header: {
    minHeight: 72,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(7, 61, 143, 0.72)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.12)',
  },

  brandGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1688E8',
    marginRight: 10,
  },

  brand: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0,
  },

  scroll: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 56,
    paddingBottom: 30,
    justifyContent: 'center',
  },

  routeCard: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.25,
    shadowRadius: 22,
    elevation: 10,
  },

  routeIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4F2FF',
    marginBottom: 18,
  },

  routeTitle: {
    color: '#092D5D',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 0,
  },

  routeDescription: {
    maxWidth: 280,
    color: '#68798D',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 22,
  },

  mainActions: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },

  actionButton: {
    flex: 1,
    minHeight: 58,
    borderRadius: 16,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButton: {
    backgroundColor: '#0768C9',
    shadowColor: '#0768C9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },

  secondaryButton: {
    backgroundColor: '#EAF4FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },

  secondaryButtonText: {
    color: '#0768C9',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },

  restrictedAccess: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    marginTop: 30,
  },

  accessLabel: {
    color: 'rgba(255, 255, 255, 0.76)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 11,
  },

  accessRow: {
    flexDirection: 'row',
    gap: 10,
  },

  accessButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.28)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },

  accessButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  busIcon: {
    width: 22,
    height: 23,
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingTop: 4,
  },

  busIconDark: {
    width: 27,
    height: 29,
    borderColor: '#0768C9',
    borderRadius: 6,
  },

  busWindows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  busWindow: {
    width: 5,
    height: 5,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
  },

  busWindowDark: {
    width: 6,
    height: 7,
    backgroundColor: '#0768C9',
  },

  busLine: {
    width: '100%',
    height: 2,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 3,
  },

  busLineDark: {
    backgroundColor: '#0768C9',
  },

  busWheels: {
    position: 'absolute',
    left: 2,
    right: 2,
    bottom: -5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  busWheel: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },

  busWheelDark: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#0768C9',
  },
});

export default styles;
