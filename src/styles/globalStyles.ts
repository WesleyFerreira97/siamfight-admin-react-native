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
        fontSize: 16,
    },
    text: {
        color: '#fff',
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 7,
    },
    inputXl: {
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: '#1A1A2E',
        color: '#fff',
    },
    input: {
        height: 40,
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    inputSmall: {
        height: 25,
        borderRadius: 5,
    },
    inputTitle: {
        color: '#4ecca3',
        fontSize: 20,        
        marginTop: 15,
    },
    inputLabel: {
        fontSize: 17,
        color: '#fff',
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
    },
    qq: {
        color: '#3BBC92',
        fontWeight: '600',
        fontSize: 12,
        marginTop: 7,
        marginBottom: -10,
        marginLeft: 4,
    }
});
