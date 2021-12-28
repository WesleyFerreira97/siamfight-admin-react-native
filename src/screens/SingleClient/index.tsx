import React, {useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { globalStyles } from '../../styles/globalStyles';
import { getDocument } from '../../services/firebaseFunctions';
import { HeaderScreen  } from '../../components/header';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DatePicker } from './../../components/DatePicker/index';
import { CheckBox } from '../../components/CheckBox/index';
import { styles } from './style';

const validation : any = Yup.object().shape({
    name: Yup.string().required("O campo Nome é obrigatório"),
    contact1: Yup.string().required("O campo Contato 1 é obrigatório"),
    valor: Yup.number().required("O campo Valor é obrigatório"),
    payDay: Yup.string().required("O campo Data de pagamento é obrigatório"),
});

export function SingleClient({ navigation, route}: any) {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [cliente, setCliente] = useState<any>({});

    useEffect( () => {
        getDocument('cliente', route.params.id).then(data => {
            setCliente(data);
        });
    }, [route.params.id]);
    
    
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cliente </Text>
            {console.log(cliente)}
            <Text style={globalStyles.title}>{route.params.name}</Text>
            <Formik
                validationSchema={validation}
                initialValues={cliente}
                onSubmit={ (values, {resetForm}) => {
                    // addData('cliente', values);
                    resetForm();
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
                 <ScrollView>
                <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={cliente.name}
                    placeholder="Nome"
                    left={<TextInput.Affix text="Nome :" />}
                    style={globalStyles.input}
                />
                {console.log(cliente.birthDate, 'BirthDateeee')}
                <DatePicker 
                    title="Data de Nascimento"
                    iconName="activity"
                    mode="date"
                    fieldId="birthDate"
                    value={values.birthDate}
                    setFieldValue={setFieldValue} 
                />
                <TextInput
                    keyboardType = 'numeric'
                    onChangeText={handleChange('contact1')}
                    onBlur={handleBlur('contact1')}
                    value={cliente.contact1}
                    placeholder="Contato 1 ( Obrigatório )"
                    left={<TextInput.Affix text="Contato 1 : " />}
                    style={globalStyles.input}
                />
                <TextInput
                    keyboardType = 'numeric'
                    onChangeText={handleChange('contact2')}
                    onBlur={handleBlur('contact2')}
                    value={cliente.contact2}
                    placeholder="Contato 2"
                    left={<TextInput.Affix text="Contato 2 : " />}
                    style={globalStyles.input}
                />
                <TextInput
                    keyboardType = 'numeric'
                    onChangeText={handleChange('peso')}
                    onBlur={handleBlur('peso')}
                    value={cliente.peso}
                    left={<TextInput.Affix text="Peso (kg): " />}
                    placeholder="Peso"
                    style={globalStyles.input}
                />
                <TextInput
                    onChangeText={handleChange('objetivo')}
                    onBlur={handleBlur('objetivo')}
                    value={cliente.objetivo}
                    placeholder="Objetivo"
                    left={<TextInput.Affix text="Objetivo : " />}
                    style={globalStyles.input}
                />
                <TextInput
                    keyboardType = 'numeric'
                    onChangeText={handleChange('valor')}
                    onBlur={handleBlur('valor')}
                    value={cliente.valor}
                    placeholder="Valor pago"
                    left={<TextInput.Affix text="Valor Pago : R$" />}
                    style={globalStyles.input}
                />
                {/* <DatePicker 
                    value={values}
                    setFieldValue={setFieldValue} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange}
                /> */}
                <DatePicker     
                    title="Data de Nascimento"
                    iconName="activity"
                    mode="date"
                    fieldId="birthDate"
                    value={values.birthDate}
                    setFieldValue={setFieldValue} 
                />
                <CheckBox 
                    values={values}
                    setFieldValue={setFieldValue} 
                />
                
                <View style={globalStyles.button}>
                    <Button color="#C70039" title="Confirmar Alterações" />
                </View>

                </ScrollView>
                )}
                </Formik>


            {/* <Text style={globalStyles.title}>Contato 1 : {route.params.contact1}</Text>
            <Text style={globalStyles.title}>Contato 2 : {route.params.contact2}</Text>
            <Text style={globalStyles.title}>Objetivo : {route.params.objective}</Text>
            <Text style={globalStyles.title}>Valor : {route.params.valor}</Text> */}

        </View>
    )
}


