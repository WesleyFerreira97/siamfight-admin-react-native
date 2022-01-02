import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { styles } from '../../screens/SearchClient/style';
import { globalStyles } from '../../styles/globalStyles';
globalStyles;

interface Props {
    title: string;
    setFieldValue: any;
    fieldId: string;
    value?: any;
}

export function CheckBox(props: Props) {
    const { title, setFieldValue, fieldId, value } = props;
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        // Set Initial Value
        setIsChecked(value);
        
    }, []);

    const changeValue = useCallback(() => {
        setIsChecked(!isChecked);
        setFieldValue(fieldId, isChecked);

    }, [isChecked]);

    return (
        <View style={globalStyles.checkbox}>
            <Checkbox
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={changeValue}
                color='#4ecca3'
                uncheckedColor='#4ecca3'
            />
            <Text style={globalStyles.label}>{title}</Text>
            <Text style={globalStyles.label}>{isChecked}</Text>
        </View>
    );
}