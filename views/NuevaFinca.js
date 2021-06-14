import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform, ScrollView} from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import globalStyles from '../Styles/global';
import axios from 'axios';

const NuevaFinca = ({navigation, route}) => {

    const {guardarConsultarAPI} = route.params; 

    //Campos del formulario con useState
    //campos de string vacios
    const [id_finca,guardarID] = useState(''); 
    const [nombre,guardarNombre] = useState(''); 
    const [legalidad,guardarLegalidad] = useState(''); 
    const [comunidad,guardarComunidad] = useState(''); 
    const [municipio,guardarMunicipio] = useState(''); 
    const [departamento,guardarDepartamento] = useState(''); 
    const [pais,guardarPais] = useState(''); 
    const [disponibilidad_energia,guardarEnergia] = useState(''); 
    const [disponibilidad_agua,guardarAgua] = useState(''); 
    const [alerta,guardarAlerta] = useState(false); 

    // detectar si estamos editando o no

    useEffect(() => {
        if(route.params.cliente){
            
            const {id_finca, nombre, legalidad, comunidad,municipio,departamento,pais,disponibilidad_energia,disponibilidad_agua, id}= route.params.cliente;
            
            guardarID(id_finca);
            guardarNombre(nombre);
            guardarLegalidad(legalidad);
            guardarComunidad(comunidad);
            guardarMunicipio(municipio);
            guardarDepartamento(departamento);
            guardarPais(pais);
            guardarEnergia(disponibilidad_energia);
            guardarAgua(disponibilidad_agua);
        }
    }, []);

    //Guardar el cliente en la base de datos
    const guardarCliente = async () => {
        //validar si los campos estan vacios
        if(id_finca === '' || nombre ==='' || legalidad ==='' || comunidad === '' || municipio === '' || departamento === '' || pais === '' || disponibilidad_energia === '' || disponibilidad_agua === '')
        {
            guardarAlerta(true)
            return;
        }
        //Generar el cliente
        const  cliente = {id_finca, nombre, legalidad, comunidad, municipio, departamento, pais, disponibilidad_energia, disponibilidad_agua,id}
        console.log(cliente)
        
        // si estamos editando o creando un nuevo cliente

        if(route.params.cliente){

            const {id} = route.params.cliente;
            cliente.id = id;
            const url = `https://murmuring-wave-68820.herokuapp.com/api/fincas${id}`;

            try {
                await axios.put(url, cliente)
            } catch (error) {
                console.log(erro)
            }

        }else{
         //Guardar el cliente en la API 
        try {
            if(Platform.OS == 'ios'){
             //para ios
                await axios.post('https://murmuring-wave-68820.herokuapp.com/api/fincas', cliente)
            }else{
            //para android
            await axios.post('https://murmuring-wave-68820.herokuapp.com/api/fincas', cliente)
            }
        } catch (error) {
            console.log(error)
        }
        }
        //redireccionar
        navigation.navigate('Inicio');
        //limpiar el formulario
        guardarID('')
        guardarLegalidad('')
        guardarComunidad('')
        guardarMunicipio('')
        guardarDepartamento('')
        guardarPais('')
        guardarEnergia('')
        guardarAgua('')

        //cambiar a true
        guardarConsultarAPI(true);
    }

    return ( 
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
<ScrollView>
        <TextInput
            label="ID de la finca"
            placeholder="Finca-001"
            onChangeText={ texto => guardarID(texto)}
            value={id_finca}
            style={styles.input}
        />
        <TextInput
            label="Nombre de la finca"
            placeholder="Finca Navas"
            onChangeText={ texto => guardarNombre(texto)}
            value={nombre}
            style={styles.input}
        />
        <TextInput
            label="Tipo de legalida"
            placeholder="Escritura"
            onChangeText={ texto => guardarLegalidad(texto)}
            value={legalidad}
            style={styles.input}
        />
            <TextInput
            label="Comunidad"
            placeholder="Comunidad donde se ubica la finca"
            value={comunidad}
            onChangeText={ texto => guardarComunidad(texto)}
            style={styles.input}
        />
            <TextInput
            label="Municipio"
            placeholder="Municipio donde esta la finca"
            value={municipio}
            onChangeText={ texto => guardarMunicipio(texto)}
            style={styles.input}
        />
            <TextInput
            label="Departamento"
            placeholder="Deparatamento..."
            value={departamento}
            onChangeText={ texto => guardarDepartamento(texto)}
            style={styles.input}
        />
                    <TextInput
            label="Pais"
            placeholder="Pais donde esta la finca"
            value={pais}
            onChangeText={ texto => guardarPais(texto)}
            style={styles.input}
        />
                    <TextInput
            label="Energia"
            placeholder="Si o No"
            value={disponibilidad_energia}
            onChangeText={ texto => guardarEnergia(texto)}
            style={styles.input}
        />
                    <TextInput
            label="Agua"
            placeholder="Si o No"
            value={disponibilidad_agua}
            onChangeText={ texto => guardarAgua(texto)}
            style={styles.input}
        />
        <Button icon="pencil-circle" mode="contained" onPress={() => guardarCliente()}>
            Guardar Cliente
        </Button>
            <Portal>
                <Dialog
                visible={alerta}
                onDismiss={ () => guardarAlerta(false)}
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                            Todos los campos son obligatorios
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={ () => guardarAlerta(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            </ScrollView>
        </View>
        
        );

}
const styles = StyleSheet.create({
    input:{
        marginBottom:20,
        backgroundColor:'transparent'
    }
})
export default NuevaFinca;