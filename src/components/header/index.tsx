import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export function HeaderScreen(title: string) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
}

