import React from 'react';
import {View, StyleSheet,Alert, Image} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';
import axios from 'axios';


const DetalleCliente = ({navigation,route}) => {
    const {guardarConsultarAPI} = route.params;
    const {cedula, nombre_cliente, apellido_cliente, direccion,telefono,id} = route.params.item;

    const eliminarContacto = async () => {
        const url = `https://murmuring-wave-68820.herokuapp.com/api/fincas${id}`;
        try {
            // console.log(url)
            await axios.delete(url);
        } catch (error) {
            console.log(error)
        }
        //Redirecionar
        navigation.navigate('Fincas')
        //volver a consultar la api
        guardarConsultarAPI(true);
    }
    return ( 
        <View style={globalStyles.contenedor}>
                            <Image
        style={{ width: 340, height: 90 }}
        source={{ uri: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/193355274_872431680285895_5678119665918391602_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=l9vH52HPTlgAX9AjMJn&_nc_ht=scontent.fmga3-2.fna&oh=029db479a88b5ca94ca3b6107921a9a0&oe=60C9778A" }}
        />
            <Headline style={globalStyles.titulo}>{cedula}</Headline>
            <Text style={globalStyles.titulo} >Cedula del cliente:<Subheading style={globalStyles.titulo2}>{nombre_cliente}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Nombre del cliente:<Subheading style={globalStyles.titulo2}>{apellido_cliente}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Direccion:<Subheading style={globalStyles.titulo2}>{direccion}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Teléfono:<Subheading style={globalStyles.titulo2}>{telefono}</Subheading> </Text>
            
        </View>
     );
}
export default DetalleCliente;