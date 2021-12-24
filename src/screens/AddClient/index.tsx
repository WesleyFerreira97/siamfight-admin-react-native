import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView } from "react-native";
import { Formik } from 'formik';

import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import { addData } from '../../services/firebaseFunctions';
import { DatePicker } from './../../components/DatePicker/index';
import { CheckBox } from '../../components/CheckBox/index';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

interface MyValues  {
  name: string;
  contact1: string;
  contact2: string;
  peso: string;
  objetivo: string;
  date: any;
  physicalActivity: boolean;
}

export function AddClient() {
    const navigation : any = useNavigation();
    const initialValues : MyValues = { 
        name: '',
        contact1: '', 
        contact2: '', 
        peso: '', 
        objetivo: '', 
        date: '2020-01-01',
        physicalActivity: false,
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cadastro de Cliente</Text>
            <Formik
                initialValues={initialValues}
                onSubmit={ (values, {resetForm}) => {
                    addData('Testea', values);
                    resetForm();
                    navigation.navigate('Search' , { screen: 'SearchClient', params: { name: values.name }});
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, resetForm }) => (
                <ScrollView>
                <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Nome Completo"
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
                <DatePicker 
                    values={values}
                    setFieldValue={setFieldValue} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange}
                />
                <CheckBox 
                    values={values}
                    setFieldValue={setFieldValue} 
                />

                <View style={globalStyles.button}>
                    <Button color="#C70039" onPress={handleSubmit} title="Cadastrar" />
                </View>

                </ScrollView>
            )}
            </Formik>
        </View>
    )
}
