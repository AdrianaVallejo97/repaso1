import { Image, StyleSheet, Text, View } from "react-native";

export default function StudentCard() {
  return (
    <View style={styles.card}>

      <Image
        source={require("../../assets/images/adri.jpeg")}
        style={styles.image}
      />

      <Text style={styles.nombre}>
        Adriana Vallejo
      </Text>

      <Text style={styles.info}>
        Ingeniería en Sistemas de Información
      </Text>

      <Text style={styles.info}>
        Universidad Central del Ecuador
      </Text>

      <Text style={styles.info}>
        Décimo Semestre
      </Text>

      <Text style={styles.info}>
        Proyecto: España Campeón Mundial 2026
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
    elevation: 6,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#FFD700",
  },

  nombre: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#AA151B",
    marginBottom: 10,
    textAlign: "center",
  },

  info: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
});