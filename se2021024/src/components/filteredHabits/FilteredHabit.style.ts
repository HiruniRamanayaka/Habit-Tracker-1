import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
  },
  emptyImage: {
    width: 200,
    height: 200,
  },
  emptyText: {
    fontSize: 16,
    color: '#888', 
    textAlign: 'center',
  },
  filteredHabits: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  habitName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333', 
    marginBottom: 8,
  },
  habitRow: {
    flexDirection: 'row',
  },
  habitDetail: {
    fontSize: 14,
    color: '#555555', 
    marginBottom: 4,
  },
  habitStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  allHabits: {
    paddingVertical: 8,
  },
  todayHabits: {
    justifyContent: 'space-between',
    paddingVertical: 8 ,
  },
  completedHabits: {
    paddingVertical: 8,
  },
  completedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarWrapper: {
    marginTop: 15,
    padding: 5,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#888888',
  },
});

export default styles;
