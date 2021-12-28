import React, { useState, useEffect} from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from './style'; 
import { Button } from 'react-native-paper';
 
interface dateProps {
    title?: string;
    iconName?: string;
    mode?: any;
    value: Date;
    setFieldValue: any;
}

const DateComponent : any = (currentDateTime: Date) => {
  console.log(currentDateTime);
  
  return (
    <>
      {/* <Text style={globalStyles.text}>{currentDateTime.getDate()} /</Text> 
      <Text style={globalStyles.text}>{currentDateTime.getMonth() +1} /</Text>
      <Text style={globalStyles.text}>{currentDateTime.getFullYear()}</Text> */}
    </>
  )
}

export function DatePicker (props: dateProps) {
  const { title, iconName, mode, value, setFieldValue } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date())
  
  const showDatePicker = () => setDatePickerVisibility(true)
  const hideDatePicker = () => setDatePickerVisibility(false)
  
  const handleConfirm = (date: any) => {
    setCurrentDateTime(new Date(date.toDateString()));
    hideDatePicker();
  }

  useEffect(() => {
    setFieldValue('date', currentDateTime);
  }, [currentDateTime])

  return (
    <View style={styles.container}>
  
      <Button 
        icon={iconName} 
        mode="contained" 
        onPress={showDatePicker}
        style={styles.datePickerButton}
        >
          <Text style={globalStyles.text}>{title} : &nbsp;</Text>
          <DateComponent currentDateTime={currentDateTime} />
      {/* <Text style={globalStyles.text}>{currentDateTime.getDate()} /</Text> 
      <Text style={globalStyles.text}>{currentDateTime.getMonth() +1} /</Text>
      <Text style={globalStyles.text}>{currentDateTime.getFullYear()}</Text>  */}
      <Text style={globalStyles.text}>{currentDateTime.getUTCHours()}</Text> 
      </Button> 

      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        locale="pt_BR"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        // date={value}
      />
      

   </View>
  )
}