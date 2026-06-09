import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  header: {
    backgroundColor: '#12355B',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
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
    color: '#12355B',
    fontSize: 22,
    fontWeight: '900',
  },

  headerTextGroup: {
    flex: 1,
  },

  brand: {
    color: '#8FD8FF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 2,
  },

  content: {
    flex: 1,
  },

  contentContainer: {
    padding: 18,
    paddingBottom: 28,
  },

  loadingContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    color: '#617489',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
  },

  errorText: {
    color: '#BE123C',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 18,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E3EAF3',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 3,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#E8F2FF',
    borderWidth: 3,
    borderColor: '#D7E8FA',
    marginRight: 14,
  },

  profileInfo: {
    flex: 1,
  },

  statusPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#DDF8E8',
    borderRadius: 8,
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
    color: '#16263A',
    fontSize: 24,
    fontWeight: '900',
  },

  driverRoute: {
    color: '#617489',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 3,
  },

  ratingSummary: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E8EEF6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryLabel: {
    color: '#617489',
    fontSize: 13,
    fontWeight: '700',
  },

  summaryScore: {
    color: '#12355B',
    fontSize: 38,
    fontWeight: '900',
    marginTop: 2,
  },

  summaryRight: {
    alignItems: 'flex-end',
  },

  summaryCount: {
    color: '#65758A',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 6,
  },

  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starButton: {
    minWidth: 25,
    alignItems: 'center',
  },

  star: {
    color: '#C9D3DF',
    fontSize: 20,
    fontWeight: '900',
  },

  starLarge: {
    fontSize: 34,
  },

  starActive: {
    color: '#F4B000',
  },

  starInactive: {
    color: '#C9D3DF',
  },

  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
  },

  infoBox: {
    width: '48%',
    minHeight: 76,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3EAF3',
    padding: 14,
    justifyContent: 'center',
  },

  infoLabel: {
    color: '#617489',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },

  infoValue: {
    color: '#16263A',
    fontSize: 15,
    fontWeight: '900',
  },

  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3EAF3',
    padding: 16,
    marginTop: 16,
  },

  sectionTitle: {
    color: '#16263A',
    fontSize: 20,
    fontWeight: '900',
  },

  sectionDescription: {
    color: '#65758A',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },

  largeStarsWrapper: {
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 12,
  },

  input: {
    minHeight: 108,
    backgroundColor: '#F4F7FB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E1E8F0',
    padding: 12,
    color: '#16263A',
    fontSize: 14,
    textAlignVertical: 'top',
    marginBottom: 12,
  },

  primaryButton: {
    minHeight: 48,
    backgroundColor: '#12355B',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  secondaryButton: {
    minHeight: 48,
    backgroundColor: '#E8F2FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: '#12355B',
    fontSize: 15,
    fontWeight: '900',
  },
});

export default styles;
