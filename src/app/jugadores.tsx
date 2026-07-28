// Importa router de Expo Router.
// Permite navegar entre pantallas.
import { router } from "expo-router";
// Importa componentes de React Native:
// Image -> mostrar imágenes
// ScrollView -> crear una pantalla con desplazamiento
// StyleSheet -> crear estilos
// Text -> mostrar textos
// TouchableOpacity -> crear botones
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function JugadoresScreen() {
  return (
    // ScrollView permite desplazarse verticalmente.
    // Es útil porque hay varias imágenes y textos.
    // style={styles.container}
    // aplica los estilos principales.
    // contentContainerStyle={{ paddingBottom: 100 , espacio interno de 100 píxeles en la parte inferior del contenido}}
    // agrega espacio extra al final para que el botón y  no quede pegado al borde inferior.
    <ScrollView style={styles.container}
 contentContainerStyle={{ paddingBottom: 100 }}>

      <Text style={styles.title}>
        España Campeón Mundial 2026
      </Text>

      <Text style={styles.subtitle}>
        Mejores jugadores de la final
      </Text>

      <Image
        source={require("../../assets/images/Ferran.jpg")}
        style={styles.image}
      />

      <Text style={styles.player}>
        Ferran Torres
      </Text>

      <Text style={styles.description}>
        Autor del gol que dio el campeonato a España.
      </Text>

      <Image
        source={require("../../assets/images/Nico.jpg")}
        style={styles.image}
      />

      <Text style={styles.player}>
        Nico Williams
      </Text>

      <Text style={styles.description}>
        Gran actuación por la banda izquierda.
      </Text>

      <Image
        source={require("../../assets/images/Pedri.jpg")}
        style={styles.image}
      />

      <Text style={styles.player}>
        Pedri González
      </Text>

      <Text style={styles.description}>
        Controló el mediocampo durante todo el encuentro.
      </Text>
<TouchableOpacity
  style={styles.button}
  onPress={() => router.back()}
>
  <Text style={styles.buttonText}>
    regresar
  </Text>
</TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AA151B",
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#F1BF00",
    textAlign: "center",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },

  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },

  player: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F1BF00",
    textAlign: "center",
    marginBottom: 8,
  },

  description: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 35,
    lineHeight: 26,
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