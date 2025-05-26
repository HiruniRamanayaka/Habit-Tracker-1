import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';
import LottieView from 'lottie-react-native';

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
    flex: 1,
    marginTop: 20,
  },
  habitCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#888',
    marginRight: 12,
  },
  // checkboxCompleted: {
  //   backgroundColor: '#4ade80',
  //   borderColor: '#4ade80',
  // },
  checkmark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 22, // to center inside 24x24 checkbox
  },
  celebrationModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modal: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  celebrationText: {
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  closeText: {
    fontSize: 16, 
    color: '#333'
  },
  lottieView: { 
    width: 200, 
    height: 200 
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15,
    gap: 10,
  },
});

export default styles;