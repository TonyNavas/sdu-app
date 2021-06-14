import { StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const globalStyles = StyleSheet.create({
    contenedor:{
        flex:1,
        marginHorizontal:'2.5%',
    },
        titulo:{
            textAlign:"center",
            marginTop:15,
            fontSize:20,
            fontWeight:'bold',
            color:'skyblue'
        },
        titulo2:{
            textAlign:"center",
            marginTop:10,
            marginBottom:30,
            fontSize:20,
            fontWeight:'bold',
            color:'#566573'
        },
        fab:{
            position:'absolute',
            margin:20,
            right:0,
            bottom:40,
            backgroundColor:'#212F3D',
        },
        boton:{
            backgroundColor:'#566573',
            marginTop:10
        },
        boton2:{
            backgroundColor:'red',
            marginTop:165
        },
});
export default globalStyles;