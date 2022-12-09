import { StyleSheet } from 'react-native';
interface ArtworkStyleProps {
  index: number;
  randomBool: boolean;
}
const styles = (params?: ArtworkStyleProps) =>
  StyleSheet.create({
    container: {
      marginLeft:
        params?.index !== undefined ? (params.index % 2 === 0 ? 0 : 12) : 0,
      height: params?.randomBool ? 150 : 270,
      marginTop: 12,
      borderRadius: 10,
      overflow: 'hidden',
    },
    imgSize: {
      width: '100%',
      height: '100%',
    },
    title: {
      color: 'white',
      fontSize: 12,
      paddingLeft: 50,
      paddingBottom: 5,
      fontWeight: 'bold',
    },
  });

export default styles;
