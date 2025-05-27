import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Theme';

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1, 
    width: '100%',
  },
  backgroundImage: {
    marginTop: 20,
    width: '100%',
    height: 350, 
    marginBottom: 0,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    width: '100%',
    flex: 1,
    borderTopRightRadius: 150,
    paddingVertical: 24,
    paddingHorizontal: 16,
    shadowColor: COLORS.white,
    shadowOffset: { width: 0, height: 4 }, // X & Y offset
    shadowOpacity: 0.3, 
  },
  inputTitles: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.darkGray,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    gap: 5,
},
  input: {
    fontSize: 16,
  },
  button: {
    backgroundColor:COLORS.background,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },
  linkText: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
  link: {
    color: COLORS.linkColor,
    fontSize: 14,
    fontWeight: 400,
  },
});

export default styles;

// npm install react-native-linear-gradient   
// npm install react-native-vector-icons