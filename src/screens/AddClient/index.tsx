import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, ScrollView } from "react-native";
import { Formik } from 'formik';

import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import { Checkbox } from 'react-native-paper';
import { addData } from '../../services/firebaseFunctions';

interface MyValues  {
  name: string;
  naturalidade: string;
  nacionalidade: string;
  contact1: string;
  contact2: string;
  peso: string;
  objetivo: string;
}

export function AddClient() {
    
  const initialValues : MyValues = { 
      name: '',
      naturalidade: '', 
      nacionalidade: '', 
      contact1: '', 
      contact2: '', 
      peso: '', 
      objetivo: '', 
  };

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Cadastro de Cliente</Text>
        <Formik
            initialValues={initialValues}
            onSubmit={ (values) => {
                addData('cliente', values);
        }}
            >
            
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView>

            <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Nome Completo"
                style={globalStyles.input}
            />
            <TextInput
                onChangeText={handleChange('naturalidade')}
                onBlur={handleBlur('naturalidade')}
                value={values.naturalidade}
                placeholder="Cidade"
                style={globalStyles.input}
            />
            <TextInput
                onChangeText={handleChange('nacionalidade')}
                onBlur={handleBlur('nacionalidade')}
                value={values.nacionalidade}
                placeholder="Nacionalidade"
                style={globalStyles.input}
            />
            <TextInput
                keyboardType = 'numeric'
                onChangeText={handleChange('contact1')}
                onBlur={handleBlur('contact1')}
                value={values.contact1}
                placeholder="Contato 1"
                style={globalStyles.input}
            />
            <TextInput
                keyboardType = 'numeric'
                onChangeText={handleChange('contact2')}
                onBlur={handleBlur('contact2')}
                value={values.contact2}
                placeholder="Contato 2"
                style={globalStyles.input}
            />
            <TextInput
                keyboardType = 'numeric'
                onChangeText={handleChange('peso')}
                onBlur={handleBlur('peso')}
                value={values.peso}
                placeholder="Peso"
                style={globalStyles.input}
            />
            <TextInput
                onChangeText={handleChange('objetivo')}
                onBlur={handleBlur('objetivo')}
                value={values.objetivo}
                placeholder="Objetivo"
                style={globalStyles.input}
            />
            <View style={globalStyles.checkarea}>
                <Text style={globalStyles.label}>Pratica Atividade Fisica:</Text>
                <Checkbox
                    status={'das' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        // setPratica();
                    }}
                    />
            </View>
            <View style={globalStyles.checkarea}>
                <Text style={globalStyles.label}>Quantas refeições diarias :   </Text>
                <TextInput
                onChangeText={handleChange('refeicoes')}
                onBlur={handleBlur('refeicoes')}
                value={values.objetivo}
                style={globalStyles.input}
                />
            </View>
            <View style={globalStyles.button}>
                <Button color="#C70039" onPress={handleSubmit} title="Cadastrar" />
            </View>
            </ScrollView>
        )}
        </Formik>
    </View>
  )
}
