import React from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';
import axios from 'axios';

const DetalleCreditoDetalle = ({navigation,route}) => {
    const {guardarConsultarAPI} = route.params;
    const {credito_id , descripcion_venta_credito , cliente, producto,precio,cantidad,total, id} = route.params.item;

    const eliminarContacto = async () => {
        const url = `http://192.168.0.107:8000/api/detalle-creditos${id}`;
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
        style={{ width: 340, height: 95 }}
        source={{ uri: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/193355274_872431680285895_5678119665918391602_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=l9vH52HPTlgAX9AjMJn&_nc_ht=scontent.fmga3-2.fna&oh=029db479a88b5ca94ca3b6107921a9a0&oe=60C9778A" }}
        />
            <Headline style={globalStyles.titulo}>{credito_id}</Headline>
            <Text style={globalStyles.titulo} >ID de finca:<Subheading style={globalStyles.titulo2}>{descripcion_venta_credito }</Subheading> </Text>
            <Text style={globalStyles.titulo} >Nombres:<Subheading style={globalStyles.titulo2}>{cliente}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Apellidos:<Subheading style={globalStyles.titulo2}>{producto}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Cédula:<Subheading style={globalStyles.titulo2}>{precio}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Teléfono:<Subheading style={globalStyles.titulo2}>{cantidad}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Comunidad:<Subheading style={globalStyles.titulo2}>{total}</Subheading> </Text>
        </View>
     );
}
export default DetalleCreditoDetalle;