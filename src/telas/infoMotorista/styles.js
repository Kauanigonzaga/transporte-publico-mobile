import { StyleSheet } from 'react-native';

const glassFill = 'rgba(255, 255, 255, 0.14)';
const glassBorder = 'rgba(255, 255, 255, 0.22)';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
  },

  screen: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    shadowColor: '#001B44',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 4,
  },

  backButtonText: {
    color: '#073D8F',
    fontSize: 22,
    fontWeight: '900',
  },

  headerTextGroup: {
    flex: 1,
  },

  brand: {
    color: '#8FD8FF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    marginTop: 3,
  },

  content: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: 18,
    paddingBottom: 30,
  },

  loadingContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    color: '#EAF4FF',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 12,
  },

  errorText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 18,
  },

  profileCard: {
    backgroundColor: glassFill,
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: glassBorder,
    shadowColor: '#001B44',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.20,
    shadowRadius: 24,
    elevation: 6,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.26)',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.58)',
    marginRight: 14,
  },

  profileInfo: {
    flex: 1,
  },

  statusPill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(221, 248, 232, 0.96)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 8,
  },

  statusText: {
    color: '#197A42',
    fontSize: 12,
    fontWeight: '900',
  },

  driverName: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '900',
  },

  driverRoute: {
    color: '#D6E8FF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    marginTop: 4,
  },

  ratingSummary: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.20)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryLabel: {
    color: '#C9E3FF',
    fontSize: 13,
    fontWeight: '800',
  },

  summaryScore: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '900',
    marginTop: 2,
  },

  summaryRight: {
    alignItems: 'flex-end',
  },

  summaryCount: {
    color: '#D6E8FF',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 6,
  },

  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starButton: {
    minWidth: 30,
    alignItems: 'center',
  },

  star: {
    color: 'rgba(255, 255, 255, 0.34)',
    fontSize: 20,
    fontWeight: '900',
  },

  starLarge: {
    fontSize: 36,
  },

  starActive: {
    color: '#FFD166',
  },

  starInactive: {
    color: 'rgba(255, 255, 255, 0.34)',
  },

  routesCard: {
    backgroundColor: glassFill,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: glassBorder,
    padding: 16,
    marginTop: 16,
  },

  routePill: {
    minHeight: 40,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    marginTop: 9,
  },

  routePillText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  reviewCard: {
    backgroundColor: glassFill,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: glassBorder,
    padding: 16,
    marginTop: 16,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },

  sectionDescription: {
    color: '#D6E8FF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    marginTop: 5,
  },

  emptyText: {
    color: '#D6E8FF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    marginTop: 9,
  },

  largeStarsWrapper: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 14,
  },

  input: {
    minHeight: 112,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    padding: 13,
    color: '#10243D',
    fontSize: 14,
    textAlignVertical: 'top',
    marginBottom: 12,
  },

  successText: {
    color: '#DDF8E8',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 12,
    textAlign: 'center',
  },

  primaryButton: {
    minHeight: 48,
    backgroundColor: '#1769E0',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonDisabled: {
    opacity: 0.72,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  secondaryButton: {
    minHeight: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: '#073D8F',
    fontSize: 15,
    fontWeight: '900',
  },
});

export default styles;
