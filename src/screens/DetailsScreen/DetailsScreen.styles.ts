import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  iconsContainer: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  closeIcon: {
    backgroundColor: 'white',
    // position: 'absolute',
    top: 50,
    left: 16,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  favIcon: {
    backgroundColor: 'white',
    // position: 'absolute',
    top: 50,
    right: 16,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default styles;
