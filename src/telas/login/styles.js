import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#073D8F',
    paddingHorizontal: 22,
  },

  header: {
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButtonText: {
    color: '#073D8F',
    fontSize: 22,
    fontWeight: '900',
  },

  brand: {
    color: '#8FD8FF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0,
  },

  hero: {
    paddingTop: 54,
    paddingBottom: 28,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    lineHeight: 44,
    fontWeight: '900',
  },

  subtitle: {
    color: '#DCEBFF',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
    marginTop: 12,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    shadowColor: '#001E49',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.22,
    shadowRadius: 24,
    elevation: 8,
  },

  formTitle: {
    color: '#082D63',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 12,
  },

  roleSelector: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },

  roleButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: '#E8F2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  roleButtonActive: {
    backgroundColor: '#073D8F',
  },

  roleButtonText: {
    color: '#073D8F',
    fontSize: 14,
    fontWeight: '900',
  },

  roleButtonTextActive: {
    color: '#FFFFFF',
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

  primaryButton: {
    minHeight: 52,
    backgroundColor: '#073D8F',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  secondaryButton: {
    minHeight: 50,
    backgroundColor: '#E8F2FF',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  secondaryButtonText: {
    color: '#073D8F',
    fontSize: 15,
    fontWeight: '900',
  },
});

export default styles;
