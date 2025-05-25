import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/Theme';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;