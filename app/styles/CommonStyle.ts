import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BACKGROUND,
  },
  logoutContainer: {
    flex: 0.2,
    backgroundColor: COLORS.SCREEN_BACKGROUND,
    marginRight:16,
  },
  formContainer: {
    flex: 0.8,
  },
  headerText: {
    marginLeft:20,
    fontSize:26,
    fontWeight: 'bold',
    color: COLORS.PRIMARY
  },
});
