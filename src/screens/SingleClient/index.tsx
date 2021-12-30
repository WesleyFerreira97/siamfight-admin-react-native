import React, {useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { globalStyles } from '../../styles/globalStyles';
import { getDocument, deleteClient, updateClient } from '../../services/firebaseFunctions';
import { HeaderScreen  } from '../../components/header';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DatePicker } from './../../components/DatePicker/index';
import { CheckBox } from '../../components/CheckBox/index';
import { styles } from './style';
import { SfTextInput } from './../../components/TextInput/index';
import { string } from 'yup/lib/locale';

const validation : any = Yup.object().shape({
    name: Yup.string().required("O campo Nome é obrigatório"),
    contact1: Yup.string().required("O campo Contato 1 é obrigatório"),
    valor: Yup.number().required("O campo Valor é obrigatório"),
    payDay: Yup.string().required("O campo Data de pagamento é obrigatório"),
});

export function SingleClient({ navigation, route}: any) {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [cliente, setCliente] = useState<any>({});

    const deleteClientModal = () =>
        Alert.alert(
        "Deletar REGISTRO de Cliente",
        "Você deseja realmente excluir este Cliente?. Esta ação não poderá ser desfeita!",
        [
            { text: "Excluir", onPress: () => deleteCurrentClient('cliente', route.params.id) },
            { text: "", onPress: () => deleteCurrentClient('cliente', route.params.id) },
            {
            text: "Cancelar",
            style: "cancel"
            },
        ],
        {cancelable: true}
    );

    useEffect( () => {
        async function getClient() {
            await getDocument('cliente', route.params.id).then(data => {
                setCliente(data);
            });
        }
        getClient();
        
    }, [route.params.id]);

    async function deleteCurrentClient(collectionName: string, id: string) {
        await deleteClient(collectionName, id).then(() => {
            navigation.navigate('Search' , { screen: 'SearchClient', params: { deleteNotification: "Cliente Deletado !" }});
        });
    }

    async function updateClientData (updateData: object) {
        updateClient('cliente', route.params.id, updateData).then(() => {
            navigation.navigate('Search' , { screen: 'SearchClient', params: { updateNotification: "Cliente Atualizado !" }});
        });
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cliente </Text>
            <Text style={globalStyles.title}>{route.params.name}</Text>
            <Formik
                // validationSchema={validation}
                initialValues={cliente}
                onSubmit={ (values) => {
                    console.log('handle submit', values);
                    
                    updateClientData(values);
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
                <ScrollView>
                <SfTextInput 
                    label={"Nome"}
                    value={values.name || cliente.name}
                    placeholder="Nome"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    
                />
                <DatePicker 
                    title="Data de Nascimento"
                    iconName="activity"
                    mode="date"
                    fieldId="birthDate"
                    value={route.params.birthDate}
                    setFieldValue={setFieldValue} 
                />
                <TextInput
                    label={"Contato 1"}
                    mode="outlined"
                    value={values.contact1 || cliente.contact1}
                    activeOutlineColor='#3BBC92'
                    underlineColor='#fff'
                    selectionColor='#000'
                    dense={true}
                    keyboardType = 'numeric'
                    onChangeText={handleChange('contact1')}
                    onBlur={handleBlur('contact1')}
                    placeholder="Contato 1 ( Obrigatório )"
                    style={globalStyles.inputXl}
                    theme={{
                        // roundness: 10,
                        colors: {
                            primary:'green',
                            text: '#fff',
                            placeholder: '#fff',
                        }
                      }}
                />
                <Text style={globalStyles.qq}>Contato 2</Text>
                <TextInput
                    mode="outlined"
                    keyboardType = 'numeric'
                    onChangeText={handleChange('contact2')}
                    onBlur={handleBlur('contact2')}
                    defaultValue={cliente.contact2}
                    placeholder="Contato 2"
                    style={globalStyles.input}
                />
                <Text style={globalStyles.qq}>Peso</Text>
                <TextInput
                    mode="outlined"
                    keyboardType = 'numeric'
                    onChangeText={handleChange('peso')}
                    onBlur={handleBlur('peso')}
                    defaultValue={cliente.peso}
                    left={<TextInput.Affix text="(kg): " />}
                    placeholder="Peso"
                    style={globalStyles.input}
                />
                <Text style={globalStyles.qq}>Objetivo</Text>
                <TextInput
                    mode="outlined"
                    onChangeText={handleChange('objetivo')}
                    onBlur={handleBlur('objetivo')}
                    defaultValue={cliente.objetivo}
                    placeholder="Objetivo"
                    left={<TextInput.Affix text="Objetivo : " />}
                    style={globalStyles.input}
                />
                <Text style={globalStyles.qq}>Valor</Text>
                <TextInput
                    mode="outlined"
                    keyboardType = 'numeric'
                    onChangeText={handleChange('valor')}
                    onBlur={handleBlur('valor')}
                    defaultValue={cliente.valor}
                    placeholder="Valor pago"
                    left={<TextInput.Affix text="Valor Pago : R$" />}
                    style={globalStyles.input}
                />
                <DatePicker 
                    title="Data de Pagamento"
                    iconName="calendar"
                    mode="date"
                    fieldId="payDay"
                    value={route.params.payDay}
                    setFieldValue={setFieldValue} 
                />
                <DatePicker 
                    title="Horário de preferência"
                    iconName="clock"
                    mode="time"
                    fieldId="prefTime"
                    value={route.params.prefTime}
                    setFieldValue={setFieldValue} 
                />
                <CheckBox 
                    title="Pratica Atividade Fisica"
                    fieldId="physicalActivity"
                    value={cliente.physicalActivity}
                    setFieldValue={setFieldValue} 
                />
                <CheckBox
                    title="Cliente Ativo?" 
                    fieldId="statusClient"
                    value={cliente.statusClient}
                    setFieldValue={setFieldValue} 
                />
                
                <View style={globalStyles.button}>
                    <Button color="#3BBC92" title="Confirmar Alterações" onPress={handleSubmit}/>
                </View>
                
                <Button color="#C70039" title={"Deletar Cliente"} onPress={deleteClientModal} />
                
                </ScrollView>
                )}
                </Formik>

            
        </View>
    )
}


