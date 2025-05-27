import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';
import styles from './DatePicker.style';
import { ThemeContext } from '../../common/context/ThemeContext';

type DatePickerProps = {
  onDateSelect: (date: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ onDateSelect }) => {
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const tempDates = [];
    for (let i = -3; i <= 3; i++) {             // Loop through the next 7 days (before 3 days to today and after 3 days to today)
      const date = moment().add(i, 'days').format('YYYY-MM-DD');
      tempDates.push(date);
    }
    setDates(tempDates);
  }, []);

  // render each date box in the horizontal list 
  const renderItem = ({ item }: { item: string }) => {
    const isToday = item === moment().format('YYYY-MM-DD');              // True if the date is today
    const isSelected = item === selectedDate;   
    
    const backgroundColor = isToday
      ? theme.card
      : isSelected
      ? '#'
      : theme.background;

    const textColor = isToday || isSelected ? 'white' : theme.text;// True if the date is selected (if user clicked)

    // date box
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedDate(item);
          onDateSelect(item);
        }}
        style={[
          styles.dateButton, { backgroundColor },
          isToday && styles.today,
          isSelected && !isToday && styles.selected,
        ]}
      >
        <Text style={[styles.dayText, (isToday || isSelected) && styles.whiteText]}>
            {moment(item).format('ddd')}       {/*show the day of the week as a short form (e.g. Mon, Tue, Wed)*/}
        </Text>              
        <Text style={[styles.dateText, (isToday || isSelected) && styles.whiteText]}>   
          {moment(item).format('D')}            {/* Day number (e.g. 18) */}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={dates}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DatePicker;
