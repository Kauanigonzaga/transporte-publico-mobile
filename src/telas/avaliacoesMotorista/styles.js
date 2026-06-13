import { StyleSheet } from 'react-native';

const glassCard = {
  borderRadius: 8,
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.18)',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  overflow: 'hidden',
  shadowColor: '#020617',
  shadowOffset: { width: 0, height: 14 },
  shadowOpacity: 0.28,
  shadowRadius: 22,
  elevation: 7,
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
  },

  screen: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 46,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    backgroundColor: 'rgba(8, 20, 36, 0.78)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 26,
  },

  headerTextGroup: {
    flex: 1,
    minWidth: 0,
  },

  brand: {
    color: '#E0F2FE',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 26,
    lineHeight: 31,
    fontWeight: '900',
    marginTop: 2,
  },

  summaryCard: {
    ...glassCard,
    marginHorizontal: 16,
    marginTop: 6,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 14,
  },

  summaryCopy: {
    flex: 1,
    minWidth: 0,
  },

  summaryLabel: {
    color: '#E0F2FE',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
  },

  summaryScore: {
    color: '#FFFFFF',
    fontSize: 42,
    lineHeight: 48,
    fontWeight: '900',
    marginTop: 2,
  },

  summaryRight: {
    alignItems: 'flex-end',
    flexShrink: 0,
  },

  summaryCount: {
    color: 'rgba(255, 255, 255, 0.76)',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 6,
  },

  listContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
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
    color: '#E0F2FE',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
  },

  errorText: {
    color: '#FCA5A5',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 18,
  },

  reviewCard: {
    ...glassCard,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    padding: 16,
    marginBottom: 12,
  },

  reviewHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },

  reviewAuthor: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '900',
  },

  reviewDate: {
    color: '#E0F2FE',
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '600',
    marginTop: 3,
  },

  ratingPill: {
    minWidth: 54,
    minHeight: 32,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(224, 242, 254, 0.16)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(224, 242, 254, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ratingPillText: {
    color: '#E0F2FE',
    fontSize: 13,
    fontWeight: '900',
  },

  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '900',
    marginRight: 3,
  },

  starActive: {
    color: '#FBBF24',
  },

  starInactive: {
    color: 'rgba(255, 255, 255, 0.28)',
  },

  reviewText: {
    color: 'rgba(255, 255, 255, 0.86)',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  emptyCard: {
    ...glassCard,
    flex: 1,
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '900',
    textAlign: 'center',
  },

  emptyText: {
    color: '#E0F2FE',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
  },

  emptyButton: {
    minHeight: 46,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#0EA5E9',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0EA5E9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
  },

  emptyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },

  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  botaoVoltar: {
    width: 46,
    height: 46,
  },
  titulo: {
    color: '#FFFFFF',
  },
  subtitulo: {
    color: '#E0F2FE',
  },
  listaAvaliacoes: {
    paddingHorizontal: 16,
  },
  listaAvaliacoesComScroll: {
    paddingBottom: 28,
  },
  card: {
    ...glassCard,
  },
  topoCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  data: {
    color: '#E0F2FE',
  },
  estrelas: {
    flexDirection: 'row',
  },
  comentario: {
    color: 'rgba(255, 255, 255, 0.86)',
  },
  semAvaliacao: {
    color: '#E0F2FE',
  },
});

export default styles;
