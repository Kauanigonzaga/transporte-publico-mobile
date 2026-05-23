import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  header: {
    minHeight: 190,
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
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
  },

  content: {
    flex: 1,
    marginTop: -52,
  },

  contentContainer: {
    paddingHorizontal: 18,
    paddingBottom: 28,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#0A2A55',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 5,
  },

  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#E8F2FF',
    marginRight: 16,
  },

  profileInfo: {
    flex: 1,
  },

  statusPill: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 8,
  },

  statusOnline: {
    backgroundColor: '#DDF8E8',
  },

  statusOffline: {
    backgroundColor: '#FFE4E6',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '900',
  },

  statusTextOnline: {
    color: '#197A42',
  },

  statusTextOffline: {
    color: '#BE123C',
  },

  driverName: {
    color: '#082D63',
    fontSize: 24,
    fontWeight: '900',
  },

  driverRoute: {
    color: '#65758A',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 4,
  },

  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  cardLabel: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '800',
  },

  cardTitle: {
    color: '#082D63',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 4,
    maxWidth: 190,
  },

  statusButton: {
    minHeight: 42,
    minWidth: 86,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pauseButton: {
    backgroundColor: '#F97316',
  },

  startButton: {
    backgroundColor: '#16A34A',
  },

  statusButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 16,
  },

  statBox: {
    width: '48%',
    minHeight: 94,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  statLabel: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 7,
  },

  statValue: {
    color: '#073D8F',
    fontSize: 30,
    fontWeight: '900',
  },

  statValueSmall: {
    color: '#082D63',
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '900',
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  sectionTitle: {
    color: '#082D63',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 8,
  },

  infoRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EEF6',
  },

  infoRowLast: {
    paddingTop: 12,
  },

  infoLabel: {
    color: '#65758A',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 4,
  },

  infoValue: {
    color: '#16263A',
    fontSize: 16,
    fontWeight: '900',
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
    fontSize: 16,
    fontWeight: '900',
  },
});

export default styles;
