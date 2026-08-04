import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const scaleWidth = (px) => (SCREEN_WIDTH / 390) * px;
export const scaleHeight = (px) => (SCREEN_HEIGHT / 844) * px;

export const COLORS = {
  primary: '#FF5263',
  secondaryBg: '#FFF0F2',
  background: '#F9F9F9',
  cardBg: '#FFFFFF',
  textDark: '#1A1D21',
  textMuted: '#9BA3AF',
  accentGreen: '#22C55E',
};

export const LAYOUT = {
  paddingHorizontal: scaleWidth(24),
  baseRadius: 20,
  cardRadius: 24,
  pillRadius: 30,
};