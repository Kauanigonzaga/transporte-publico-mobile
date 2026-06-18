import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#06142E',
  },

  header: {
    backgroundColor: '#061C46',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
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

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 2,
  },

  content: {
    flex: 1,
  },

  contentContainer: {
    padding: 18,
    paddingBottom: 30,
  },

  feedback: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  feedbackText: {
    color: '#65758A',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },

  errorText: {
    color: '#BE123C',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },

  retryButton: {
    minHeight: 44,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#073D8F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },

  nextCard: {
    minHeight: 132,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 24,
    borderWidth: 1,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#001B44',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.24,
    shadowRadius: 24,
    elevation: 7,
  },

  nextInfo: {
    flex: 1,
    paddingRight: 14,
  },

  nextRight: {
    alignItems: 'flex-end',
  },

  nextLabel: {
    color: '#8FD8FF',
    fontSize: 12,
    fontWeight: '900',
  },

  routeName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 5,
  },

  routeDirection: {
    color: '#D6E8FF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 6,
  },

  nextTime: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    marginTop: 4,
  },

  pointCount: {
    color: '#D6E8FF',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 2,
  },

  routesCard: {
    marginTop: 16,
    padding: 14,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
  },

  lineSelector: {
    gap: 10,
    paddingRight: 8,
  },

  lineButton: {
    minWidth: 124,
    maxWidth: 220,
    minHeight: 52,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  lineDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    marginRight: 10,
  },

  lineButtonText: {
    flexShrink: 1,
    color: '#082D63',
    fontSize: 15,
    fontWeight: '900',
  },

  lineButtonTextActive: {
    color: '#FFFFFF',
  },

  errorCard: {
    marginTop: 16,
    padding: 15,
    borderRadius: 16,
    backgroundColor: '#FFF1F2',
    borderWidth: 1,
    borderColor: '#FECDD3',
  },

  errorTitle: {
    color: '#9F1239',
    fontSize: 15,
    fontWeight: '900',
  },

  errorText: {
    color: '#BE123C',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 4,
  },

  errorAction: {
    color: '#9F1239',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 7,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 22,
    marginBottom: 12,
  },

  stopCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
  },

  stopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stopMarker: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  stopMarkerText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  stopName: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  timesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
  },

  timePill: {
    color: '#073D8F',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '900',
  },

  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
  },
  
  feedbackCard: {
    minHeight: 120,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },

  feedbackText: {
    color: '#D6E8FF',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 10,
  },

  emptyText: {
    color: '#D6E8FF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  },

  emptyPointText: {
    color: '#D6E8FF',
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '700',
    marginTop: 12,

  },
});

export default styles;
