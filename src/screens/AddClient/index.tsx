import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import { Formik, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
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
  valor: string;
}

const validation : any = Yup.object().shape({
    name: Yup.string().required("O campo Nome é obrigatório"),
    contact1: Yup.string().required("O campo Contato 1 é obrigatório"),
    valor: Yup.number().required("O campo Valor é obrigatório"),
});

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
        valor: '',
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cadastro de Cliente</Text>
            <Formik
                validationSchema={validation}
                initialValues={initialValues}
                onSubmit={ (values, {resetForm }) => {
                    console.log('onSubmit');
                    
                    addData('cliente', values);
                    resetForm();
                    navigation.navigate('Search' , { screen: 'SearchClient', params: { name: values.name }});
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, validateForm, touched  }) => (
                <ScrollView>
                <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Nome Completo ( Obrigatório )"
                    style={globalStyles.input}
                />
                <TextInput
                    keyboardType = 'numeric'
                    onChangeText={handleChange('contact1')}
                    onBlur={handleBlur('contact1')}
                    value={values.contact1}
                    placeholder="Contato 1 ( Obrigatório )"
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
                <TextInput
                    keyboardType = 'numeric'
                    onChangeText={handleChange('valor')}
                    onBlur={handleBlur('valor')}
                    value={values.valor}
                    placeholder="Valor pago"
                    style={globalStyles.input}
                />
                <DatePicker 
                    values={values.date}
                    setFieldValue={setFieldValue} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange}
                />

                <CheckBox 
                    value={values}
                    setFieldValue={setFieldValue} 
                />

                <View style={globalStyles.errorWrap}>
                    {console.log(errors)}
                    {errors.name && touched.name && <Text style={globalStyles.error}>{errors.name}</Text>}
                    {errors.contact1 && touched.contact1 && <Text style={globalStyles.error}>{errors.contact1}</Text>}
                    {errors.valor && touched.valor && <Text style={globalStyles.error}>{errors.valor}</Text>}
                </View>

                <TouchableOpacity >
                    <View style={globalStyles.button}>
                        <Button color="#C70039" onPress={handleSubmit} title="Cadastrar" />
                    </View>
                </TouchableOpacity>
                </ScrollView>
                
            )}

            </Formik>
        </View>
    )
}
