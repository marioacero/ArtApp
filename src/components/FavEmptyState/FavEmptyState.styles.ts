import { StyleSheet } from 'react-native';
import { COLORS } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: '30%',
  },
  text: {
    fontSize: 18,
    color: COLORS.gray,
    marginTop: 12,
    paddingHorizontal: 32,
    textAlign: 'center',
  },
});

export default styles;
