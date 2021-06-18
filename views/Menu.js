import React, {useEffect, useState} from 'react';
import {Text,Image, View} from 'react-native';
import {Button} from 'react-native-paper';
import globalStyles from '../Styles/global';

const Menu = ({navigation}) => {

    return ( 
    <View style={globalStyles.contenedor} >
                <Image
        style={{ width: 340, height: 90 }}
        source={{ uri: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/193355274_872431680285895_5678119665918391602_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=l9vH52HPTlgAX9AjMJn&_nc_ht=scontent.fmga3-2.fna&oh=029db479a88b5ca94ca3b6107921a9a0&oe=60C9778A" }}
        />
        <Text style={globalStyles.titulo2}>Navegar en las siguientes opciones</Text>
        <Button mode="contained" icon="equal" style={globalStyles.boton}
                onPress={() => navigation.navigate("Cliente")}>
                Ir a Clientes
            </Button>
            <Button mode="contained" icon="folder" style={globalStyles.boton}
                onPress={() => navigation.navigate("Credito")}>
                Ir a creditos
            </Button>            
    </View>
    );
}
export default Menu;