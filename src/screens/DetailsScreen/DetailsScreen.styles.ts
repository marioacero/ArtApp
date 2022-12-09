import { StyleSheet } from 'react-native';
import { COLORS } from 'src/utils/colors';
interface ImageProps {
  height: number;
  width: number;
}

const imgStyles = (props?: ImageProps) =>
  StyleSheet.create({
    image: {
      width: '100%',
      aspectRatio:
        props?.height && props?.width ? props.width / props.height / 0.85 : 1,
    },
  });

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  img: {
    width: '100%',
    height: 300,
  },
  title: {
    color: COLORS.white,
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
    backgroundColor: COLORS.white,
    top: 50,
    left: 16,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  favIcon: {
    backgroundColor: COLORS.white,
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
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  artist: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '900',
    width: '80%',
  },
  year: {
    color: COLORS.gray,
  },
  artType: {
    color: COLORS.white,
    fontSize: 16,
    fontStyle: 'italic',
  },
  dimensions: {
    color: COLORS.white,
    paddingTop: 32,
  },
  dimensionsValue: {
    color: COLORS.white,
    paddingTop: 6,
  },
});

export { styles, imgStyles };
