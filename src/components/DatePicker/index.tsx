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

interface dateTime {
    currentDateTime: Date;
}

const DateComponent : any = (props: dateTime) => {
  return (
    <>
      <Text style={globalStyles.text}>{props.currentDateTime.getDate()} /</Text> 
      <Text style={globalStyles.text}>{props.currentDateTime.getMonth() +1} /</Text>
      <Text style={globalStyles.text}>{props.currentDateTime.getFullYear()}</Text>
    </>
  )
}

const TimeComponent : any = (props: dateTime) => {
  return (
    <>
      <Text style={globalStyles.text}>{props.currentDateTime.getHours()}</Text>
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
    setCurrentDateTime(new Date(date.toLocaleString()));
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
        { mode === 'time' 
          ? <TimeComponent currentDateTime={currentDateTime} /> 
          : <DateComponent currentDateTime={currentDateTime} />
         }
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