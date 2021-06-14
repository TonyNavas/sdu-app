import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,
} from 'react-native';
import Fincas from './views/Fincas';
import NuevaFinca from './views/NuevaFinca';
import DetallesFinca from './views/DetallesFinca';
import Menu from './views/Menu';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Productores from './views/Productores';
import Vitacoras from './views/Vitacoras';
import DetallesProductor from './views/DetallesProductor';
import DetallesVitacora from './views/DetallesVitacora';

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
name="Fincas"
component={Fincas}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>
<Stack.Screen
name="DetallesFinca"
component={DetallesFinca}
options={{
headerTitleAlign:'center',
title:"Detalles de la finca"
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
{/* Fin del apartado de fincas */}

{/* Apartado para productores */}
<Stack.Screen
name="Productores"
component={Productores}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>

<Stack.Screen
name="DetallesProductor"
component={DetallesProductor}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
})}
/>
{/* Fin del apartado de productores */}

{/* Apartado para vitacoras */}

<Stack.Screen
name="Vitacoras"
component={Vitacoras}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
title:"Bitácotas de asistencia"
})}
/>
<Stack.Screen
name="DetalleVitacora"
component={DetallesVitacora}
options={ ({navigation, route}) => ({
headerTitleAlign:'center',
title:"Detalles de bitácoras"
})}
/>
{/* Fin del apartado de vitacoras */}

</Stack.Navigator>
</NavigationContainer>
</PaperProvider>
</>
);
};
const styles = StyleSheet.create({
});
export default App;
