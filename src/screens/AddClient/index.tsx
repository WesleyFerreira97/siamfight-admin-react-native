import React from 'react';
import { Text, View, TextInput, Button, Alert } from "react-native";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

import { styles } from './style';

interface Values {
  name: string;
  naturalidade: string;
  nacionalidade: string;
}

export function AddClient() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      <Formik
      initialValues={{ 
        name: '',
        naturalidade: '', 
        nacionalidade: '', 
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

