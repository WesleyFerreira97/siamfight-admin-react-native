import { StyleSheet, View } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        paddingTop: 8,
    },
    datePickerButton: {
        borderRadius: 2,
        height: 37,
        backgroundColor: '#3BBC92',
        color: '#1A1A2E',
    }
});

export const dateStyle = StyleSheet.create({
    pickerWrap: {
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 5,
      backgroundColor: '#16213E',
    },
    iconWrap: {
      display: 'flex',
      justifyContent: 'center',
      padding: 15,
      borderRadius: 5,
      backgroundColor: '#3BBC92',
    },
    icon: {
      fontSize: 20,
      color: '#fff',
    },
    infoWrap: {
      // backgroundColor: '#16213E',
    },
    title: {
      color: '#3BBC92',
      marginTop: 5,
      marginLeft: 15,
    },
    dateTimeWrap: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
      marginLeft: 15,
      color: '#3BBC92',
    },
    text: {
      color: '#3BBC92',
      fontSize: 19,
    }
  });