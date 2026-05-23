import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(2, 20, 46, 0.70)',
  },

  screen: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 14,
    paddingBottom: 22,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brand: {
    color: '#8FD8FF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0,
  },

  subtitle: {
    color: '#D8E8FA',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },

  loginButton: {
    minHeight: 42,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#073D8F',
    fontSize: 14,
    fontWeight: '900',
  },

  hero: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 18,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '900',
    maxWidth: 330,
  },

  heroText: {
    color: '#E8F2FF',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    marginTop: 14,
    maxWidth: 330,
  },

  panel: {
    backgroundColor: '#F8FBFF',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#001E49',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.20,
    shadowRadius: 24,
    elevation: 8,
  },

  panelTitle: {
    color: '#082D63',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 12,
  },

  menuCard: {
    minHeight: 86,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3EAF3',
  },

  menuCardFeatured: {
    backgroundColor: '#1D4ED8',
    borderColor: '#1D4ED8',
  },

  menuBadge: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E8F2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  menuBadgeFeatured: {
    backgroundColor: '#FFFFFF',
  },

  menuBadgeText: {
    color: '#073D8F',
    fontSize: 14,
    fontWeight: '900',
  },

  menuBadgeTextFeatured: {
    color: '#1D4ED8',
  },

  menuTextGroup: {
    flex: 1,
  },

  menuTitle: {
    color: '#082D63',
    fontSize: 18,
    fontWeight: '900',
  },

  menuTitleFeatured: {
    color: '#FFFFFF',
  },

  menuDescription: {
    color: '#65758A',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 4,
  },

  menuDescriptionFeatured: {
    color: '#DCEBFF',
  },

  menuArrow: {
    color: '#082D63',
    fontSize: 28,
    fontWeight: '300',
    marginLeft: 10,
  },

  menuArrowFeatured: {
    color: '#FFFFFF',
  },
});

export default styles;
