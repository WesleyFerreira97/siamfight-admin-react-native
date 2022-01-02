import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import { styles } from './style';
import { globalStyles } from '../../styles/globalStyles';
import { addData } from '../../services/firebaseFunctions';
import { DatePicker } from './../../components/DatePicker/index';
import { CheckBox } from '../../components/CheckBox/index';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { Formik, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { SfTextInput } from './../../components/TextInput/index';

interface MyValues  {
  name: string;
  contact1: string;
  contact2: string;
  peso: string;
  objetivo: string;
  payDay: any;
  prefTime: any;
  birthDate: any;
  physicalActivity: boolean;
  valor: string;
  statusClient: boolean;
}

const validation : any = Yup.object().shape({
    // name: Yup.string().required("O campo Nome é obrigatório"),
    // contact1: Yup.string().required("O campo Contato 1 é obrigatório"),
    // valor: Yup.number().required("O campo Valor é obrigatório"),
    // payDay: Yup.string().required("O campo Data de pagamento é obrigatório"),
});

export function AddClient() {
    const navigation : any = useNavigation();
    const initialValues : MyValues = { 
        name: '',
        contact1: '', 
        contact2: '', 
        peso: '', 
        objetivo: '', 
        payDay: new Date(),
        prefTime: new Date('August 19, 2002 05:00:00'),
        birthDate: new Date('August 19, 2002 05:00:00'),
        physicalActivity: false,
        valor: '',
        statusClient: true,
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cadastro de Cliente</Text>
            <Formik
                validationSchema={validation}
                initialValues={initialValues}
                onSubmit={ (values, {resetForm }) => {
                    addData('cliente', values);
                    resetForm();
                    navigation.navigate('Search' , { screen: 'SearchClient', params: { addNotification: "Cliente Adicionado !" }});
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched  }) => (
                <ScrollView>
                {console.log("ADD Client")}
                <SfTextInput 
                    label={"Nome"}
                    placeholder="Nome"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                />
                <DatePicker 
                    title="Data de Nascimento"
                    iconName="activity"
                    mode="date"
                    fieldId="birthDate"
                    value={values.birthDate}
                    setFieldValue={setFieldValue} 
                />
                <SfTextInput 
                    label={"Contato 1"}
                    value={values.contact1 }
                    placeholder="Contato 1 ( Obrigatório )"
                    onChangeText={handleChange('contact1')}
                    onBlur={handleBlur('contact1')}
                    keyboardType = 'numeric'
                />
                <SfTextInput 
                    label={"Contato 2"}
                    value={values.contact2 }
                    placeholder="Contato 2"
                    onChangeText={handleChange('contact2')}
                    onBlur={handleBlur('contact2')}
                    keyboardType = 'numeric'
                />
                <SfTextInput 
                    label={"Peso (Kg)"}
                    value={values.peso }
                    placeholder="Peso"
                    onChangeText={handleChange('peso')}
                    onBlur={handleBlur('peso')}
                    keyboardType = 'numeric'
                />
                <SfTextInput 
                    label={"Objetivo"}
                    value={values.objetivo}
                    placeholder="Objetivo"
                    onChangeText={handleChange('objetivo')}
                    onBlur={handleBlur('objetivo')}
                    multiline={true}
                />
                <SfTextInput 
                    label={"Valor Pago"}
                    value={values.valor}
                    placeholder="Valor Pago (R$)"
                    onChangeText={handleChange('valor')}
                    onBlur={handleBlur('valor')}
                    keyboardType = 'numeric'
                />
                <DatePicker 
                    title="Data de Pagamento"
                    iconName="calendar"
                    mode="date"
                    fieldId="payDay"
                    value={values.payDay}
                    setFieldValue={setFieldValue} 
                />
                <DatePicker 
                    title="Horário de preferência"
                    iconName="clock"
                    mode="time"
                    fieldId="prefTime"
                    value={values.prefTime}
                    setFieldValue={setFieldValue} 
                /> 
                <CheckBox 
                    title="Pratica Atividade Fisica"
                    fieldId="physicalActivity"
                    value={values.physicalActivity}
                    setFieldValue={setFieldValue} 
                />  
                 <CheckBox
                    title="Cliente Ativo?" 
                    fieldId="statusClient"
                    value={values.statusClient}
                    setFieldValue={setFieldValue} 
                /> 
                <View style={globalStyles.errorWrap}>
                    {errors.name && touched.name && <Text style={globalStyles.error}>{errors.name}</Text>}
                    {errors.contact1 && touched.contact1 && <Text style={globalStyles.error}>{errors.contact1}</Text>}
                    {errors.valor && touched.valor && <Text style={globalStyles.error}>{errors.valor}</Text>}
                    {errors.payDay && touched.payDay && <Text style={globalStyles.error}>{errors.payDay}</Text>}
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
