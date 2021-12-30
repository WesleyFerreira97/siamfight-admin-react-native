import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#1A1A2E',
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        paddingBottom: 20,
        fontWeight: '700',
    },
    titleSmall: {
        color: '#fff',
        fontSize: 15,
    },
    text: {
        color: '#fff',
    },
    input: {
        height: 45,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    inputSmall: {
        height: 25,
        borderRadius: 5,
    },
    button: {
        marginBottom: 20,
        marginTop: 20,
    },
    label: {
        color: '#fff',
        fontSize: 15,
    },
    checkbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorWrap: {
        marginTop: 10,
        marginBottom: 10,
    },
    error: {
        color: '#C70039',
        lineHeight: 22,
        fontSize: 15,
    }
});
