import { StyleSheet } from 'react-native';  


export const styles = StyleSheet.create({
    scrollList: {
        // paddingBottom: 1,
    },
    form: {
        flex: 1,
    },
    searchBar: {
        paddingTop: 10,
        paddingBottom: 10,

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