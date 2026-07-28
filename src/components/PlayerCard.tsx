import { Image, StyleSheet, Text, View } from "react-native";

export default function PlayerCard({nombre,descripcion,imagen}:any){

return(

<View style={styles.card}>

<Image
source={imagen}
style={styles.image}
/>

<Text style={styles.nombre}>
{nombre}
</Text>

<Text style={styles.descripcion}>
{descripcion}
</Text>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"white",
padding:20,
borderRadius:15,
marginBottom:20
},

image:{
width:"100%",
height:220,
resizeMode:"contain"
},

nombre:{
fontSize:25,
fontWeight:"bold",
textAlign:"center"
},

descripcion:{
fontSize:18,
textAlign:"center"
}

});