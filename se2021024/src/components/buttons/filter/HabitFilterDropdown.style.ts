import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const getStyles = (theme: any) =>
StyleSheet.create({
  container: {
    width: 160,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  dropdown: {
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: theme.card,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerStyle: {
    backgroundColor: theme.card,      
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 14,
    color: theme.text,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#333',
  },
  itemTextStyle: {
    fontSize: 14,
    color: theme.text,               
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  leftIcon: {
    marginRight: 10,
  },
});

export default getStyles;
