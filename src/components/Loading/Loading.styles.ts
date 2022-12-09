import { StyleSheet } from 'react-native';
import { COLORS } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.loadignBackground,
  },
  text: {
    marginHorizontal: 6,
    fontSize: 12,
    fontWeight: '500',
  },
  activityIndicatorWrapper: {
    backgroundColor: COLORS.loadingSpinner,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
