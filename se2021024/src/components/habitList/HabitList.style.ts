import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 16,
  },
  noHabitsContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  noHabitsImage: {
    width: 160,
    height: 160,
    marginBottom: 12,
    opacity: 0.8,
  },
  noHabitsText: {
    fontSize: 16,
    color: '#6B7280',
  },
  habitListContainer: {
    marginTop: 20,
  },
  habitCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  habitName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  habitFrequency: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 4,
  },
  habitDays: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
});

export default styles;