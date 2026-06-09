import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#10243D',
  },

  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11, 25, 43, 0.76)',
  },

  safeArea: {
    flex: 1,
  },

  header: {
    minHeight: 68,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(5, 55, 128, 0.97)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },

  brandGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1688E8',
    marginRight: 10,
  },

  brand: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: -0.5,
  },

  scroll: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 42,
    paddingBottom: 26,
    justifyContent: 'center',
  },

  hero: {
    marginBottom: 28,
  },

  eyebrow: {
    color: '#72C6FF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 12,
  },

  title: {
    maxWidth: 330,
    color: '#FFFFFF',
    fontSize: 39,
    lineHeight: 44,
    fontWeight: '900',
    letterSpacing: -1.4,
  },

  titleAccent: {
    color: '#31A7F5',
  },

  subtitle: {
    maxWidth: 350,
    color: 'rgba(255, 255, 255, 0.78)',
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '500',
    marginTop: 15,
  },

  routeCard: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.25,
    shadowRadius: 22,
    elevation: 10,
  },

  routeIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4F2FF',
    marginBottom: 14,
  },

  routeTitle: {
    color: '#092D5D',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.4,
  },

  routeDescription: {
    maxWidth: 280,
    color: '#68798D',
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 18,
  },

  primaryButton: {
    width: '100%',
    minHeight: 56,
    borderRadius: 15,
    paddingHorizontal: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0768C9',
    shadowColor: '#0768C9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  primaryButtonArrow: {
    position: 'absolute',
    right: 19,
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
  },

  scheduleButton: {
    minHeight: 38,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },

  scheduleButtonText: {
    color: '#0768C9',
    fontSize: 13,
    fontWeight: '800',
  },

  restrictedAccess: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    marginTop: 24,
  },

  accessLabel: {
    color: 'rgba(255, 255, 255, 0.68)',
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
    minHeight: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.28)',
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(8, 32, 58, 0.68)',
  },

  accessButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  accessButtonArrow: {
    position: 'absolute',
    right: 11,
    color: '#72C6FF',
    fontSize: 17,
    fontWeight: '800',
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
