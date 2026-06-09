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

  summaryCard: {
    marginHorizontal: 18,
    marginTop: 18,
    padding: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3EAF3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 3,
  },

  summaryLabel: {
    color: '#617489',
    fontSize: 13,
    fontWeight: '700',
  },

  summaryScore: {
    color: '#12355B',
    fontSize: 42,
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

  listContent: {
    padding: 18,
    paddingBottom: 28,
  },

  emptyListContent: {
    flexGrow: 1,
  },

  feedbackContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  feedbackText: {
    color: '#65758A',
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

  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3EAF3',
    padding: 16,
    marginBottom: 12,
  },

  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  reviewAuthor: {
    color: '#16263A',
    fontSize: 16,
    fontWeight: '900',
  },

  reviewDate: {
    color: '#7A8A9C',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 3,
  },

  ratingPill: {
    minWidth: 54,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#E8F2FF',
    borderRadius: 8,
    alignItems: 'center',
  },

  ratingPillText: {
    color: '#12355B',
    fontSize: 13,
    fontWeight: '900',
  },

  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 20,
    fontWeight: '900',
    marginRight: 3,
  },

  starActive: {
    color: '#F4B000',
  },

  starInactive: {
    color: '#C9D3DF',
  },

  reviewText: {
    color: '#53677D',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },

  emptyCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3EAF3',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    color: '#16263A',
    fontSize: 21,
    fontWeight: '900',
    textAlign: 'center',
  },

  emptyText: {
    color: '#65758A',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
  },

  emptyButton: {
    minHeight: 44,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#12355B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
});

export default styles;
