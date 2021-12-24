import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { styles } from './style';

export function SectionInfox(propTeste: string) {
    return (
        <View style={styles.container}>
            <Text>Nome da tela : {propTeste}</Text>
        </View>
    );
}