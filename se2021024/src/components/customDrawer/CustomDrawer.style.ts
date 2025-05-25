import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  header: {
    paddingTop: 0,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 150,
    height: 90,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 18,
    fontWeight: '600',
  },
  drawerList: {
    flex: 1,
    paddingTop: 15,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});


export default styles;