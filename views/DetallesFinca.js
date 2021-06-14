import React from 'react';
import {View, StyleSheet,Alert, Image} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';
import axios from 'axios';


const DetallesFinca = ({navigation,route}) => {
    const {guardarConsultarAPI} = route.params;
    const {id_finca, nombre, legalidad, comunidad,municipio,departamento,pais,disponibilidad_energia,disponibilidad_agua, id} = route.params.item;

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
            <Headline style={globalStyles.titulo}>{id_finca}</Headline>
            <Text style={globalStyles.titulo} >Nombre de finca:<Subheading style={globalStyles.titulo2}>{nombre}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Tipo de legalidad:<Subheading style={globalStyles.titulo2}>{legalidad}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Comunidad:<Subheading style={globalStyles.titulo2}>{comunidad}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Municipio:<Subheading style={globalStyles.titulo2}>{municipio}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Departamento:<Subheading style={globalStyles.titulo2}>{departamento}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Pais:<Subheading style={globalStyles.titulo2}>{pais}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Acceso a energia:<Subheading style={globalStyles.titulo2}>{disponibilidad_energia}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Acceso a agua:<Subheading style={globalStyles.titulo2}>{disponibilidad_agua}</Subheading> </Text>

            {/* <Button mode="contained" icon="cancel" style={globalStyles.boton2}
            onPress={() => mostrarInformacion()} >
                Eliminar Finca
            </Button> */}
            {/* <FAB
        icon="pencil"
        style={globalStyles.fab}
        onPress={() => navigation.navigate("NuevoCliente",{cliente:route.params.item,guardarConsultarAPI})}
        /> */}
        </View>
     );
}
export default DetallesFinca;