import { StyleSheet } from 'react-native';  


export const styles = StyleSheet.create({
    scrollList: {
        backgroundColor: 'black',
        paddingBottom: 200,
    },
    form: {
        flex: 1,
    },
    submitButton: {
        flex: 2,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 7,
        marginBottom: 7,
        borderRadius: 10,
        backgroundColor: '#16213E',
    },
    icon: {
        height: '100%',
        width: '18%',
        flex: 0,
        fontSize: 23,
        backgroundColor: '#C70039',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        // borderTopLeftRadius: 10,        
        padding: 15,
        color: '#fff',
    },
    userName: {
        alignSelf: 'center',
        paddingLeft: 13,
    },
    
    
});