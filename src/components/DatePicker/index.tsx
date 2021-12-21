import React, { useState, useEffect} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from './style';

export function DatePicker () {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())

  const showDatePicker = () => setDatePickerVisibility(true)
  const hideDatePicker = () => setDatePickerVisibility(false)

  const handleConfirm = (date: any) => {
    setCurrentDate(new Date(date.toDateString()))
    hideDatePicker()
  }

  return (
    <View style={styles.container}>

        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale="pt_BR"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={globalStyles.text}>{currentDate.getDate()}</Text>
        <Text style={globalStyles.text}>{currentDate.getMonth()}</Text>
        <Text style={globalStyles.text}>{currentDate.getFullYear()}</Text>

   </View>
  )
}