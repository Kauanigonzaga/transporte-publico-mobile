import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EEF3FF',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  phone: {
    flex: 1,
    backgroundColor: '#EEF3FF',
  },

  hero: {
    backgroundColor: '#1A3A8F',
    paddingHorizontal: 26,
    paddingTop: 28,
    paddingBottom: 42,
    overflow: 'hidden',
  },

  circleLarge: {
    position: 'absolute',
    top: -55,
    right: -55,
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#2451B8',
    opacity: 0.4,
  },

  circleMedium: {
    position: 'absolute',
    top: 40,
    right: 15,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#3B6FE0',
    opacity: 0.25,
  },

  circleSmall: {
    position: 'absolute',
    bottom: -35,
    left: -45,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#2451B8',
    opacity: 0.25,
  },

  header: {
    marginBottom: 40,
    zIndex: 2,
  },

  logoMark: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  brand: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
  },

  heroCopy: {
    zIndex: 2,
  },

  eyebrow: {
    color: '#93B8F5',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 34,
    fontWeight: '900',
    marginBottom: 8,
  },

  heroTitleAccent: {
    color: '#93C5FD',
  },

  heroText: {
    color: 'rgba(255, 255, 255, 0.62)',
    fontSize: 12,
    lineHeight: 19,
    fontWeight: '500',
  },

  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 28,
    justifyContent: 'space-between',
  },

  mainCards: {
    marginBottom: 24,
  },

  menuCard: {
    minHeight: 78,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0DCEF',
    overflow: 'hidden',
  },

  menuCardFeatured: {
    backgroundColor: '#1A3A8F',
    borderColor: '#1A3A8F',
  },

  dotAccent: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
  },

  menuBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#EEF3FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  menuBadgeFeatured: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
  },

  menuTextGroup: {
    flex: 1,
  },

  menuTitle: {
    color: '#1A2A50',
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 2,
  },

  menuTitleFeatured: {
    color: '#FFFFFF',
  },

  menuDescription: {
    color: '#8A9BBF',
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500',
  },

  menuDescriptionFeatured: {
    color: 'rgba(255, 255, 255, 0.62)',
  },

  menuArrow: {
    color: '#C0CEEA',
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 10,
  },

  menuArrowFeatured: {
    color: 'rgba(255, 255, 255, 0.45)',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D4DEEF',
  },

  dividerText: {
    color: '#9AAAC8',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginHorizontal: 10,
  },

  accessList: {
    gap: 10,
    paddingBottom: 6,
  },

  accessCard: {
    minHeight: 74,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0DCEF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  accessBadge: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  accessBadgeAdmin: {
    backgroundColor: '#DBEAFE',
  },

  accessBadgeDriver: {
    backgroundColor: '#DCFCE7',
  },

  accessTextGroup: {
    flex: 1,
  },

  accessTitle: {
    color: '#1A2A50',
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 2,
  },

  accessDescription: {
    color: '#9AAAC8',
    fontSize: 11,
    fontWeight: '700',
  },

  accessArrow: {
    color: '#C0CEEA',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },

  iconBlue: {
    backgroundColor: '#1A3A8F',
    borderColor: '#1A3A8F',
  },

  iconLight: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },

  routeIcon: {
    width: 22,
    height: 22,
    justifyContent: 'space-between',
  },

  routeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },

  routeDotEnd: {
    alignSelf: 'flex-end',
  },

  routeLine: {
    width: 20,
    height: 3,
    borderRadius: 2,
    alignSelf: 'center',
    transform: [{ rotate: '-28deg' }],
  },

  clockIcon: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clockIconBlue: {
    borderColor: '#1A3A8F',
  },

  clockIconLight: {
    borderColor: '#FFFFFF',
  },

  clockHour: {
    position: 'absolute',
    width: 3,
    height: 8,
    borderRadius: 2,
    top: 4,
  },

  clockMinute: {
    position: 'absolute',
    width: 7,
    height: 3,
    borderRadius: 2,
    right: 5,
    top: 10,
  },

  shieldIcon: {
    width: 22,
    height: 24,
    alignItems: 'center',
  },

  shieldTop: {
    width: 20,
    height: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#1D4ED8',
  },

  shieldBottom: {
    width: 14,
    height: 14,
    marginTop: -7,
    backgroundColor: '#1D4ED8',
    transform: [{ rotate: '45deg' }],
  },

  wheelIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wheelCenter: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#16A34A',
  },

  wheelSpokeLeft: {
    position: 'absolute',
    width: 9,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#16A34A',
    left: 3,
    bottom: 5,
    transform: [{ rotate: '35deg' }],
  },

  wheelSpokeRight: {
    position: 'absolute',
    width: 9,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#16A34A',
    right: 3,
    bottom: 5,
    transform: [{ rotate: '-35deg' }],
  },

  busIcon: {
    width: 22,
    height: 20,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 2,
    paddingTop: 3,
  },

  busWindowRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  busWindow: {
    width: 3,
    height: 4,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
  },

  busFrontLine: {
    width: 4,
    height: 3,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    marginTop: 2,
  },

  busWheelRow: {
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
});

export default styles;
