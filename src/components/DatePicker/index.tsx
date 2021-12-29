import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles, dateStyle } from './style'; 
import Icon from 'react-native-vector-icons/Feather';
 
interface dateProps {
    title?: string;
    iconName?: any;
    mode?: any;
    value: Date;
    setFieldValue: any;
    fieldId: any;
}

interface dateTime {
    currentDateTime: Date;
}

const DateComponent : any = (props: dateTime) => {
  return (
    <View style={dateStyle.dateTimeWrap}>
      <Text style={dateStyle.text}>{props.currentDateTime.getDate()} /</Text> 
      <Text style={dateStyle.text}>{props.currentDateTime.getMonth() +1} /</Text>
      <Text style={dateStyle.text}>{props.currentDateTime.getFullYear()}</Text>
    </View>
  )
}

const TimeComponent : any = (props: dateTime) => {
  return (
    <View style={dateStyle.dateTimeWrap}>
      <Text style={dateStyle.text}>{props.currentDateTime.getHours()}</Text>
      <Text style={dateStyle.text}> : {props.currentDateTime.getMinutes()}</Text>
    </View>
  )
}

export function DatePicker (props: dateProps) {
  const { title, iconName, mode, value, setFieldValue, fieldId } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date())
  
  const showDatePicker = () => setDatePickerVisibility(true)
  const hideDatePicker = () => setDatePickerVisibility(false)
  
  const handleConfirm = (date: any) => {
    setCurrentDateTime(new Date(date.toLocaleString()));
    hideDatePicker();
  }
  
  useEffect(() => {
      setCurrentDateTime(new Date(value));
  }, []);

  useEffect(() => {
      setFieldValue(fieldId, currentDateTime.toLocaleDateString());
  }, [currentDateTime]);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker} style={dateStyle.pickerWrap}>

          <View style={dateStyle.iconWrap}>
            <Icon name={iconName} style={dateStyle.icon}/>
          </View>
          <View style={dateStyle.infoWrap}>
            <Text style={dateStyle.title}>{title}</Text>
            { mode === 'time' 
              ? <TimeComponent currentDateTime={currentDateTime} /> 
              : <DateComponent currentDateTime={currentDateTime} />
            }
          </View>
          
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        locale="pt_BR"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={currentDateTime}
      />
   </View>
  )
}

