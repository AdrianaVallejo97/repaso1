import { StyleSheet, View } from "react-native";
import StudentCard from "../../components/StudentCard";

export default function Acerca(){

return(

<View style={styles.container}>

<StudentCard/>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#AA151B",
padding:20
}

});