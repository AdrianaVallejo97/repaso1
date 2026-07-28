import { router } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/menu/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Escudo_selección_española_2026.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        ¡España Campeón Mundial 2026!
      </Text>

      <Text style={styles.subtitle}>
        Bienvenido
      </Text>

      <ActivityIndicator
        size="large"
        color="#FFD700"
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#AA151B",
    justifyContent:"center",
    alignItems:"center"
  },

  logo:{
    width:200,
    height:200
  },

  title:{
    fontSize:32,
    color:"#FFD700",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:20
  },

  subtitle:{
    color:"white",
    fontSize:18,
    marginTop:10
  }

});