import { StyleSheet } from 'react-native';


const glassFill = 'rgba(255, 255, 255, 0.14)';
const glassBorder = 'rgba(255, 255, 255, 0.22)';


const styles = StyleSheet.create({
  background: {
    flex: 1,

  },

  overlay: {
    flex: 1,

  },

  screen: {
    flex: 1,

  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 18,

    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  backButton: {

    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    shadowColor: '#001B44',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 4,
  },

  backButtonText: {
    color: '#073D8F',
    fontSize: 22,

    fontWeight: '900',
    lineHeight: 26,
  },

  headerTextGroup: {
    flex: 1,
    paddingTop: 1,
    minWidth: 0,

  },

  brand: {
    color: '#E0F2FE',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 34,
    fontWeight: '900',
    marginTop: 3,
  },


  subtitle: {
    color: '#D6E8FF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    marginTop: 7,
  },

  listContent: {
    paddingBottom: 30,

  },

  emptyListContent: {
    flexGrow: 1,
  },


  summaryCard: {
    marginHorizontal: 18,
    marginTop: 2,
    marginBottom: 18,
    padding: 18,
    minHeight: 132,
    backgroundColor: glassFill,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: glassBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#001B44',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.20,
    shadowRadius: 24,
    elevation: 6,
  },

  summaryScoreGroup: {
    flex: 1,
    paddingRight: 16,
  },

  summaryLabel: {
    color: '#C9E3FF',
    fontSize: 13,
    fontWeight: '800',
  },

  summaryScore: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '900',
    marginTop: 2,
  },

  summaryRight: {
    flex: 1.15,
    alignItems: 'flex-end',
  },

  summaryCount: {
    color: '#D6E8FF',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 8,
  },

  driverName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 6,
    textAlign: 'right',
  },

  reviewCard: {
    marginHorizontal: 18,
    marginBottom: 13,
    padding: 16,
    backgroundColor: glassFill,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: glassBorder,
    shadowColor: '#001B44',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 18,
    elevation: 5,
  },

  reviewHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  reviewTitleGroup: {
    flex: 1,
    paddingRight: 12,
  },

  reviewTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

  reviewDate: {
    color: '#C9E3FF',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },

  ratingPill: {
    minWidth: 56,
    minHeight: 36,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ratingPillText: {
    color: '#073D8F',
    fontSize: 13,
    fontWeight: '900',
  },

  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontWeight: '900',
    marginRight: 3,
  },

  starActive: {

    color: '#FFD166',
  },

  starInactive: {
    color: 'rgba(255, 255, 255, 0.34)',
  },

  reviewText: {
    color: '#F4F8FF',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    marginTop: 12,
  },

  feedbackContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  feedbackText: {
    color: '#EAF4FF',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 12,
  },

  errorScreen: {
    flex: 1,
  },

  feedbackCard: {
    marginHorizontal: 18,
    marginTop: 8,
    padding: 18,
    borderRadius: 20,
    backgroundColor: glassFill,
    borderWidth: 1,
    borderColor: glassBorder,
    alignItems: 'center',
  },

  errorText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },

  retryButton: {
    minHeight: 44,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  retryButtonText: {
    color: '#073D8F',
    fontSize: 14,
    fontWeight: '900',
  },

  emptyCard: {
    marginHorizontal: 18,
    padding: 22,
    minHeight: 150,
    borderRadius: 20,
    backgroundColor: glassFill,
    borderWidth: 1,
    borderColor: glassBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '900',
    textAlign: 'center',
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
