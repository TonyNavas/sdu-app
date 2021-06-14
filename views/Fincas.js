import React, {useEffect, useState} from 'react';
import {Text, FlatList,Image, View} from 'react-native';
import axios from 'axios';
import {Headline, List, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';

const Fincas = ({navigation}) => {

    //state de la app
    const [fincas, guardarFincas] = useState([]);
    const [consultarAPI, guardarConsultarAPI] = useState(true);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                const resultado = await axios.get('https://murmuring-wave-68820.herokuapp.com/api/fincas');
                guardarFincas(resultado.data.data)
                console.log(resultado.data.data)
                guardarConsultarAPI(false);
            } catch (error) {
                console.log(error)
            }
        }

        if(consultarAPI){
            obtenerClientesApi();
        }
    }, [consultarAPI]);
    return ( 
    <View style={globalStyles.contenedor} >
                        <Image
        style={{ width: 340, height: 300 }}
        source={{ uri: "https://abdkfincas.com/wp-content/uploads/2020/09/ABDK_Iconos_ADMINISTRACION-DE-FINCAS.png" }}
        />
        {/* <Button icon="plus-circle" onPress={() => navigation.navigate("NuevaFinca",{guardarConsultarAPI})}>Nueva finca</Button> */}
        <Headline  style={globalStyles.titulo}>{fincas.length > 0 ? "Fincas registradas": "Aun no hay fincas"}</Headline>
        <FlatList
            data={fincas}
            keyExtractor={cliente => (cliente.id).toString()}
            renderItem={({item}) => (
            <List.Item
                title={item.id_finca}
                description={item.nombre}
                onPress={() => navigation.navigate("DetallesFinca",{item, guardarConsultarAPI})}
            />
            )}
        />
        {/* <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() => navigation.navigate("NuevoCliente",{guardarConsultarAPI})}
        /> */}
    </View>
    );
}
export default Fincas;