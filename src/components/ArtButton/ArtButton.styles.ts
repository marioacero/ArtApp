import { StyleSheet } from 'react-native';
import { COLORS } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: COLORS.favActive,
    height: '100%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
