import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { styles } from '../../screens/SearchClient/style';
import { globalStyles } from '../../styles/globalStyles';
globalStyles;


export function CheckBox(props: any) {
    const { setFieldValue } = props;
    const [isChecked, setIsChecked] = useState(false);
    
    useEffect(() => {
        // Send data to form
        setFieldValue('physicalActivity', isChecked);
    }, [isChecked]);
    
    return (
        <View style={globalStyles.checkbox}>
            <Checkbox
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() => setIsChecked(!isChecked)}
                color='#4ecca3'
                uncheckedColor='#4ecca3'
            />
            <Text style={globalStyles.label}>Pratica atividade física</Text>
        </View>
    );
}