
import { StyleSheet } from "react-native";

const getStyles = (theme: any) => StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: theme.modalOverlay,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.card,
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 16,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: theme.label,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: theme.inputBackground,
    color: theme.text,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: theme.inputBackground,
  },
  picker: {
    height: 50,
    color: theme.text,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: theme.inputBackground,
  },
  dayButtonSelected: {
    backgroundColor: theme.primary,
    borderColor: theme.accent,
  },
  dayText: {
    color: theme.text,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: theme.fab,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  cancelButton: {
    backgroundColor: theme.button,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.border,
  },
  cancelButtonText: {
    color: theme.text,
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});


export default getStyles;