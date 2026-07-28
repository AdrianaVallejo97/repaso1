import { ScrollView, StyleSheet, Text } from "react-native";
import PlayerCard from "../../components/PlayerCard";

export default function Espana(){

return(

<ScrollView
style={styles.container}
contentContainerStyle={{padding:20}}
>

<Text style={styles.title}>
Jugadores destacados
</Text>

<PlayerCard
nombre="Ferran Torres"
descripcion="Autor del gol del campeonato."
imagen={require("../../../assets/images/Ferran.jpg")}
/>

<PlayerCard
nombre="Nico Williams"
descripcion="Gran actuación por la banda izquierda."
imagen={require("../../../assets/images/Nico.jpg")}
/>

<PlayerCard
nombre="Pedri"
descripcion="Controló el mediocampo."
imagen={require("../../../assets/images/Pedri.jpg")}
/>

</ScrollView>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#AA151B"
},

title:{
fontSize:30,
fontWeight:"bold",
color:"#FFD700",
textAlign:"center",
marginBottom:20
}

});