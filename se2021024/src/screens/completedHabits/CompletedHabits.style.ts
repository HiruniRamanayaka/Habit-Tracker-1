import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  noText: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  habitItem: {
    backgroundColor: '#e0ffe0',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  habitText: {
    fontSize: 16,
  },
});

export default styles;