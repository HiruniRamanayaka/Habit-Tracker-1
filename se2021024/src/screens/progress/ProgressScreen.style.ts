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
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
  },
  progressBar: {
    marginTop: 30,
  },
  emoji: {
    fontSize: 60,
    marginVertical: 20,
  },
  message: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  textPercentage: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
    marginBottom: 15,
  },
});


export default styles;