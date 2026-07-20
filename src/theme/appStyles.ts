import { StyleSheet } from 'react-native';
import { TOKENS } from '../constants/tokens';

// Only styles shared across multiple screens/components live here.
// Anything used by a single screen or component should be defined
// locally in that file instead.
export const appStyles = StyleSheet.create({
  appRoot: {
    flex: 1,
    backgroundColor: TOKENS.background,
  },
  screenBase: {
    flex: 1,
    backgroundColor: TOKENS.background,
  },
  scrollBase: {
    flex: 1,
  },
  safeHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(252,249,248,0.94)',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  topBarTitle: {
    color: TOKENS.onBackground,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  contentPadding: {
    paddingHorizontal: 20,
    gap: 16,
  },
  overline: {
    color: TOKENS.onSurfaceVariant,
    fontSize: 11,
    letterSpacing: 1.8,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
    marginTop: 6,
  },
  balanceCurrency: {
    color: TOKENS.primaryContainer,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  sectionHeaderRow: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionTitle: {
    color: TOKENS.onBackground,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.9,
  },
  sectionMeta: {
    color: TOKENS.onSurfaceVariant,
    fontSize: 11,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1.3,
  },
  progressTrack: {
    width: '100%',
    height: 5,
    borderRadius: 999,
    backgroundColor: TOKENS.surfaceHigh,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
