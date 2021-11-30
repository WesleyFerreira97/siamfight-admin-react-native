import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';

export function SignIn() {
    const [input, setInput] = useState('Valor Inicial');
  return (
    <View style={styles.container}>
        {/* <Text style={styles.button}>SignIn</Text>
        <Text style={styles.button}>SignOut</Text> */}
        <TextInput style={styles.input} value={input} onChangeText={setInput} />
        <Text style={styles.input}>useState : {input}</Text>
    </View>        
    ) 
}