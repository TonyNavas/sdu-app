import React from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';
import axios from 'axios';

const DetallesProductor = ({navigation,route}) => {
    const {guardarConsultarAPI} = route.params;
    const {id_productor , fincaid , nombres, apellidos,numero_cedula,numero_telefono,comunidad,municipio, id} = route.params.item;

    const mostrarInformacion = () =>{
        Alert.alert(
            '¿Deseas eliminar el cliente?',
            'Un cliente eliminado no se puede recuperar',
            [
                {text: 'Si, eliminar', onPress: () => eliminarContacto()},
                {text: 'Cancelar', style:'cancel'}
            ]
        )
    }
    const eliminarContacto = async () => {
        const url = `https://murmuring-wave-68820.herokuapp.com/api/productores${id}`;
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
            <Headline style={globalStyles.titulo}>{id_productor}</Headline>
            <Text style={globalStyles.titulo} >ID de finca:<Subheading style={globalStyles.titulo2}>{fincaid }</Subheading> </Text>
            <Text style={globalStyles.titulo} >Nombres:<Subheading style={globalStyles.titulo2}>{nombres}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Apellidos:<Subheading style={globalStyles.titulo2}>{apellidos}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Cédula:<Subheading style={globalStyles.titulo2}>{numero_cedula}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Teléfono:<Subheading style={globalStyles.titulo2}>{numero_telefono}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Comunidad:<Subheading style={globalStyles.titulo2}>{comunidad}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Municipio:<Subheading style={globalStyles.titulo2}>{municipio}</Subheading> </Text>

            {/* <Button mode="contained" icon="cancel" style={styles.boton}
            onPress={() => mostrarInformacion()} >
                Eliminar Productor
            </Button>
            <FAB
        icon="pencil"
        style={globalStyles.fab}
        onPress={() => navigation.navigate("NuevoCliente",{cliente:route.params.item,guardarConsultarAPI})}
        /> */}
        </View>
     );
}
export default DetallesProductor;