import React, {useEffect, useState} from 'react';
import {Text, FlatList,Image, View} from 'react-native';
import axios from 'axios';
import {Headline, List, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';

const Credito = ({navigation}) => {


    //state de la app
    const [productores, guardarProductores] = useState([]);
    const [consultarAPI, guardarConsultarAPI] = useState(true);

    // OBTENER PRODUCTORES DESDE LA API
    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                const resultado = await axios.get('http://192.168.0.107:8000/api/creditos');
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
                <Text style={globalStyles.titulo2}>Ver los detalles de credito</Text>
        <Button mode="contained" icon="equal" style={globalStyles.boton}
                onPress={() => navigation.navigate("DetalleCredito")}>
                Ver detalles de creditos
            </Button>
        {/* <Button icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente",{guardarConsultarAPI})}>Nuevo productor</Button> */}
        <Headline  style={globalStyles.titulo}>{productores.length > 0 ? "Creditos": "Aun no hay creditos"}</Headline>
        <FlatList
            data={productores}
            keyExtractor={cliente => (cliente.id).toString()}
            renderItem={({item}) => (
            <List.Item
                title={item.id_credito}
                description={item.fecha_credito}
                onPress={() => navigation.navigate("VerCreditos",{item, guardarConsultarAPI})}
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
export default Credito;