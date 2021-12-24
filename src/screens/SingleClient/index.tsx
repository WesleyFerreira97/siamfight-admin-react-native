import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { getDocument } from '../../services/firebaseFunctions';
import { HeaderScreen  } from '../../components/header';

export function SingleClient({ navigation, route}: any) {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [cliente, setCliente] = useState<any>({});

    useEffect( () => {
        getDocument('cliente', route.params.id).then(data => {
            setCliente(data);
        });
    }, [route.params.id]);
    
    return (
        <View style={globalStyles.container}>
             <HeaderScreen title="Cliente" />
            <Text style={globalStyles.title}>Cliente </Text>
            <Text style={globalStyles.title}>{route.params.name}</Text>




            {/* <Text style={globalStyles.title}>Contato 1 : {route.params.contact1}</Text>
            <Text style={globalStyles.title}>Contato 2 : {route.params.contact2}</Text>
            <Text style={globalStyles.title}>Objetivo : {route.params.objective}</Text>
            <Text style={globalStyles.title}>Valor : {route.params.valor}</Text> */}

        </View>
    )
}


