import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, Image} from 'react-native';
import axios from 'axios';
import {Headline, List, Button, FAB} from 'react-native-paper';
import globalStyles from '../Styles/global';

const Vitacoras = ({navigation}) => {


    //state de la app
    const [bitácoras, guardarBitacoras] = useState([]);
    const [consultarAPI, guardarConsultarAPI] = useState(true);

    useEffect(() => {
        const obtenerBitacorasApi = async () => {
            try {
                const resultado = await axios.get('https://murmuring-wave-68820.herokuapp.com/api/vitacoras');
                guardarBitacoras(resultado.data.data)
                console.log(resultado.data.data)
                guardarConsultarAPI(false);
            } catch (error) {
                console.log(error)
            }
        }
        if(consultarAPI){
            obtenerBitacorasApi();
        }
    }, [consultarAPI]);
    return ( 
    <View style={globalStyles.contenedor} >
                                    <Image
        style={{ width: 340, height: 290 }}
        source={{ uri: "https://4.bp.blogspot.com/-9dQa8S7UvBY/WxQkNYx2cuI/AAAAAAAADRU/mmIT6rpaSEoh4MqyWRgw3uqztRq8tXXoQCLcBGAs/s1600/19ac9c9b9ff7376fc86b45fee366a1a2-icono-de-lista-de-archivos-by-vexels.png" }}
        />
        {/* <Button icon="plus-circle" onPress={() => navigation.navigate("DetallesVitacora",{guardarConsultarAPI})}>Nueva bitácora</Button> */}
        <Headline  style={globalStyles.titulo}>{bitácoras.length > 0 ? "Bitácoras": "Aun no hay Vitacoras"}</Headline>
        <FlatList
            data={bitácoras}
            keyExtractor={cliente => (cliente.id).toString()}
            renderItem={({item}) => (
            <List.Item
                title={item.id_vitacora}
                description={item.usuario_id}
                onPress={() => navigation.navigate("DetalleVitacora",{item, guardarConsultarAPI})}
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
export default Vitacoras;