import React, {useEffect, useState} from 'react';
import {Text, FlatList,Image, View} from 'react-native';
import axios from 'axios';
import {Headline, List, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';

const CreditoDetalle = ({navigation}) => {

    // DESPUES DE CREDITO DETALLE

    //state de la app
    const [productores, guardarProductores] = useState([]);
    const [consultarAPI, guardarConsultarAPI] = useState(true);

    // OBTENER PRODUCTORES DESDE LA API
    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                const resultado = await axios.get('http://192.168.0.107:8000/api/detalle-creditos');
                guardarProductores(resultado.data.data)
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
        style={{ width: 340, height: 250 }}
        source={{ uri: "https://st2.depositphotos.com/4410397/7935/v/950/depositphotos_79358180-stock-illustration-farmer-icon.jpg" }}
        />
        {/* <Button icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente",{guardarConsultarAPI})}>Nuevo productor</Button> */}
        <Headline  style={globalStyles.titulo}>{productores.length > 0 ? "Detalles credito": "Aun no hay "}</Headline>
        <FlatList
            data={productores}
            keyExtractor={cliente => (cliente.id).toString()}
            renderItem={({item}) => (
            <List.Item
                title={item.credito_id}
                description={item.descripcion_venta_credito}
                onPress={() => navigation.navigate("DetalleCreditoDetalle",{item, guardarConsultarAPI})}
            />
            )}
        />
    </View>
    );
}
export default CreditoDetalle;