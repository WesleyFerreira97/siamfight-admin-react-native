import React, {useState, Fragment} from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
// import { DatePicker } from "@material-ui/pickers"; 
// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export function SingleClient({ navigation, route}: any) {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Fragment>
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleSmall}>Single Client</Text>
            <Text style={globalStyles.title}>{route.params.name}</Text>
            <Text style={globalStyles.title}>Peso: {route.params.peso}</Text>
            <Text style={globalStyles.title}>Naturalidade : {route.params.naturalidade}</Text>
            <Text style={globalStyles.title}>Contato 1 : {route.params.contact1}</Text>
            <Text style={globalStyles.title}>Contato 2 : {route.params.contact2}</Text>
            <Text style={globalStyles.title}>Objetivo : {route.params.objective}</Text>

        </View>

        
    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        label="DateTimePicker"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <DateTimePicker
        autoOk
        ampm={false}
        disableFuture
        value={selectedDate}
        onChange={handleDateChange}
        label="24h clock"
      />

      <DateTimePicker
        value={selectedDate}
        disablePast
        onChange={handleDateChange}
        label="With Today Button"
        showTodayButton
      />
    </MuiPickersUtilsProvider> */}
        </Fragment>
    )
}
