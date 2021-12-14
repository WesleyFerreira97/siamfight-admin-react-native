import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Alert, Image, FlatList } from "react-native";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { Checkbox } from 'react-native-paper';
import { styles } from './style';

import { db } from '../../services/firebaseconfig';
import { addDoc, collection, getFirestore, getDocs  } from "firebase/firestore/lite";
import firestore, { firebase } from '@react-native-firebase/firestore';
import "firebase/storage";
import { setDoc, doc } from '@firebase/firestore';

interface Values {
  name: string;
  naturalidade: string;
  nacionalidade: string;
}

export function AddClient() {
  const [task , setTask] = useState<any[]>([]);
  const [pratica, setPratica] = useState([]);

  
  useEffect(() => {
    
    async function tnc() {
      const citiesRef = collection(db, "cliente");
      const data = await getDocs(citiesRef);
 
      setTask(data.docs.map((doc) => ({...doc.data(), id: doc.id })   ));
      }
  
      tnc();
  }, []);

  useEffect(() => {
    const vtnc = async () => {
        try {
            const docRef = await addDoc(collection(db, "obrabo"), {
              first: "Wesley",
              middle: "Ferreira",
              last: "Costa",
              born: 1997
            });
          
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) { 
            // console.error("Error adding document: ", e);
          }
    }
    vtnc();
}, []);

  return (
    <View style={styles.container}>
      
      {console.log(task)}
      <Text style={styles.tnc}>
        {task.map( (user) => {
                      return (
                          <Text key={user.id}>{user.first}</Text>
                      )
                  })}
      </Text>

      <Text style={styles.title}>Cadastro de Cliente</Text>
      <Formik
      initialValues={{ 
        name: '',
        naturalidade: '', 
        nacionalidade: '', 
        contact1: '', 
        contact2: '', 
        peso: '', 
        objetivo: '', 
      }}
      onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Nome Completo"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange('naturalidade')}
              onBlur={handleBlur('naturalidade')}
              value={values.naturalidade}
              placeholder="Cidade"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange('nacionalidade')}
              onBlur={handleBlur('nacionalidade')}
              value={values.nacionalidade}
              placeholder="Nacionalidade"
              style={styles.input}
            />
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleChange('contact1')}
              onBlur={handleBlur('contact1')}
              value={values.contact1}
              placeholder="Contato 1"
              style={styles.input}
            />
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleChange('contact2')}
              onBlur={handleBlur('contact2')}
              value={values.contact2}
              placeholder="Contato 2"
              style={styles.input}
            />
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleChange('peso')}
              onBlur={handleBlur('peso')}
              value={values.peso}
              placeholder="Peso"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange('objetivo')}
              onBlur={handleBlur('objetivo')}
              value={values.objetivo}
              placeholder="Objetivo"
              style={styles.input}
            />
            <View style={styles.checkarea}>
              <Text style={styles.label}>Pratica Atividade Fisica:</Text>
              <Checkbox
                    status={pratica ? 'checked' : 'unchecked'}
                    onPress={() => {
                      // setPratica();
                    }}
                  />
            </View>
            <View style={styles.checkarea}>
              <Text style={styles.label}>Quantas refeições diarias :   </Text>
              <TextInput
                onChangeText={handleChange('refeicoes')}
                onBlur={handleBlur('refeicoes')}
                value={values.objetivo}
                style={styles.input}
              />
            </View>
            <View style={styles.button}>
              <Button color="#C70039" onPress={handleSubmit} title="Cadastrar" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}



// Nome - Text
// Nascimento - Date
// Contato - Int
// Contato 2  - Int 
// Tamanho - Int
// Peso - Int
// Objetivo - Text
// Pratica Atividade ? - Radio button 
// Refeições por dia - Checkbox

