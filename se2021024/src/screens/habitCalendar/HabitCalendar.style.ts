import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      marginTop: 5,
 },
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  calendar: {
    marginTop: 40,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
    padding: 30,
  },
});

export default styles;