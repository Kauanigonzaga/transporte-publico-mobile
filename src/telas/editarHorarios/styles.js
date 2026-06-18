import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#06142E',
  },

  safeArea: {
    flex: 1,
  },

  header: {
    minHeight: 86,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#061C46',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.28,
    shadowRadius: 22,
    elevation: 9,
  },

  headerTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 29,
  },

  backButton: {
    minHeight: 42,
    borderRadius: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 34,
  },

  card: {
    borderRadius: 24,
    padding: 18,
    backgroundColor: 'transparent',
    borderWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 34,
  },

  cardDescription: {
    color: 'rgba(255, 255, 255, 0.76)',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    marginTop: 9,
  },

  routesArea: {
    marginTop: 22,
    minHeight: 54,
    justifyContent: 'center',
  },

  routeList: {
    gap: 10,
    paddingRight: 8,
  },

  routeButton: {
    minWidth: 122,
    maxWidth: 220,
    minHeight: 52,
    borderRadius: 15,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routeButtonActive: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.55)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },

  routeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
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

  feedbackCard: {
    minHeight: 132,
    marginTop: 22,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },

  feedbackText: {
    color: '#DBEAFE',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 10,
  },

  pointsList: {
    marginTop: 24,
    gap: 15,
  },

  pointCard: {
    borderRadius: 18,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.14)',
  },

  pointHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 14,
  },

  pointInfo: {
    flex: 1,
  },

  pointName: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    lineHeight: 24,
  },

  pointMeta: {
    color: '#D1D5DB',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 5,
  },

  addButton: {
    width: 46,
    height: 46,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    lineHeight: 30,
  },

  scheduleList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingTop: 17,
    marginTop: 17,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.14)',
  },

  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  timeInput: {
    width: 104,
    minHeight: 45,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  deleteButton: {
    width: 39,
    height: 39,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF4444',
  },

  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },

  saveButton: {
    minHeight: 50,
    marginTop: 17,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
  },

  disabledButton: {
    opacity: 0.65,
  },

  emptyText: {
    color: '#DBEAFE',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 20,
    textAlign: 'center',
  },

  emptyPointText: {
    color: '#DBEAFE',
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 20,
  },
});

export default styles;
