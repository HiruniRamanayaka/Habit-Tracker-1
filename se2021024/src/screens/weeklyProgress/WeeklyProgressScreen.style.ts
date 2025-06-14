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
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dayBox: {
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
  },
  dayText: {
    fontSize: 16,
    fontWeight: '600',
  },
  progressText: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default styles;