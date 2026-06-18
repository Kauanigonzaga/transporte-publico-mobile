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

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#0A2A55',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.10,
    shadowRadius: 22,
    elevation: 5,
  },

  summaryIcon: {
    width: 66,
    height: 66,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  summaryIconText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
  },

  summaryInfo: {
    flex: 1,
  },

  summaryLabel: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '800',
  },

  summaryTitle: {
    color: '#082D63',
    fontSize: 23,
    fontWeight: '900',
    marginTop: 2,
  },

  summaryRoute: {
    color: '#65758A',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },

  sectionTitle: {
    color: '#082D63',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 24,
    marginBottom: 12,
  },

  lineGrid: {
    flexDirection: 'row',
    gap: 10,
    paddingRight: 18,
  },

  lineButton: {
    minWidth: 132,
    maxWidth: 220,
    minHeight: 58,
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
    flexShrink: 1,
    color: '#082D63',
    fontSize: 16,
    fontWeight: '900',
  },

  lineButtonTextActive: {
    color: '#FFFFFF',
  },

  descriptionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  feedbackCard: {
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  feedbackText: {
    color: '#65758A',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 10,
  },

  errorCard: {
    padding: 15,
    borderRadius: 14,
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

  descriptionTitle: {
    color: '#082D63',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },

  descriptionText: {
    color: '#53677D',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
  },

  pointsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  pointRow: {
    flexDirection: 'row',
  },

  pointTrack: {
    width: 40,
    alignItems: 'center',
  },

  pointMarker: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pointMarkerText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  pointLine: {
    flex: 1,
    width: 3,
    minHeight: 34,
    backgroundColor: '#DDE7F2',
    marginVertical: 4,
  },

  pointInfo: {
    flex: 1,
    paddingLeft: 12,
    paddingBottom: 18,
  },

  pointInfoLast: {
    paddingBottom: 0,
  },

  pointName: {
    color: '#16263A',
    fontSize: 17,
    fontWeight: '900',
  },

  pointHint: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },

  primaryButton: {
    minHeight: 52,
    backgroundColor: '#073D8F',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
});

export default styles;
