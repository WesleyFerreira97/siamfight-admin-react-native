import React, { useState, useEffect} from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from './style'; 
import { Button } from 'react-native-paper';
 

export function DatePicker (props: any) {
  const { handleSubmit, values, setFieldValue, handleChange } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())

  const showDatePicker = () => setDatePickerVisibility(true)
  const hideDatePicker = () => setDatePickerVisibility(false)
  
  const handleConfirm = (date: any) => {
    setCurrentDate(new Date(date.toDateString()));
    setFieldValue('date', currentDate);
    hideDatePicker();
  }

  return (
    <View style={styles.container}>
  
      <Button icon="calendar" mode="contained" onPress={showDatePicker}>
          Pagamento : &nbsp;   
          <Text style={globalStyles.text}>{currentDate.getDate()}</Text> /
          <Text style={globalStyles.text}>{currentDate.getMonth()}</Text> /
          <Text style={globalStyles.text}>{currentDate.getFullYear()}</Text>
      </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale="pt_BR"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        

   </View>
  )
}