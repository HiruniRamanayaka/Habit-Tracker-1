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
    padding: 10,
    flex: 1,
  },
  form: {
    margin: 20,
    backgroundColor: COLORS.white,
    padding: 30,
    borderRadius: 10,
  },
  heading: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: 500,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: COLORS.darkGray,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: COLORS.white,
    color: COLORS.darkGray,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: COLORS.white,
  },
  picker: {
    height: 50,
    color: COLORS.darkGray,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: COLORS.white,
  },
  dayButtonSelected: {
    backgroundColor: COLORS.lightPurple,
    borderColor: COLORS.primaryBtn,
  },
  dayText: {
    color: COLORS.darkGray,
    fontWeight: '500',
  },
  addButton: {
  backgroundColor: COLORS.primaryBtn,
  paddingVertical: 14,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 20,
  shadowColor: COLORS.black,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
},
addButtonText: {
  color: COLORS.white,
  fontSize: 16,
  fontWeight: '600',
},
});

export default styles;
