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
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  noHabitsContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  noText: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  noHabitsImage: {
    width: 160,
    height: 160,
    marginBottom: 12,
    opacity: 0.8,
  },
  habitItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0ffe0',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  habitText: {
    fontSize: 16,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkmark: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15,
    gap: 10,
  },
});

export default styles;