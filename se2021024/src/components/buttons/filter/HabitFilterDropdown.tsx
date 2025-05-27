import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useHabitStore } from '../../../store/tasks/useHabitStore';
import Icon from 'react-native-vector-icons/FontAwesome';
import getStyles from './HabitFilterDropdown.style';
import { ThemeContext } from '../../../common/context/ThemeContext';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Today', value: 'today' },
  { label: 'Completed', value: 'completed' },
];

const HabitFilterDropdown = () => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);
  const setFilter = useHabitStore(state => state.setFilter);
  const [value, setValue] = useState(null);

  const handleChange = (item: any) => {
    setValue(item.value);
    setFilter(item.value);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
        iconStyle={styles.iconStyle}
        data={filterOptions}
        labelField="label"
        valueField="value"
        placeholder="Filter"
        value={value}
        activeColor={theme.card}
        onChange={handleChange}
        renderLeftIcon={() => (
          <Icon
            name="filter"
            size={18}
            color={theme.icon}
            style={styles.leftIcon}
          />
        )}
      />
    </View>
  );
};

export default HabitFilterDropdown;