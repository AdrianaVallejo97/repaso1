import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Escudo_selección_española_2026.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Selección Española de Fútbol
      </Text>

      <Text style={styles.info}>
        Confederación: UEFA
      </Text>

      <Text style={styles.info}>
        Entrenador: Luis de la Fuente
      </Text>

      <Text style={styles.info}>
        Gol Ganador: Ferran Torres (España) 1-0 (Minuto 96) 
      </Text>

<TouchableOpacity
  style={styles.button}
  onPress={() => router.push("/jugadores")}
>
  <Text style={styles.buttonText}>
    Ver mejores jugadores
  </Text>
</TouchableOpacity>


  
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ca1111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000000",
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

button: {
  backgroundColor: "#FFD700",
  paddingVertical: 14,
  paddingHorizontal: 25,
  borderRadius: 10,
  marginTop: 20,
},

buttonText: {
  color: "#AA151B",
  fontSize: 18,
  fontWeight: "bold",
  textAlign: "center",
},
});