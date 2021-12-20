import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from './style';
import { globalStyles } from './../../styles/globalStyles';
import { ListItem } from './../../components/ListItem/index';

import { db } from '../../services/firebaseconfig';
import { collection, getDocs  } from "firebase/firestore/lite";


export function SearchClient({ navigation }: any) {
  const [clientes , setClientes] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query : any) => setSearchQuery(query);

  useEffect(() => {
    
    async function getClients() {
      const citiesRef = collection(db, "cliente");
      const data = await getDocs(citiesRef);
      
      setClientes(data.docs.map((doc) => ({...doc.data(), id: doc.id })   ));
      }
  
      getClients();
  }, []); 


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Todos Clientes</Text>
        <View style={styles.searchBar}>
          <Searchbar
            placeholder="Procurar Cliente"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
 
        <FlatList 
          data={clientes}
          renderItem={({ item }) => <ListItem cliente={item} />}
          keyExtractor={(item) => item.id}
        />

    </View> 
    
    ) 
}


  




