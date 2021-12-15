import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#1A1A2E',
        padding: 20,
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
        height: 40,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 7,
    },
    button: {
        marginBottom: 10,
        marginTop: 10,
    },
    label: {
        color: '#fff',
    },
    checkarea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
