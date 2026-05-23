import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  header: {
    minHeight: 178,
    backgroundColor: '#073D8F',
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 34,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  homeButton: {
    minHeight: 42,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  homeButtonText: {
    color: '#073D8F',
    fontSize: 14,
    fontWeight: '900',
  },

  headerTextGroup: {
    flex: 1,
  },

  brand: {
    color: '#8FD8FF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 8,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 31,
    lineHeight: 36,
    fontWeight: '900',
  },

  content: {
    flex: 1,
    marginTop: -46,
  },

  contentContainer: {
    paddingHorizontal: 18,
    paddingBottom: 28,
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    shadowColor: '#0A2A55',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 5,
  },

  summaryLabel: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '800',
  },

  summaryTitle: {
    color: '#082D63',
    fontSize: 23,
    lineHeight: 29,
    fontWeight: '900',
    marginTop: 4,
  },

  summaryText: {
    color: '#53677D',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    marginTop: 8,
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
    flexWrap: 'wrap',
    gap: 10,
  },

  lineButton: {
    width: '48%',
    minHeight: 58,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  lineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 10,
  },

  lineButtonText: {
    color: '#082D63',
    fontSize: 16,
    fontWeight: '900',
  },

  lineButtonTextActive: {
    color: '#FFFFFF',
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  formTitle: {
    color: '#082D63',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 16,
  },

  inputGroup: {
    marginBottom: 14,
  },

  label: {
    color: '#65758A',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 7,
  },

  input: {
    minHeight: 52,
    backgroundColor: '#F4F7FB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E8F0',
    paddingHorizontal: 14,
    color: '#16263A',
    fontSize: 15,
    fontWeight: '700',
  },

  textArea: {
    minHeight: 92,
    backgroundColor: '#F4F7FB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E8F0',
    padding: 14,
    color: '#16263A',
    fontSize: 15,
    fontWeight: '700',
    textAlignVertical: 'top',
  },

  primaryButton: {
    minHeight: 52,
    backgroundColor: '#073D8F',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
});

export default styles;
