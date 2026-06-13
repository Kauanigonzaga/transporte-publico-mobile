import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  header: {
    backgroundColor: '#073D8F',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 8,
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
    minHeight: 128,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#0A2A55',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.10,
    shadowRadius: 22,
    elevation: 5,
  },

  nextLabel: {
    color: '#65758A',
    fontSize: 14,
    fontWeight: '800',
  },

  nextTime: {
    color: '#082D63',
    fontSize: 44,
    fontWeight: '900',
    marginTop: 4,
  },

  lineBadge: {
    minWidth: 94,
    minHeight: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },

  lineBadgeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  sectionTitle: {
    color: '#082D63',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 24,
    marginBottom: 12,
  },

  lineSelector: {
    gap: 10,
    paddingRight: 18,
  },

  lineButton: {
    minHeight: 52,
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  lineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 10,
  },

  lineButtonText: {
    color: '#082D63',
    fontSize: 15,
    fontWeight: '900',
  },

  lineButtonTextActive: {
    color: '#FFFFFF',
  },

  routeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  routeLabel: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 4,
  },

  routeTitle: {
    color: '#082D63',
    fontSize: 19,
    fontWeight: '900',
  },

  stopCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  stopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stopMarker: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  stopMarkerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },

  stopInfo: {
    flex: 1,
  },

  stopName: {
    color: '#16263A',
    fontSize: 17,
    fontWeight: '900',
  },

  stopHint: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 3,
  },

  timesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
  },

  timePill: {
    color: '#073D8F',
    backgroundColor: '#E8F2FF',
    overflow: 'hidden',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: '900',
  },

  emptyText: {
    color: '#65758A',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
});

export default styles;
