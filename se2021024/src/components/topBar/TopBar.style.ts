import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  calendarMenu: {
    position: 'absolute',
    top: 50,
    right: 60,
    backgroundColor: COLORS.black,
    padding: 10,
    borderRadius: 5,
  },
  profileMenu: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: COLORS.black,
    padding: 10,
    borderRadius: 5,
  },
  deleteBtn: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  deleteText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;