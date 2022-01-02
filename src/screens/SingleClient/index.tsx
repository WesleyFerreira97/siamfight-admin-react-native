import React, {useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert, Switch } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { globalStyles } from '../../styles/globalStyles';
import { getDocument, deleteClient, updateClient } from '../../services/firebaseFunctions';
import { HeaderScreen  } from '../../components/header';
import { Formik, Field } from 'formik';
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
    const [physicalActivity, setPhysicalActivity] = useState(false);
    const [statusClient, setStatusClient] = useState(false);
    const [professor, setProfessor] = useState("afonso");

    useEffect(() => {
        // Initial Value
        setPhysicalActivity(cliente.physicalActivity);  
        setStatusClient(cliente.statusClient);  
        setProfessor(cliente.professor);
        
    }, [cliente]);

    const togglePhysicalActivity = () => setPhysicalActivity(previousState => !previousState);
    const toggleStatusClient = () => setStatusClient(previousState => !previousState);

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
            <Text style={globalStyles.title}>Cliente {route.params.name} </Text>
            <Formik
                // validationSchema={validation}
                initialValues={cliente}
                onSubmit={ (values) => {
                    updateClientData(values);
            }} >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
                <ScrollView>
                <SfTextInput 
                    label={"Nome"}
                    placeholder="Nome"
                    value={values.name || cliente.name}
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
                 <SfTextInput 
                    label={"Contato 1"}
                    value={values.contact1 || cliente.contact1}
                    placeholder="Contato 1"
                    onChangeText={handleChange('contact1')}
                    onBlur={handleBlur('contact1')}
                    keyboardType = 'numeric'
                />
                <SfTextInput 
                    label={"Contato 2"}
                    value={values.contact2 || cliente.contact2}
                    placeholder="Contato 2"
                    onChangeText={handleChange('contact2')}
                    onBlur={handleBlur('contact2')}
                    keyboardType = 'numeric'
                />
                <SfTextInput 
                    label={"Peso"}
                    value={values.peso || cliente.peso}
                    placeholder="Peso"
                    onChangeText={handleChange('peso')}
                    onBlur={handleBlur('peso')}
                    keyboardType = 'numeric'
                />
                <SfTextInput 
                    label={"Objetivo"}
                    value={values.objetivo || cliente.objetivo}
                    placeholder="Objetivo"
                    onChangeText={handleChange('objetivo')}
                    onBlur={handleBlur('objetivo')}
                    multiline={true}
                />
                <SfTextInput 
                    label={"Valor Pago"}
                    value={values.valor || cliente.valor}
                    placeholder="Valor Pago (R$)"
                    onChangeText={handleChange('valor')}
                    onBlur={handleBlur('valor')}
                    keyboardType = 'numeric'
                />
                <View style={globalStyles.inputWrapper}>
                    <Text style={globalStyles.text}>Pratica atividade fisica?</Text>
                    <Switch
                        trackColor={{ false: "#fff", true: "#4ecca3" }}
                        thumbColor={physicalActivity ? "#3BBC92" : "#4ecca3"}
                        onValueChange={(e) => {togglePhysicalActivity(); setFieldValue('physicalActivity', e)}}
                        value={physicalActivity}
                    />
                </View>
                <View style={globalStyles.inputWrapper}>
                    <Text style={globalStyles.text}>Cliente Ativo? </Text>
                    <Switch
                        trackColor={{ false: "#fff", true: "#4ecca3" }}
                        thumbColor={statusClient ? "#3BBC92" : "#4ecca3"}
                        onValueChange={(e) => {toggleStatusClient(); setFieldValue('statusClient', e)}}
                        value={statusClient}
                    />
                </View>
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
                <Text style={globalStyles.inputTitle}>Professor</Text>
                <View style={globalStyles.inputWrapper}>
                    <Text style={globalStyles.inputLabel}>Wesley</Text>
                    <RadioButton
                        value="gilmar"
                        status={ professor === 'wesley' ? 'checked' : 'unchecked' }
                        onPress={() => {setProfessor('wesley'); setFieldValue('professor', "wesley")}}
                        color='#fff'
                        uncheckedColor='#4ecca3'
                    />
                </View>
                <View style={globalStyles.inputWrapper}>
                    <Text style={globalStyles.inputLabel}>Afonso</Text>
                    <RadioButton
                        value="gilmar"
                        status={ professor === 'afonso' ? 'checked' : 'unchecked' }
                        onPress={() => {setProfessor('afonso'); setFieldValue('professor', "afonso")}}
                        color='#fff'
                        uncheckedColor='#4ecca3'
                    />
                </View>
                <View style={globalStyles.inputWrapper}>
                    <Text style={globalStyles.inputLabel}>Gilmar</Text>
                    <RadioButton
                        value="gilmar"
                        status={ professor === 'gilmar' ? 'checked' : 'unchecked' }
                        onPress={() => {setProfessor('gilmar'); setFieldValue('professor', "gilmar")}}
                        color='#fff'
                        uncheckedColor='#4ecca3'
                    />
                    
                </View>
{console.log(cliente)}
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

