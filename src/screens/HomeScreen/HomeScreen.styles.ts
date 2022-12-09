import { StyleSheet } from 'react-native';
import { COLORS } from 'src/utils/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    paddingHorizontal: 16,
  },
  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '700',
    marginLeft: 16,
    paddingBottom: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favContainer: {
    paddingRight: 32,
  },
  favHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    paddingLeft: 8,
    width: '10%',
  },
});

export default styles;
