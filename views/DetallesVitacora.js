import React from 'react';
import {View, StyleSheet,Alert, Image} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';
import axios from 'axios';

const DetallesVitacora = ({navigation,route}) => {
    const {guardarConsultarAPI} = route.params;
    const {id_vitacora  , actividad , objetivo, temas_abordados,dificultades,soluciones,recomendaciones,fecha,siguiente_visita,usuario_id ,productorid , id} = route.params.item;

    const mostrarInformacion = () =>{
        Alert.alert(
            '¿Deseas la vitacora?',
            'Una vitacora eliminada no se puede recuperar',
            [
                {text: 'Si, eliminar', onPress: () => eliminarBitacora()},
                {text: 'Cancelar', style:'cancel'}
            ]
        )
    }
    const eliminarBitacora = async () => {
        const url = `https://murmuring-wave-68820.herokuapp.com/api/vitacoras${id}`;
        try {
            // console.log(url)
            await axios.delete(url);
        } catch (error) {
            console.log(error)
        }
        //Redirecionar
        navigation.navigate('Vitacoras')
        //volver a consultar la api
        guardarConsultarAPI(true);
    }
    return ( 
        <View style={globalStyles.contenedor}>
        <Image
        style={{ width: 340, height: 95 }}
        source={{ uri: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/193355274_872431680285895_5678119665918391602_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=l9vH52HPTlgAX9AjMJn&_nc_ht=scontent.fmga3-2.fna&oh=029db479a88b5ca94ca3b6107921a9a0&oe=60C9778A" }}
        />
            <Headline style={globalStyles.titulo}>{id_vitacora }</Headline>
            <Text style={globalStyles.titulo} >Actividad:<Subheading style={globalStyles.titulo2}>{actividad }</Subheading> </Text>
            <Text style={globalStyles.titulo} >Objetivo:<Subheading style={globalStyles.titulo2}>{objetivo}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Temas:<Subheading style={globalStyles.titulo2}>{temas_abordados}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Dificultades:<Subheading style={globalStyles.titulo2}>{dificultades}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Soluciones:<Subheading style={globalStyles.titulo2}>{soluciones}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Recomendaciones:<Subheading style={globalStyles.titulo2}>{recomendaciones}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Fecha:<Subheading style={globalStyles.titulo2}>{fecha}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Siguiente visita:<Subheading style={globalStyles.titulo2}>{siguiente_visita	}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Productor:<Subheading style={globalStyles.titulo2}>{productorid}</Subheading> </Text>
            <Text style={globalStyles.titulo} >Técnico:<Subheading style={globalStyles.titulo2}>{usuario_id }</Subheading> </Text>

            {/* <Button mode="contained" icon="cancel" style={styles.boton}
            onPress={() => mostrarInformacion()} >
                Eliminar bitácora
            </Button>
            <FAB
        icon="pencil"
        style={globalStyles.fab}
        onPress={() => navigation.navigate("NuevoCliente",{cliente:route.params.item,guardarConsultarAPI})}
        /> */}
        </View>
     );
}
export default DetallesVitacora;