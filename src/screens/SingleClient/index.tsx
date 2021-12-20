import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export function SingleClient({ navigation, route}: any) {
    return (
        <View style={globalStyles.container}>
            <Text>PaymentDates</Text>
            <Text style={globalStyles.title}>{route.params.name}</Text>
            <Text style={globalStyles.title}>Peso: {route.params.peso}</Text>
            <Text style={globalStyles.title}>Naturalidade : {route.params.naturalidade}</Text>
            <Text style={globalStyles.title}>Contato 1 : {route.params.contact1}</Text>
            <Text style={globalStyles.title}>Contato 2 : {route.params.contact2}</Text>
            <Text style={globalStyles.title}>Objetivo : {route.params.objective}</Text>
        </View>
    )
}
