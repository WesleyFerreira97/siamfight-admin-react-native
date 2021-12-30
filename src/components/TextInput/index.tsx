import React from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from './style';

export function SfTextInput(props: any) {
    return (
        <TextInput
        {...props}
        style={styles.input}
        activeOutlineColor='#3BBC92'
        underlineColor='#fff'
        selectionColor='#000'
        dense={true}
        mode="outlined"
        theme={{
            // roundness: 10,
            colors: {
                primary:'green',
                text: '#fff',
                placeholder: '#fff',
            }
          }}
    />
    );
}



