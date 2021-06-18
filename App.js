import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
} from 'react-native';
import Cliente from './views/Cliente';
import NuevaFinca from './views/NuevaFinca';
import DetalleCliente from './views/DetalleCliente';
import Menu from './views/Menu';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Credito from './views/Credito';
import VerCreditos from './views/VerCreditos';
import CreditoDetalle from './views/CreditoDetalle';
import DetalleCreditoDetalle from './views/DetalleCreditoDetalle';

const Stack = createStackNavigator();

//Definir el tema

const theme ={
...DefaultTheme,
colors:{
...DefaultTheme.colors,
primary:'#1774f2',
accent:'#0655BF'
}
}
const App = () => {

return (
<>
<PaperProvider>
<NavigationContainer>
<Stack.Navigator
initialRouteName="Menu"
screenOptions={{
headerStyle:{
backgroundColor:'#212F3D',
},
headerTintColor:'white',
headerTitleStyle:{
fontWeight:'bold'
}
}}>
{/* Menu para navegar entre ventanas */}
<Stack.Screen
name="Menú"
component={Menu}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
title:'Menú de navegación'
})}
/>
{/* Fin del menú */}

{/* Apartado para fincas : Ver, Detalles */}
<Stack.Screen
name="Cliente"
component={Cliente}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>
<Stack.Screen
name="DetalleCliente"
component={DetalleCliente}
options={{
headerTitleAlign:'center',
title:"Detalles del cliente"
}}
/>
<Stack.Screen
name="NuevaFinca"
component={NuevaFinca}
options={{
headerTitleAlign:'center',
title:"Nueva Finca"
}}
/>

<Stack.Screen
name="Credito"
component={Credito}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>
<Stack.Screen
name="VerCreditos"
component={VerCreditos}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>
<Stack.Screen
name="DetalleCredito"
component={CreditoDetalle}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>
<Stack.Screen
name="DetalleCreditoDetalle"
component={DetalleCreditoDetalle}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>

</Stack.Navigator>
</NavigationContainer>
</PaperProvider>
</>
);
};
const styles = StyleSheet.create({
});
export default App;
