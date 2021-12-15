import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, Button, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { db } from '../../services/firebaseconfig';
import { addDoc, collection, getFirestore, getDocs  } from "firebase/firestore/lite";
import { globalStyles } from './../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Feather';
interface SearchClient {
  navigation: any;
}

type Toutch = {
  onPress(): void
}

export function SearchClient({ navigation }: SearchClient) {
  const [clientes , setClientes] = useState<any[]>([]);
  useEffect(() => {
    
    async function tnc() {
      const citiesRef = collection(db, "cliente");
      const data = await getDocs(citiesRef);
      
      setClientes(data.docs.map((doc) => ({...doc.data(), id: doc.id })   ));
      }
  
      tnc();
  }, []); 

  const tocado = (data: object) => {
    navigation.navigate('Vencimentos', data)
  }

  return (
    <ScrollView>
    <View style={globalStyles.container}>
      <View style={styles.submitButton}>
        {/* <Button 
          title="Buscaar"
          onPress={() => navigation.navigate('Vencimentos')}
        /> */}
        
        
      </View>

      <View style={styles.form}>
        {clientes.map( (cliente) => {
                return (
                  <TouchableOpacity onPress={() => tocado(cliente)} key={cliente.id}>
                    
                    <View style={styles.listItem} >
                      <Icon name="user" style={styles.icon}/>
                      <Text style={{...globalStyles.titleSmall, ...styles.userName}}>{cliente.name}</Text>
                    </View>

                  </TouchableOpacity>
                )
            })}
      </View>

    </View> 
    </ScrollView>  
    ) 
}

