import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 30,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.background,
    textAlign: 'center',
  },
  title2: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 30,
  },
  loader: {
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;