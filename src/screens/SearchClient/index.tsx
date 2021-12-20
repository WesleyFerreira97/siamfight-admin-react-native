import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from './style';
import { globalStyles } from './../../styles/globalStyles';
import { ListItem } from '../../components/ListItem/index';

import { db } from '../../services/firebaseconfig';
import { getData } from '../../services/firebaseFunctions';
import { collection, getDocs  } from "firebase/firestore/lite";


export function SearchClient({ navigation }: any) {
  const [search, setSearch] = useState('');
  const [allClients, setAllClients] = useState<any[]>([]);
  const [clientes , setClientes] = useState<any[]>([]);

  const onChangeSearch = (query : any) => setSearch(query);

  useEffect(() => {
      getData('cliente').then(data => { setAllClients(data as never) });
  }, []); 
 
  useEffect(() => {

    if(search === '') {
      return setClientes(allClients);
    }
    
    const searchClientes = clientes.filter( cliente => {
        if(cliente.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            return cliente;
        }
    });

    setClientes(searchClientes);
  }, [search]);

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
        <Text style={globalStyles.title}>{search}</Text>
        <FlatList 
          data={clientes}
          renderItem={({ item }) => <ListItem cliente={item} />}
          keyExtractor={(item) => item.id}
        />

    </View> 
    
    ) 
}


  




