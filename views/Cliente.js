import React, {useEffect, useState} from 'react';
import {Text, FlatList,Image, View} from 'react-native';
import axios from 'axios';
import {Headline, List, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';

const Cliente = ({navigation}) => {

    //state de la app
    const [fincas, guardarFincas] = useState([]);
    const [consultarAPI, guardarConsultarAPI] = useState(true);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                const resultado = await axios.get('http://192.168.0.107:8000/api/clientes');
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
        style={{ width: 340, height: 300}}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQw_GrVfTBaPK16x7RZGds1zy6054yMqIpm_O5OXhGIJrJeXcxRG2YjFK5K1A8TnMw40&usqp=CAU" }}
        />
        {/* <Button icon="plus-circle" onPress={() => navigation.navigate("NuevaFinca",{guardarConsultarAPI})}>Nueva finca</Button> */}
        <Headline  style={globalStyles.titulo}>{fincas.length > 0 ? "Clientes registrados": "Aun no hay clientes"}</Headline>
        <FlatList
            data={fincas}
            keyExtractor={cliente => (cliente.id).toString()}
            renderItem={({item}) => (
            <List.Item
                title={item.cedula}
                description={item.nombre_cliente}
                onPress={() => navigation.navigate("DetalleCliente",{item, guardarConsultarAPI})}
            />
            )}
        />
    </View>
    );
}
export default Cliente;