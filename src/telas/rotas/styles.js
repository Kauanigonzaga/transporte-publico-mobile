
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E0F2FE',
  },

  container: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#111827',
    overflow: 'hidden',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E40AF',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  motoristaSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0F2FE',
  },

  primaryButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },

  secondaryButton: {
    backgroundColor: '#3B82F6',
    borderWidth: 1,
    borderColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  /* MAPA */
  mapContainer: {
  flex: 1,
  borderRadius: 20,
  overflow: 'hidden',
},

  /* FOOTER */
  footer: {
    height: 40,
    backgroundColor: '#1E40AF',
  },
});

export default styles;