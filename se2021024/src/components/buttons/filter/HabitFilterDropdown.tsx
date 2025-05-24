import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useHabitStore } from '../../../store/tasks/useHabitStore';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HabitFilterDropdown.style';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Today', value: 'today' },
  { label: 'Completed', value: 'completed' },
];

const HabitFilterDropdown = () => {
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
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={filterOptions}
        labelField="label"
        valueField="value"
        placeholder="Filter"
        value={value}
        onChange={handleChange}
        renderLeftIcon={() => (
          <Icon
            name="filter"
            size={18}
            color="#666"
            style={styles.leftIcon}
          />
        )}
      />
    </View>
  );
};

export default HabitFilterDropdown;