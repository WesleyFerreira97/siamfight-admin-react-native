import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';


export const styles = StyleSheet.create({
    scrollList: {
        // paddingBottom: 1,
    },
    listWrap: {
        flex: 1,
    },
    listItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7,
        marginBottom: 7,
        borderRadius: 10,
        backgroundColor: '#16213E',
    },
    listInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 25,
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
        paddingLeft: 13,
        paddingBottom: 5,
    },
    infoTitle: {
        fontSize: 12,
        color: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 15,
    },
    dateWrap: {
        paddingLeft: 13,
        paddingBottom: 5,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    dateWrap2: {
        flexDirection: 'row',
    }
    
})