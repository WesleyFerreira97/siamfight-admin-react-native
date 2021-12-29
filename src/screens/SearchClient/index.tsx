import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native';
import { Searchbar, Snackbar } from 'react-native-paper';
import { styles } from './style';
import { globalStyles } from './../../styles/globalStyles';
import { ListItem } from '../../components/ListItem/index';
import { getData } from '../../services/firebaseFunctions';

export function SearchClient({ navigation, route }: any) {
  const [search, setSearch] = useState('');
  const [allClients, setAllClients] = useState<any[]>([]);
  const [clientes , setClientes] = useState<any[]>([]);
  const [notificationMessage, setNotificationMessage] = useState('');

  const onChangeSearch = (query: any) => setSearch(query);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const onToggleSnackBar = () => setSnackBarVisible(!snackBarVisible);
  const onDismissSnackBar = () => setSnackBarVisible(false);

  const listAsc = (list: any[]) => {
    let newList : any = [...list];

    newList.sort((firstClient: any, secondClient: any) => firstClient.name.localeCompare(secondClient.name))
    setClientes(newList);
  }
    
  useEffect(() => {
    if(route.params?.addNotification) {
      setNotificationMessage(route.params.addNotification);
      onToggleSnackBar();
    }
    if(route.params?.deleteNotification) {
      setNotificationMessage(route.params.deleteNotification);
      onToggleSnackBar();
    }

    getData('cliente').then(data => { setAllClients(data as never) });
  }, [route.params]);

  useEffect(() => {
    if(search === '') {
      return listAsc(allClients);
    }

    const searchClientes = clientes.filter( cliente => {
        if(cliente.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            return cliente;
        }
    });
    
    listAsc(searchClientes);
  }, [allClients, search]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Todos Clientes</Text>
        <View style={styles.searchBar}>
          <Searchbar
            placeholder="Procurar Cliente"
            onChangeText={onChangeSearch}
            value={search}
          />
        </View>
        <FlatList 
          data={clientes}
          renderItem={({ item }) => <ListItem cliente={item} />}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.snackWrap}>
          <Snackbar
            visible={snackBarVisible}
            onDismiss={onDismissSnackBar}
            duration={3000}
            action={{
            label: 'Fechar',
            }}
            style={ styles.snackBar }
            >
              <Text style={styles.snackBarText}>{notificationMessage}</Text>
          </Snackbar>
        </View>
    </View> 
    ) 
}


  



