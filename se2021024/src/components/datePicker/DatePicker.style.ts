import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  dateButton: {
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    width: 50,       
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  today: {
    backgroundColor: COLORS.background,
  },
  selected: {
    backgroundColor: '#888',
  },
  dayText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
    marginLeft: 4,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 4,
  },
  whiteText: {
    color: 'white',
  },
});

export default styles;